import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy: number;

  @Column()
  gameId: number;

  @Column()
  content: string;

  @Column()
  ct: string;

  @Column()
  isShow: number;
}
