import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AirportService } from "./airport.service";
import { CreateAirportDto } from "./dto/create-airport.dto";

@Controller("admin/airport")
export class AirportController {
    constructor(
        private readonly service: AirportService
    ) {}

    @Post()
    createAirport(
        @Body() airport: CreateAirportDto
    ) {
        return this.service.create(airport);
    }

    @Get()
    getAllAirports() {
        return this.service.getAll();
    }

    @Get(":id")
    getOneAirport(
        @Param("id") id: number
    ) {
        return this.service.getOneById(id);
    }

    @Put(":id")
    updateAirport(
        @Param("id") id: number,
        @Body() airport: CreateAirportDto
    ) {
        return this.service.update(id, airport);
    }

    @Delete(":id")
    deleteAiport(
        @Param("id") id: number
    ) {
        return this.service.delete(id);
    }
}