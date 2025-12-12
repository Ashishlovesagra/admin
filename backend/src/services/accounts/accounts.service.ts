import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  getHealth() {
    return {
      service: 'accounts',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
