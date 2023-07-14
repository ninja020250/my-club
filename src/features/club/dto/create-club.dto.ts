import { ApiProperty } from '@nestjs/swagger';

export class CreateClubDto {
  @ApiProperty({ default: 'demo_club' })
  name: string;

  @ApiProperty({ default: 'demo_club_description' })
  description: string;

  @ApiProperty({ default: 'https://picsum.photos/200/300' })
  logo: string;

  @ApiProperty({ default: 'https://picsum.photos/200/300/?blur' })
  banner: string;

  @ApiProperty({ default: 'demo_club_location' })
  location: string;
}
