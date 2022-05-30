/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
  id: number;
}
export class SerializedUser {
  id: number;
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
