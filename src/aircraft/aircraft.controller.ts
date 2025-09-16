import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AircraftService } from "./aircraft.service";
import { CreateAircraftTypeDto } from "./dto/create-aircraft-type.dto";
import { UpdateAircraftTypeDto } from "./dto/update-aircraft-type.dto";
import { CreateAircraftDto } from "./dto/create-aircraft.dto";
import { UpdateAircraftDto } from "./dto/update-aircraft.dto";

@Controller("admin/aircraft")
export class AircraftController {
    constructor(
        private readonly service: AircraftService
    ) {}

    @Post("types")
    createAircraftType(@Body() dto: CreateAircraftTypeDto) {
        return this.service.createAircraftType(dto);
    }

    @Get("types")
    getAllAircraftTypes() {
        return this.service.getAllAircraftTypes();
    }

    @Get("types/:id")
    getOneAircraftTypeById(@Param("id") id: number) {
        return this.service.getOneAircraftTypeById(id);
    }

    @Put("types/:id")
    updateAircraftType(@Param("id") id: number, @Body() dto: UpdateAircraftTypeDto) {
        return this.service.updateAircraftType(id, dto);
    }

    @Delete("types/:id")
    deleteAircraftType(@Param("id") id: number) {
        return this.service.deleteAircraftType(id);
    }

    @Post()
    createAircraft(@Body() dto: CreateAircraftDto) {
        return this.service.createAircraft(dto);
    }

    @Get()
    getAllAircraft() {
        return this.service.getAllAircraft();
    }

    @Get(":id")
    getOneAircraftById(@Param("id") id: number) {
        return this.service.getOneAircraftById(id);
    }

    @Put(":id")
    updateAircraft(@Param("id") id: number, @Body() dto: UpdateAircraftDto) {
        return this.service.updateAircraft(id, dto);
    }

    @Delete(":id")
    deleteAircraft(@Param("id") id: number) {
        return this.service.deleteAircraft(id);
    }
}