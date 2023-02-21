/* eslint-disable prettier/prettier */
import { Controller, Get, Redirect, Req, Param, Query, Headers, Post,Body, Put, Delete} from "@nestjs/common";
import { of } from "rxjs";
import { Request } from "express";
import { CreateUserDTO } from "./dto";

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

@Get("/profile")
@Redirect('/users/account',302)
getProfile(@Req() req: Request){

    const rn = ~~(Math.random() * 10+1);
    if (rn<5) {
        return {
            url: '/users/account',
            statuscode: 302,
        };

        
    }
    else {
        return {
            url: '/users/wallet',
            statuscode: 302,
        };
    }
    

}
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

@Post()
addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return 'User added successfully';
}

@Get()
getUsers() {
    return USERS;
}

@Get(':id')
getUser(@Param('id') id: number){
    return USERS.find((user) => +user.id === +id);
}


@Put(':id')
updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO){
    const userIdx = USERS.findIndex((user) => +user.id === +id);

    if(!userIdx) {
        return;
    }
    USERS[userIdx] = updateUserDTO;
}


@Delete(':id')
deleteUser(@Param('id') id: number){
  USERS =  USERS.filter((user) => +user.id === +id);


}

}