import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AUTHORIZATION_KEY } from 'src/decorators/Authorization.decorator';
import { Role } from 'src/enums/role.enum';
import { Request } from 'express';
import { UserService } from 'src/features/user/user.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      AUTHORIZATION_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const payload: any = await this.jwtService.decode(token);
    const user = await this.userService.findOne(payload.id);
    if (!user) return false;
    return requiredRoles.some(
      (role) => user.roles.findIndex((r) => r.name === role) >= 0,
    );
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
