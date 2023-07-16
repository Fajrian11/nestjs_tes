import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
const SALT = 10;


@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}

    /**
     * get user
     * @returns 
     */
    async findAll(){
        return await this.dbService.user.findMany();
    }
    /**
     * 
     * @param createUserDto 
     * @returns 
     */
    async createData(createUserDto: CreateUserDto){
        const {email, password, name} = createUserDto;
        const hashedPassword = await bcrypt.hash(password, SALT);
        const user = await this.dbService.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: name,
            },
        });
        if (user) {
            return user
        }
    }

    /**
     * 
     * @param id 
     * @param data 
     * @returns 
     */
    async updateData(id: number, data: any){
        return await this.dbService.user.update({
            data,
            where: {
                id
            }
        })
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    async deleteData(id: number){
        return await this.dbService.user.delete({
            where: {
                id
            }
        })
    }
}
