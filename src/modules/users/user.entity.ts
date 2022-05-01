import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  account: string;

  @Column('varchar')
  pwd: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  avatar: string;

  @Column()
  auth: number;

  @Column()
  introduction: string;

  @Column()
  focusNum: number;

  @Column()
  fansNum: number;

  @Column()
  createNum: number;

  @Column()
  dynamicNum: number;

  @Column()
  ct: string;

  @Column()
  address: string;

  @Column()
  pid: number;

  @Column()
  exp: number;

  @Column()
  level: number;
}
