import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class UserLoginDto implements Prisma.UserCreateInput{
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
