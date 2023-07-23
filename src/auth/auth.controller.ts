import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { UpdatePasswordDTO } from './dto/update-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDTO) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('update-password')
  updatePassword(@Body() updatePasswordDto: UpdatePasswordDTO) {
    return this.authService.updatePassword(
      updatePasswordDto.username,
      updatePasswordDto.oldPass,
      updatePasswordDto.newPass,
    );
  }
}
