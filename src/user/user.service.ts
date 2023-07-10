import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hashPass } from 'src/utils/enconde';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    createUserDto.password = hashPass(createUserDto.password)
    return this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({select: ['id', 'name', 'email', 'orders', 'coupons']});
  }

  findById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  findOne(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
