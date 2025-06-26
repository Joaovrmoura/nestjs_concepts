import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiPropertyOptional({
    example: 'Technology',
    description: 'Title of the category',
    minLength: 2,
    maxLength: 70,
  })
  @MinLength(2)
  @IsString()
  @MaxLength(70)
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    example: 'Articles related to technology and innovation',
    description: 'Description of the category',
    minLength: 2,
    maxLength: 150,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  @IsOptional()
  description?: string;
}
