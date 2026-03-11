import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersRepository{
   
   private usersRepository: User[] = [];

   create(userCreate: CreateUserDto){

      const newUser: User = {
         id: this.usersRepository.length + 1,
         ...userCreate
      };

      this.usersRepository.push(newUser);

      return newUser;
   }

   findAll(){
      return this.usersRepository;
   }

   findOne(id: number){
      return this.usersRepository.find(user => user.id === id)
   }

   update(id: number, UpdateUserDto: UpdateUserDto){
      const user = this.findOne(id);
      if(!user)return null;
      Object.assign(user, UpdateUserDto);
      return user;
   }

   remove(id:number){
      const index = this.usersRepository.findIndex(
         user => user.id === id
      );

      if(index === -1) return null;
      
      const removed = this.usersRepository.splice(index,1);
      return removed;
   }
}