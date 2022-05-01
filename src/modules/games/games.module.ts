import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  controllers: [],
  providers: [],
})
export class UserModule {}
