import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  getHealth() {
    return {
      service: 'payments',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
