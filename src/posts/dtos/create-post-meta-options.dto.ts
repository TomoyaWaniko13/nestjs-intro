import { IsNotEmpty, IsString } from 'class-validator';

// 53. Working With Nested DTOs

export class CreatePostMetaOptionsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
