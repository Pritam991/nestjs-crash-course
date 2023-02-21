/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';


@Module({
 controllers: [UsersController,AlbumsController],

})
export class AppModule {}
