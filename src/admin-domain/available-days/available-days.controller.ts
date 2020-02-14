import { Controller, HttpCode, Get } from "@nestjs/common";
import { AvailableDaysService } from "./available-days.service";

@Controller("available-days")
export class AvailableDaysController {
  constructor(private availableDaysService: AvailableDaysService) {}
  @Get()
  @HttpCode(200)
  async list() {
    return await this.availableDaysService.list();
  }
}
