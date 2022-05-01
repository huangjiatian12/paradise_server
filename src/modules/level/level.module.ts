import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './level.entity';
@Module({
  imports: [TypeOrmModule.forFeature([LevelEntity])],
  controllers: [],
  providers: [],
})
export class UserModule {}
