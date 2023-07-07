import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './user.providers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature()],
  controllers: [UserController],
  providers: [...UserProviders ,UserService],
  exports: [UserService],
})
export class UserModule {}
