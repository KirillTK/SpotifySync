import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler, HttpException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(({ status, message }) => {
          // todo need to specify
          throw new HttpException(message, status);
        }),
      );
  }
}
