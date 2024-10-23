import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';

// 12. Creating a New users Module
// 15. Creating Controllers
// 33. Create a users Service
// 41. Use Users Service Inside Posts Service

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
