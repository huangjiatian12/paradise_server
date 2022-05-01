import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_message' })
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: number;

  @Column()
  content: string;

  @Column()
  ct: string;

  @Column()
  createdBy: number;

  @Column()
  dynamicId: number;

  @Column()
  createdAuthor: string;

  @Column()
  uid: number;
}
