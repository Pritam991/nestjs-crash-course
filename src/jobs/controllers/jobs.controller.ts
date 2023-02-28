/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateJobDTO } from "../dto/create-job.dto";
import { createJobSchema } from "../schemas/create-job.schema";

import { JobsService } from "../services/jobs.service";
import { JoiValidationPipe } from "../pipes/joi-validation.pipe";
import { IdExceptionFilter } from '../../exceptions/id-exception.filter';
import { IdException } from "src/exceptions/id-exceptions";

@Controller("jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

@Post()
createJob(@Body(ValidationPipe) createJobDto: CreateJobDTO){
  return this.jobsService.createJob(createJobDto);
}



  // @Post()
  // @UsePipes(new JoiValidationPipe(createJobSchema))
  // createJob(@Body() createJobDto: CreateJobDTO) {
  //   return this.jobsService.createJob(createJobDto);
  // }


  // Exception Filter
  // @Get(":id")
  // findJobById(@Param("id", ParseIntPipe) id: number) {
  //   if(id <= 0){
  //     throw new Error();
  //   }
  //   return { success: true, id};
  // }

  // Http Exception example
  // @Get(":id")
  // findJobById(@Param("id", ParseIntPipe) id: number) {
  //   if(id <= 0){
  //     throw new HttpException("Invalid id", HttpStatus.BAD_REQUEST);
  //   }
  //   return { success: true, id};
  // }

  // Handle custon exception filters & HttpException
  @Get(":id")
  @UseFilters(IdExceptionFilter)
  findJobById(@Param("id", ParseIntPipe) id: number) {
    if(id <= 0){
      throw new BadRequestException("Invalid id");
    }
    return { success: true, id};
  }
}