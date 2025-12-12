import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogService {
  getHealth() {
    return {
      service: 'catalog',
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
