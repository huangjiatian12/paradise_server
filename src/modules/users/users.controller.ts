import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user/list')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUserInfo() {
    return this.userService.getUserInfo();
  }
}
