import { Injectable, OnModuleInit } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private connection: Connection) {}

  async onModuleInit() {
    const isConnected = this.connection.isConnected;
    if (isConnected) {
      console.log('Database connection established');
    } else {
      console.log('Database connection failed');
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
