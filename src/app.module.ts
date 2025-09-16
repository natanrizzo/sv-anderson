import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AirportModule } from './airport/airport.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    AirportModule
  ],
})
export class AppModule {}
