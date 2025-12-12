import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './services/accounts/accounts.module';
import { CatalogModule } from './services/catalog/catalog.module';
import { OrdersModule } from './services/orders/orders.module';
import { PaymentsModule } from './services/payments/payments.module';
import { NotificationsModule } from './services/notifications/notifications.module';

@Module({
  imports: [
    AccountsModule,
    CatalogModule,
    OrdersModule,
    PaymentsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
