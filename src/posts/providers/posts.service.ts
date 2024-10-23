import { Injectable } from '@nestjs/common';

// 37. Solution: Create a Posts Module
// 39. Create a GET Posts Route With DTO
// 40. Return Posts From Posts Service
@Injectable()
export class PostsService {
  public findAll(userId: string) {
    return [
      { title: 'Test Title', content: 'Test Content' },
      { title: 'Test Title 2', content: 'Test Content 2' },
    ];
  }
}
