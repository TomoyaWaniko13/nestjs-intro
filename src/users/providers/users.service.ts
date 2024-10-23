import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';
import { AuthService } from '../../auth/providers/auth.service';

// 33. Create a users Service
// 34. findAll Users Method
// 41. Use Users Service Inside Posts Service
// 44. Circular Dependency

@Injectable()
export class UsersService {
  constructor(
    // Injecting Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(getUserParamDto: GetUsersParamsDto, limit: number, page: number) {
    // Auth Service
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      { firstName: 'John', email: 'john@doe.com' },
      { firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }

  public findOneById(id: string) {
    return { id: 1234, firstName: 'Alice', email: 'alice@doe.com' };
  }
}
