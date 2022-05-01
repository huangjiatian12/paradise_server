import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicEntity } from './dynamic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicEntity])],
  controllers: [],
  providers: [],
})
export class UserModule {}
