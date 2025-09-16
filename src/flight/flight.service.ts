import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateFlightTypeDto } from "./dto/update-flight-type.dto";
import { CreateFlightTypeDto } from "./dto/create-flight-type.dto";

@Injectable()
export class FlightService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    createFlightType(flightType: CreateFlightTypeDto) {
        return this.prisma.flightType.create({
            data: flightType
        })
    }

    getAllFlightType() {
        return this.prisma.flight.findMany();
    }

    getOneByIdFlightType(id: number) {
        return this.prisma.flight.findUnique({
            where: { id }
        })
    }

    updateFlightType(id: number, flightType: UpdateFlightTypeDto) {
        return this.prisma.flightType.update({
            where: { id },
            data: flightType
        })
    }

    deleteFlightType(id: number) {
        return this.prisma.flight.delete({
            where: { id }
        })
    }
}