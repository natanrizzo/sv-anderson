import { Body, Controller, Get, Param, Post, Request } from "@nestjs/common";
import { ReservationService } from "./reservation.service";
import { CreateReservationDto } from "./dto/create-reservation.dto";
import { Roles } from "src/auth/decorators/roles.decorator";
import { UserRole } from "generated/prisma";

@Controller("reservations")
@Roles(UserRole.PASSENGER)
export class ReservationController {
    constructor(
        private readonly service: ReservationService
    ) {}

    @Post()
    create(
        @Body() reservation: CreateReservationDto,
        @Request() req) {
        const userId = req.user.id;
        return this.service.create(reservation, userId);
    }

    @Get()
    findAll(@Request() req) {
        const userId = req.user.id;
        return this.service.findAllByUser(userId);
    }

    @Get(':id')
    findOne(
        @Param('id') id: number,
        @Request() req
    ) {
        const userId = req.user.id;
        return this.service.findOneByUser(id, userId);
    }

    @Post(':id/cancel')
    cancel(@Param('id') id: number, @Request() req) {
        const userId = req.user.id;
        return this.service.cancel(id, userId);
    }
}