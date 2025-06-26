// Ele é utilizado para interceptar e transformar o valor
// de um parâmetro de rota chamado id, antes de ele chegar no método do controller.

import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// metadata.type → indica o tipo do dado: 'body', 'query' ou 'param'
// metadata.data → nome do campo, por exemplo: 'id'

@Injectable()
export class ParseIntIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param' || metadata.data !== 'id') {
      return value;
    }

    const parsedValue = Number(value);

    if (isNaN(parsedValue)) {
      throw new BadRequestException('ParseIntPipe wait a string numeric');
    }
    if (parsedValue < 0) {
      throw new BadRequestException(
        'ParseIntPipe awaita number bigger than zero',
      );
    }
    return value;
  }
}
