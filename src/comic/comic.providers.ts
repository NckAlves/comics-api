import { DataSource } from 'typeorm';
import { Comic } from './entities/comic.entity';

export const ComicProviders = [
  {
    provide: 'COMIC_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Comic),
    inject: ['DATA_SOURCE'],
  },
];