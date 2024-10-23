import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

// 29. Using DTOs with Params

export class GetUsersParamsDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number) // URL は string なので、Number に変換します。
  id?: number;
}
