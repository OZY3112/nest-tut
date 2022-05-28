import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types';
import { SerializedUser } from '../../types/index';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'OZY',
      password: '123456',
    },
    {
      username: 'mohla',
      password: '123456',
    },
    {
      username: 'h333',
      password: '123456',
    },
  ];
  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }
  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
