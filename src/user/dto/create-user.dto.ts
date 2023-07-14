import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'demo_user_name' })
  name: string;

  @ApiProperty({ default: 'demo_user_lastName' })
  lastName: string;

  @ApiProperty({ default: 'player' })
  username: string;

  @ApiProperty({ default: 'player' })
  password: string;

  @ApiProperty({ default: 'active' })
  status: string;

  @ApiProperty({ default: 'https://picsum.photos/200/300' })
  avatar: string;

  @ApiProperty({ default: 18 })
  age: number;
}
