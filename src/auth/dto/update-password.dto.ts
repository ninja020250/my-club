import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDTO {
  @ApiProperty({ default: 'player' })
  username: string;

  @ApiProperty({ default: 'player' })
  oldPass: string;

  @ApiProperty({ default: 'player2' })
  newPass: string;
}
