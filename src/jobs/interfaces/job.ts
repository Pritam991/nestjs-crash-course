/* eslint-disable prettier/prettier */
import { JobType } from "../constants/jobs.constants";

export class Job {
  companyName: string;
  title: string;
  email: string;
  type: JobType = JobType.FULL_TIME;
  experience: number;
  salary: number;
  tags: string[] = [];
  isActive = true;
  id: number;
}