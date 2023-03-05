/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { JobsController } from "./controllers/jobs.controller";
import { JobsService } from "./services/jobs.service";
import { UserAgentMiddleware, UserAgentOptions } from '../middlewares/user-agent.middleware';
import { InterviewsController } from './controllers/interviews.controller';

@Module({
  controllers: [JobsController, InterviewsController],
  providers: [JobsService,
  {
    provide: UserAgentOptions,
    useValue: ["chrome", "firefox", "Postman"],
  },
],
})
export class JobsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserAgentMiddleware).forRoutes("jobs");
  }
}