import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

// 43. Solution: Create an Auth Module
// 44. Circular Dependency

@Injectable()
export class AuthService {
  constructor(
    // Injecting UserService
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    // check users exists database
    const user = this.usersService.findOneById('1234');
    // login

    // token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
