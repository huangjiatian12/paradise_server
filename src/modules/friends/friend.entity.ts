import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'connect_friends' })
export class FriendEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdBy: number;

  @Column()
  friendId: number;

  @Column()
  ct: string;
}
