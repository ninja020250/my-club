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

export class InActiveException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Your account is inactive!!!',
        errorCode: 'INACTIVE_ACCOUNT',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
