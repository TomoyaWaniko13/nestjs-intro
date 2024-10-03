import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// 30. Using Mapped Types To Avoid Code Duplication

export class PatchUserDto extends PartialType(CreateUserDto) {}
