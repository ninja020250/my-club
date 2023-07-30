import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/features/user/user.service';
import { encodeMD5 } from '../utils/crypto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    const encodedPass = encodeMD5(pass);
    if (!pass || encodedPass !== user.password) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return {
      access_token: await this.jwtService.signAsync(result),
    };
  }

  async updatePassword(
    username: string,
    oldPass: string,
    newPass: string,
  ): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    const encodedOldPass = encodeMD5(oldPass);
    const { password, ...result } = user;
    if (!oldPass || encodedOldPass !== password) {
      throw new UnauthorizedException();
    }
    await this.userService.updatePassword(username, newPass);
    return {
      access_token: await this.jwtService.signAsync(result),
    };
  }
}
