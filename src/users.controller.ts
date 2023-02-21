/* eslint-disable prettier/prettier */
import { Controller, Get, Req} from "@nestjs/common";
import { of } from "rxjs";
import { Request } from "express";

@Controller("/users")
export class UsersController{

@Get("/profile")
getProfile(@Req() req: Request){
    console.log(req.params
        );
    
    return of({
        hello: "Pritam",
    });

}

}