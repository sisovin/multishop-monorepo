import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { apiClient } from '@multishop/shared-utils';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './database.config';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    UsersModule,
    ConfigModule.forRoot(),
    DatabaseConfig.getTypeOrmModule()
  ],
  controllers: [AppController],
  providers: [AppService, apiClient],
})
export class AppModule {}
