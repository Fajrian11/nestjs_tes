import { Body, Get, Controller } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginDto } from 'src/user/dto/user-login.dto';

@Controller('user-login')
export class UserLoginController {
    constructor(private userloginservice: UserLoginService){}
  /**
   * 
   * @returns 
   */
    @Get()
    async userLogin(@Body() loginDto: UserLoginDto){
      return await this.userloginservice.userLogin(loginDto);
    }
}
