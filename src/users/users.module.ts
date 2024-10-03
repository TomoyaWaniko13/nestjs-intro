import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

// 12. Creating a New users Module
// 15. Creating Controllers

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
