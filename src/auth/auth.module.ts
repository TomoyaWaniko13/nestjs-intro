import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';

// 43. Solution: Create an Auth Module

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
