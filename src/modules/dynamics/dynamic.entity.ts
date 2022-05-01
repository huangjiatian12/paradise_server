import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_dynamics' })
export class DynamicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy: number;

  @Column()
  gameId: number;

  @Column()
  shareId: number;

  @Column()
  content: string;

  @Column()
  ct: string;

  @Column()
  likeNum: number;

  @Column()
  replyNum: number;

  @Column()
  shareNum: number;

  @Column()
  type: number;

  @Column()
  isShow: number;
}
