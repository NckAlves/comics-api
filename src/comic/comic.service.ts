import { Inject, Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { UpdateComicDto } from './dto/update-comic.dto';
import { Repository } from 'typeorm';
import { Comic } from './entities/comic.entity';

@Injectable()
export class ComicService {
  userRepository: any;

  constructor(
    @Inject('COMIC_REPOSITORY')
    private comicRepository: Repository<Comic>
  ) { }

  create(createComicDto: CreateComicDto) {
    return this.comicRepository.save(createComicDto);
  }

  findAll() {
    return this.comicRepository.find();
  }

  findOne(id: number) {
    return this.comicRepository.findOne({ where: { id } })
  }

  update(id: number, updateComicDto: UpdateComicDto) {
    return this.comicRepository.update(id, updateComicDto);
  }

  remove(id: number) {
    return this.comicRepository.delete(id);
  }
}
