/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UsersStore } from './store/users.store';
import { Store } from './store/store';


@Module({
 controllers: [UsersController,AlbumsController, UsersController],
providers: [UsersStore ,{provide: Store, useClass: UsersStore },
    {provide: 'DATABASE_NAME', useValue:'PRITAM_PROJECT'},
    {provide: 'MAIL', useValue: ['peitammanijoy2001@domain.com', 'admin@domain.com']},
],
})
export class AppModule {}
