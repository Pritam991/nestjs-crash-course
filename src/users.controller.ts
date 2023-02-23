/* eslint-disable prettier/prettier */
import { Controller, Get, Redirect, Req, Param, Query, Headers, Post,Body, Put, Delete, Inject} from "@nestjs/common";
import { of  } from "rxjs";


import { CreateUserDTO } from "./dto";
import { UsersStore } from "./store/users.store";
import { Store } from "./store/store";
import { UsersService } from './users.service';

interface VideoParams{
    id: number;
    name: string;
}

interface VideoDTO{
    name: string;
    tag: string;
    date: string;
}

let USERS = [];

@Controller("/users")
export class UsersController{

   

// @Get("/profile")
// @Redirect('/users/account',302)
// getProfile(@Req() req: Request){

//     const rn = ~~(Math.random() * 10+1);
//     if (rn<5) {
//         return {
//             url: '/users/account',
//             statuscode: 302,
//         };

        
//     }
//     else {
//         return {
//             url: '/users/wallet',
//             statuscode: 302,
//         };
//     }
    

// }
@Get('/account')
redirectRoute(){
    return 'working account';
}
@Get('/wallet')
redirectWallet(){
    return 'working wallet';
}

//--------Route Parameter-----

// @Get('/videos/:id/:name')
// getVideos(@Param() params: VideoParams){
//     console.log(params);
//     return `Success`;
    
// }

//-------QueryParameter
// @Get('/videos')
// getVideos(@Query() query: VideoParams){
//     console.log(query.id, query.name);
//     return `Success`;
    
// }

//-------------Header-----
@Get('/videos')
getVideos(@Headers('user-agent') headers: string){
    console.log(headers);
    return `Success`;
    
}

//----- data Submission  JSON * URL encoded----
@Post('/video')
addVideo(@Body() requestData: VideoDTO){
    console.log(requestData.name, requestData.date);
    return {success: true};
    
}

// @Post()
// addUser(@Body() createUserDto: CreateUserDTO) {
//     USERS.push(createUserDto);
//     return 'User added successfully';
// }

@Get()
getUsers() {
    return USERS;
}

@Get(':id')
getUser(@Param('id') id: number){
    return USERS.find((user) => +user.id === +id);
}


// @Put(':id')
// updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO){
//     const userIdx = USERS.findIndex((user) => +user.id === +id);

//     if(!userIdx) {
//         return;
//     }
//     USERS[userIdx] = updateUserDTO;
// }


// @Delete(':id')
// deleteUser(@Param('id') id: number){
//   USERS =  USERS.filter((user) => +user.id === +id);


// }

// constructor(private store: Store) {
//         console.log(this.store);
    
// }


//Dependency Injection || Value Providers || Array object Primitives
// constructor(@Inject('MAIL') private emails: string[])
//  {
//    console.log(this.emails);

//     }

    // example 
// constructor(@Inject('DATABASE_NAME') private dbname: string)
//  {
//    console.log(this.dbname);

//     }

//  // async providers
//  constructor(@Inject('DATABASE_CONNECTION') private connection: any) {
//     console.log(connection);
    
//}


//  Service layer explained-----------------
constructor(private usersService: UsersService){}

@Post()
createUser(@Body() CreateUserDto: CreateUserDTO){
    this.usersService.addUser(CreateUserDto);
    return { message: 'USER ADDED'};
}

@Get()
findAllUsers() {
    return this.usersService.getUsers();
}

@Get(':id')
findUser(@Param('id') id: number) {
    return this.usersService.getUser(+id);

}

@Put(':id')
updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    this.usersService.updateUser(+id, updateUserDto);
    return { message: 'USER UPDATED'};
}

@Delete(':id')
deleteUser(@Param('id') id: number) {
    this.usersService.deleteUser(+id);
    return { message: 'USER DELETED'};
}




}

