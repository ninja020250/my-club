import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Authorization } from 'src/decorators/Authorization.decorator';
import { Role } from 'src/enums/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { ExistsException } from 'src/dtos/exceptions/ExistsException';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Authorization(Role.Host)
  async create(@Body() createUserDto: CreateUserDto) {
    const userExists = this.userService.usernameExist(createUserDto.username);
    if (userExists)
      throw new ExistsException(
        'USER_EXISTS',
        'This username is already taken!',
      );
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Authorization(Role.Host)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post('update-my-profile')
  @UseGuards(AuthGuard)
  updateMyProfile(
    @Req() request: any,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { user } = request;
    if (user.id != id) throw new UnauthorizedException();
    return this.userService.update(id, updateUserDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
