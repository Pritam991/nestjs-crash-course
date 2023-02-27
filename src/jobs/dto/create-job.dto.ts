/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { JobType } from "../constants/jobs.constants";
import { IsString, IsNotEmpty, IsEmail, IsIn, IsOptional, IsInt, IsNumber, ArrayMinSize, IsBoolean, ValidateNested, IsObject} from "class-validator";
export class LocationDTO {
  @IsString()
  @IsNotEmpty()
  city: string;
  country: string;
}



export class CreateJobDTO {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEmail()
  email: string;

  @IsIn(Object.keys(JobType))
  @IsOptional()
  type?: JobType;

  @IsInt()
  @IsNotEmpty()
  experience: number;

  @IsNumber()
  @IsNotEmpty()
  salary: number;

  @IsString({each: true})
  @ArrayMinSize(1)
  tags?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

@ValidateNested()
@IsObject()
@Type(() => LocationDTO)
  location: LocationDTO;
}