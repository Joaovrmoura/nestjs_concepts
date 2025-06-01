import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }

  soluctionExemple(): string {
    return 'Exemplo uses the service';
  }
}
