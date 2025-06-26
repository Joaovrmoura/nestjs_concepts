import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Technology',
    description: 'Title of the category',
    minLength: 2,
    maxLength: 70,
  })
  @MinLength(2)
  @IsString()
  @MaxLength(70)
  readonly title: string;

  @ApiPropertyOptional({
    example: 'Articles related to technology and innovation',
    description: 'Description of the category',
    minLength: 2,
    maxLength: 150,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  readonly description?: string;
}
