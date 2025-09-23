import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FlightService } from "./flight.service";
import { CreateFlightDto } from "./dto/create-flight.dto";
import { UpdateFlightDto } from "./dto/update-flight.dto";
import { UpdateFlightTypeDto } from "./dto/update-flight-type.dto";
import { CreateFlightTypeDto } from "./dto/create-flight-type.dto";
import { Roles } from "src/auth/decorators/roles.decorator";
import { UserRole } from "generated/prisma";

@Roles(UserRole.MAINTAINER)
@Controller("admin")
export class AdminFlightController {
    constructor(
        private readonly service: FlightService
    ) {}

    @Post("flights")
    createFlight(
        @Body() flight: CreateFlightDto
    ) {
        return this.service.createFlight(flight);
    }

    @Get("flights")
    findAllFlights() {
        return this.service.findAllAdmin();
    }

    @Get("flights/:id")
    findOneFlight(
        @Param("id") id: number
    ) {
        return this.service.findAdminById(id);
    }

    @Put("flights/:id")
    updateFlight(
        @Param("id") id: number,
        @Body() updateFlight: UpdateFlightDto
    ) {
        return this.service.updateFlight(id, updateFlight);
    }

    @Delete("flights/:id")
    removeFlight(
        @Param("id") id: number
    ) {
        return this.service.removeFlight(id);
    }
    
    @Post('flight-types')
  createFlightType(@Body() createFlightTypeDto: CreateFlightTypeDto) {
    return this.service.createFlightType(createFlightTypeDto);
  }

  @Get('flight-types')
  findAllFlightTypes() {
    return this.service.getAllFlightTypes();
  }

  @Put('flight-types/:id')
  updateFlightType(
    @Param('id') id: number,
    @Body() updateFlightTypeDto: UpdateFlightTypeDto,
  ) {
    return this.service.updateFlightType(id, updateFlightTypeDto);
  }

  @Delete('flight-types/:id')
  removeFlightType(@Param('id') id: number) {
    return this.service.deleteFlightType(id);
  }
}