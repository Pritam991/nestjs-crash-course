/* eslint-disable prettier/prettier */
import { Controller, Get, Redirect, Req} from "@nestjs/common";
import { of } from "rxjs";
import { Request } from "express";

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


}