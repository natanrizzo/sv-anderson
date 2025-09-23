import { Controller, Get, Param, Query } from "@nestjs/common";
import { FlightService } from "./flight.service";
import { SearchFlightDto } from "./dto/search-flight.dto";

@Controller("flights")
export class FlightController {
    constructor(
        private readonly service: FlightService
    ) {}

    @Get()
    searchFlights(
        @Query() search: SearchFlightDto
    ) {
        return this.service.searchFlights(search);
    }

    @Get(":id")
    findOne(
        @Param("id") id: number
    ) {
        return this.service.findPublicById(id);
    }

    @Get(":id/seat-map")
    getSeatMap(
        @Param("id") id: number
    ) {
        return this.service.getSeatMap(id);
    }
}