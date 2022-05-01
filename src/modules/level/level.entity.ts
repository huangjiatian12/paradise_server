import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'level_name' })
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  levelName: string;

  @Column()
  levelValue: number;

  @Column()
  exp: number;
}
