import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto} from './dto/user.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('registro')
  registro(@Body()userDto:UserDto): boolean{
    return true
  }
}
