import { Injectable } from '@nestjs/common';

// 37. Solution: Create a Posts Module
@Injectable()
export class PostsService {
  public findAll(userId: string) {
    console.log(userId);
  }
}
