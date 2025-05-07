import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export class DatabaseConfig {
  static getTypeOrmModuleOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'multishop',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }

  static getTypeOrmModule() {
    return TypeOrmModule.forRoot(this.getTypeOrmModuleOptions());
  }
}
