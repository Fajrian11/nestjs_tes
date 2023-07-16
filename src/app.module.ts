import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserLoginModule } from './user-login/user-login.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [PrismaModule, UserModule, UserLoginModule, CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
