import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendEntity } from './friend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FriendEntity])],
  controllers: [],
  providers: [],
})
export class UserModule {}
