import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getHealth() {
    return {
      service: 'orders',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
