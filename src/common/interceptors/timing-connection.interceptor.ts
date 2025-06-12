import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { tap } from 'rxjs';

export class TimingConnectionInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    // const response = context.switchToHttp().getResponse();
    // response.setHeader('X-Custom-Header', 'value of header');
    console.log('TimingConnection executing...');
    const now = Date.now();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return next.handle().pipe(
      tap(() => {
        const finalTime = Date.now();
        const elapsedTime = finalTime - now;
        console.log('TimingConnection execute after Time:' + elapsedTime);
      }),
    );
  }
}
