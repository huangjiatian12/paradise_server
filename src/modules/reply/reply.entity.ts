import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reply' })
export class ReplyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentId: number;

  @Column()
  content: string;

  @Column()
  createdBy: number;

  @Column()
  ct: string;

  @Column()
  isShow: number;
}
