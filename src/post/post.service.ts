import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { Category } from '../category/entities/category.entity';
import { User } from '../user/entities/user.entity';

/**
 * Contains business logic related to Posts.
 * Performs database operations through the post repository.
 */

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  /**
   * Creates and saves a new post in the database.
   * @param createPostDto - authid and category id is required!.
   * @returns The saved post entity.
   */

  async create(createPostDto: CreatePostDto) {
    const post = new Post();

    post.title = createPostDto.title;
    post.body = createPostDto.body;

    if (createPostDto.categoryId) {
      post.category = { id: createPostDto.categoryId } as Category;
    }

    if (createPostDto.authorId) {
      post.author = { id: createPostDto.authorId } as User;
    }

    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find({
      relations: ['author', 'category'],
    });
  }

  async findOne(id: number): Promise<Post | null> {
    return await this.postRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['author', 'category'],
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return await this.postRepository.update(id, updatePostDto);
  }

  async remove(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post não encontrado');
    }
    await this.postRepository.delete(id);
    return post;
  }
}
