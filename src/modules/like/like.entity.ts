import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'like_dynamic' })
export class LikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dynamicId: number;

  @Column()
  createdBy: number;

  @Column()
  ct: string;
}
