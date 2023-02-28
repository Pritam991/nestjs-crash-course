/* eslint-disable prettier/prettier */
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { IdException } from './id-exceptions';
import { Response} from 'express';

@Catch(IdException)
export class IdExceptionFilter implements IdExceptionFilter{
  catch(exception: IdException, host: ArgumentsHost) {
    const body ={
        message: exception.message,
        error: "Id error",
    };

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json(body);
  }
}