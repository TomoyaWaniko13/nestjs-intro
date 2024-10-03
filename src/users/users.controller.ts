import { Body, Controller, DefaultValuePipe, Get, Headers, Ip, Param, ParseIntPipe, Post, Query } from '@nestjs/common';

// 15. Creating Controllers
// 17. Params, Query and Body
// 18. Additional Request Components
// 21. Validation and Transformation Needs
// 22. Validating Params with Built-in Pipes
// 23. Validating Query Params

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(page);
    return 'You sent a get request to the users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any, @Headers() headers: any, @Ip() ip: any) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'You sent a post request to users endpoint';
  }
}
