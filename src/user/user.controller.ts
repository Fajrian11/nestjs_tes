import { Param, Post, Body, Controller, Get, Put, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userservice: UserService){}
    /**
     * Get Users
     * @returns 
     */
    @Get()
    async findAll(){
      return await this.userservice.findAll();
    }

    /**
     * create user
     * @param body 
     * @returns 
     */
    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() body : CreateUserDto){
      return await this.userservice.createData(body);
    }

    /**
     * update user
     * @param id 
     * @param body 
     * @returns 
     */
    @UsePipes(ValidationPipe)
    @Put('/:id')
    async updateUser(@Param('id',ParseIntPipe) id, @Body() body){
      return await this.userservice.updateData(id,body)
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    @Delete('/:id')
    async deleteUser(@Param('id',ParseIntPipe) id){
      return await this.userservice.deleteData(id)
    }
}
