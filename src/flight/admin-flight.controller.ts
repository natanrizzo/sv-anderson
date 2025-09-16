import { Controller } from "@nestjs/common";
import { FlightService } from "./flight.service";

@Controller("admin/flights")
export class AdminFlightController {
    constructor(
        private readonly service: FlightService
    ) {}
}