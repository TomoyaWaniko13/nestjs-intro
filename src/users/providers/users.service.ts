import { Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';

// 33. Create a users Service
// 34. findAll Users Method
@Injectable()
export class UsersService {
  public findAll(getUserParamDto: GetUsersParamsDto, limit: number, page: number) {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }
}
