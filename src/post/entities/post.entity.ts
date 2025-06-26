/**
 * Represents the Post entity in the database.
 * Contains fields like title, body, relationships to author and category.
 * Maps to the 'posts' table.
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

import { Category } from './../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  body: string;

  @ManyToOne(() => Category, (category) => category.posts, { nullable: false })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  // define users who can be zero or more post
  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  @JoinColumn({ name: 'author_id' })
  author: User;

  @CreateDateColumn({ name: 'date_time' })
  dateTime: Date;
}
