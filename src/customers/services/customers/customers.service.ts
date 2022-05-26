import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 4,
      email: 'testing@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'ozy@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'luckyMaster@gmail.com',
      createdAt: new Date(),
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
