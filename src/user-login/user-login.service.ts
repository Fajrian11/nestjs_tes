import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserLoginDto } from 'src/user/dto/user-login.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserLoginService {
    constructor(private dbService: PrismaService){}
    /**
     * 
     * @param loginDto 
     */
    async userLogin(loginDto: UserLoginDto){
        const {email, password} = loginDto;
        // const hash = await bcrypt.hash(password, 10);


        const user =  await this.dbService.user.findFirst({
            where: {
                email
            }
        })
        if(!user) {
            throw new UnauthorizedException("email tidak ada")
        }

        const isPasswordMatch =  await this.dbService.user.findFirst({
            where: {
                password
            }
        })
        if(!isPasswordMatch) {
            throw new UnauthorizedException("passowrd salah")
        }
    

        return user
    }
    
}
