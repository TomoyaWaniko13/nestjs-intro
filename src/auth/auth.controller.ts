import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

// 43. Solution: Create an Auth Module

@Controller('auth')
export class AuthController {
  // injecting Auth service
  constructor(private readonly authService: AuthService) {}
}
