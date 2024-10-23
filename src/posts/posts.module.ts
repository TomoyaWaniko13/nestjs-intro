import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';

// 37. Solution: Create a Posts Module

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
