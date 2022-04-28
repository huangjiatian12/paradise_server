import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  username: string;

  @Column('text')
  account: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  avatar: string;

  @Column()
  auth: number;
}
