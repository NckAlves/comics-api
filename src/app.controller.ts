import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Some heroes save the day in the simplest of ways. By just being there for us, or letting us know we’re believed in.' })
  @Get()
  getHello(): string {
    //Some heroes save the day in the simplest of ways. By just being there for us, or letting us know we’re believed in.
    // You gotta take the good with the bad, no matter what.
    // You can’t let the threat of losing tomorrow keep you from making the most of today.
    // truth, justice and a better tomorrow.

    return "Life doesn't give us purpose. We give life purpose."
  }
}
