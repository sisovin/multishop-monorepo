import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { apiClient } from '@multishop/shared-utils';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, apiClient],
})
export class AppModule {}
