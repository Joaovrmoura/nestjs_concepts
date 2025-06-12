import { PartialType } from '@nestjs/mapped-types';
import { CreateMessagesDto } from './create-message.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateMessagesDto extends PartialType(CreateMessagesDto) {
  @IsBoolean()
  @IsOptional()
  readonly read?: boolean;
}
