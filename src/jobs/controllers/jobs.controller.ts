/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateJobDTO } from "../dto/create-job.dto";
import { createJobSchema } from "../schemas/create-job.schema";

import { JobsService } from "../services/jobs.service";
import { JoiValidationPipe } from "../pipes/joi-validation.pipe";

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
}