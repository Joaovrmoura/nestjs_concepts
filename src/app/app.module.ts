import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';
import { CategoryModule } from 'src/category/category.module';
// main module that imports other modules
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: 'JoaoPostgres',
      autoLoadEntities: true,
      synchronize: true, // not use in prod
    }),
    PostModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
