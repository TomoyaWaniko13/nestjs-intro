import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

// 37. Solution: Create a Posts Module
// 39. Create a GET Posts Route With DTO
// 40. Return Posts From Posts Service
// 41. Use Users Service Inside Posts Service

@Injectable()
export class PostsService {
  constructor(
    // Injecting UsersService
    private readonly usersService: UsersService,
  ) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);

    return [
      { user: user, title: 'Test Title', content: 'Test Content' },
      { user: user, title: 'Test Title 2', content: 'Test Content 2' },
    ];
  }
}
