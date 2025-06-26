import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

/**
 * Service that contains business logic for Category operations.
 * Interacts with the Category repository to perform database queries.
 */

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoRyrepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoRyrepository.save(createCategoryDto);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoRyrepository.find();
  }

  async findOne(id: number): Promise<Category | null> {
    return await this.categoRyrepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoRyrepository.update(id, updateCategoryDto);
  }

  async remove(id: number): Promise<Category> {
    const user = await this.categoRyrepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('user not find');
    }
    await this.categoRyrepository.delete(id);
    return user;
  }
}
