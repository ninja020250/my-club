import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({ default: 'player' })
  username: string;

  @ApiProperty({ default: 'player' })
  password: string;
}
