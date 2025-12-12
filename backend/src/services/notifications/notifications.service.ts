import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  getHealth() {
    return {
      service: 'notifications',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
