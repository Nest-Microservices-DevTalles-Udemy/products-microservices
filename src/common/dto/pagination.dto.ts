import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {

  @IsPositive()
  @IsOptional()
  @Type(() => Number) // Parse the value to number
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number) // Parse the value to number
  limit?: number = 10;
}
