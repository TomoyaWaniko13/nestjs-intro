import { Injectable } from '@nestjs/common';

// 11. Understanding the app Module

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello From Nest.js!';
  }
}
