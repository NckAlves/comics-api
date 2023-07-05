import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderProviders } from './order.providers';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [...OrderProviders, OrderService]
})
export class OrderModule { }
