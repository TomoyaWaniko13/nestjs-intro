import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

// 15. Creating Controllers
// 17. Params, Query and Body
// 18. Additional Request Components
// 21. Validation and Transformation Needs
// 22. Validating Params with Built-in Pipes
// 23. Validating Query Params
// 26. Connecting DTO to Route Method
// 27. Global Pipes and Avoiding Malicious Request
// 28. Converting to an Instance of DTO
// 29. Using DTOs with Params
// 33. Create a users Service

@Controller('users')
export class UsersController {
  // Injecting Users Service
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id?')
  public getUsers(
    @Param() getUserPramDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserPramDto);
    console.log(`limit: ${limit}`);
    console.log(`page ${page}`);
    return 'You sent a get request to the users endpoint';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log(createUserDto instanceof CreateUserDto);
    return 'You sent a post request to users endpoint';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
