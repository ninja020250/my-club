import { HttpException, HttpStatus } from '@nestjs/common';

export class ExistsException extends HttpException {
  constructor(errorCode, message) {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: message,
        errorCode: errorCode,
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
