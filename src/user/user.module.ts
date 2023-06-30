import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders ,UserService]
})
export class UserModule {}
