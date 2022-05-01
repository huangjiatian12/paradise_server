import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectEntity } from './collect.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollectEntity])],
  controllers: [],
  providers: [],
})
export class UserModule {}
