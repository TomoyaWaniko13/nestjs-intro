import { Body, Controller, Get, Headers, Ip, Param, ParseIntPipe, Post, Query } from '@nestjs/common';

// 15. Creating Controllers
// 17. Params, Query and Body
// 18. Additional Request Components
// 21. Validation and Transformation Needs
// 22. Validating Params with Built-in Pipes

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(@Param('id', ParseIntPipe) id: number | undefined, @Query('limit') limit: any) {
    console.log(typeof id);
    console.log(id);
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
