import {
  IsEmail,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Username of the user',
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly username: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'User email address',
    maxLength: 150,
  })
  @IsEmail()
  @MaxLength(150)
  readonly email: string;

  @ApiProperty({
    example: 'StrongPassword123',
    description: 'User password',
    minLength: 8,
    maxLength: 128,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  readonly password: string;

  @ApiPropertyOptional({
    example: false,
    description: 'Boolean flag to indicate if user is admin',
  })
  @IsOptional()
  @IsBoolean()
  readonly isAdmin?: boolean;
}
