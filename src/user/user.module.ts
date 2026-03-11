import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersRepository } from './user.repositories';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
  exports: [UserService]
})
export class UserModule {}
