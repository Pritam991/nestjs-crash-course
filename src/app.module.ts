/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UsersStore } from './store/users.store';
import { Store } from './store/store';
import { UsersService } from './users.service';



@Module({
 controllers: [UsersController,AlbumsController, UsersController],
 providers: [UsersService],
    
    //UsersStore ,//{provide: Store, useClass: UsersStore,  }, 
  // {provide: 'DATABASE_NAME', useValue:'PRITAM_PROJECT'},
    
//     //async providers
//     {provide: 'DATABASE_CONNECTION',
//      useFactory: async () => {
//         const connection = await createConnection();
//         return connection;
//      },
//     inject: [],
// },

   


})
export class AppModule {}
