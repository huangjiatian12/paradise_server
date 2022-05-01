import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyEntity } from './reply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReplyEntity])],
  controllers: [],
  providers: [],
})
export class UserModule {}
