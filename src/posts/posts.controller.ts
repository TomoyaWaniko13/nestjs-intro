import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

// 37. Solution: Create a Posts Module
// 39. Create a GET Posts Route With DTO
@Controller('posts')
export class PostsController {
  // Injecting Posts Service
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
}
