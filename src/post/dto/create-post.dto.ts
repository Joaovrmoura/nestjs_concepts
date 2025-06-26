import {
  IsNumber,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Title of Post' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(255)
  readonly title: string;

  @ApiProperty({ example: 'Content of post' })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(1500)
  readonly body: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  readonly categoryId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  readonly authorId: number;
}
