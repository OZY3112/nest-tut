import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 4,
      email: 'testing@gmail.com',
      name: 'testing',
    },
    {
      id: 2,
      email: 'ozy@gmail.com',
      name: 'Ozy',
    },
    {
      id: 3,
      email: 'luckyMaster@gmail.com',
      name: 'Lucky',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }
  getCustomers() {
    return this.customers;
  }
}
