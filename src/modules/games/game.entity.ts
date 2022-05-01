import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'games' })
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  content: string;

  @Column('varchar')
  cover: string;

  @Column()
  subTitle: string;

  @Column()
  video: string;

  @Column()
  cateId: string;

  @Column()
  makers: number;

  @Column()
  company: number;

  @Column()
  ct: string;

  @Column()
  releaseDate: string;

  @Column()
  isShow: number;
}
