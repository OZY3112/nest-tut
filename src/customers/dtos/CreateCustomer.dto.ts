/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from './CreateAddressDto.dto';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmpty()
  @IsNotEmptyObject()
  address: CreateAddressDto;
}
