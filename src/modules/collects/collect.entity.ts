import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_collects' })
export class CollectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy: number;

  @Column()
  gameId: number;

  @Column('varchar')
  content: string;

  @Column()
  ct: string;

  @Column()
  isShow: number;
}
