import { Controller } from "@nestjs/common";
import { FlightService } from "./flight.service";

@Controller("flights")
export class FlightController {
    constructor(
        private readonly service: FlightService
    ) {}
}