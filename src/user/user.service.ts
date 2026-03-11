import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './user.repositories';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UsersRepository
  ){}

  async create(createUserDto: CreateUserDto) {
    const user = createUserDto;
    return this.userRepository.create(user);  
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.remove(id);
  }
}
