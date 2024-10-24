import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

// 29. Using DTOs with Params

export class GetUsersParamsDto {
  @ApiPropertyOptional({ description: 'Get user with a specific id', example: '1234' })
  @IsOptional()
  @IsInt()
  @Type(() => Number) // URL は string なので、Number に変換します。
  id?: number;
}
