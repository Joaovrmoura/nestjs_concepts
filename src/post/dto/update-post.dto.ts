import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import {
  IsNumber,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiPropertyOptional({
    example: 'Updated post title',
    description: 'Title of the post (max 255 characters)',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly title: string;

  @ApiPropertyOptional({
    example: 'Updated content of the post...',
    description: 'Body content of the post (max 1500 characters)',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1500)
  readonly body: string;

  @ApiPropertyOptional({
    example: 2,
    description: 'ID of the category related to the post',
  })
  @IsNumber()
  @IsOptional()
  readonly categoryId?: number;

  @ApiPropertyOptional({
    example: 5,
    description: 'ID of the author of the post',
  })
  @IsNumber()
  @IsOptional()
  readonly authorId?: number;
}
