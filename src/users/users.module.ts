/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersController } from './controllers/users.controller';
import { UsersService } from '../users.service';


@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})

export class UsersModule {}