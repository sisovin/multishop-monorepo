import { ConfigModule, ConfigService } from '@nestjs/config';

export class AppConfig {
  static getConfigModule() {
    return ConfigModule.forRoot({
      isGlobal: true,
    });
  }

  static getConfigService() {
    return new ConfigService();
  }
}
