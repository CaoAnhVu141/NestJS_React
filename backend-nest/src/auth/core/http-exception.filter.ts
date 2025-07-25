
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { error } from 'console';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    response
      .status(status)
      .json({
        error: "Lỗi rồi nha",
        message: "Có vấn đề về upload file, vui lòng thử lại",
        status: status,
      });
  }
}
