/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Store } from './store/store';

export interface User{
    name: string;
    age: number;
    id: number;
}

@Injectable()
export class UsersService {

    private store = new Map<number, User>();

    addUser(user: User) {
        this.store.set(user.id, user);
    }

    getUser(id: number) {
        return this.store.get(id);
    }

    getUsers() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return Array.from(this.store).map(([_, user]) => user);
    }

    updateUser(id: number, user: User) {
        this.store.set(id, user);
    }

    deleteUser(id: number) {
        this.store.delete(id);
    }
}