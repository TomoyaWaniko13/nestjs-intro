import { postType } from '../enum/postType.enum';
import { postStatus } from '../enum/postStatus.enum';
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength } from 'class-validator';

// 51. Solution: POST Endpoint and DTO For Posts Controller
// 52. Adding Validations To CreatePostDto

export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @IsString()
  @IsOptional()
  content?: string;

  @IsOptional()
  @IsJSON()
  schema?: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  // https://basarat.gitbook.io/typescript/type-system/index-signatures
  metaOptions: [{ key: 'sidebarEnabled'; value: true }];
}
