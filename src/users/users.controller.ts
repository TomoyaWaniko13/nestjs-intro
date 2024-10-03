import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

// 15. Creating Controllers
// 17. Params, Query and Body

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params);
    console.log(query);
    return 'You sent a get request to the users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'You sent a post request to users endpoint';
  }
}
