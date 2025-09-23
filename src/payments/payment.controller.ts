import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { Roles } from "src/auth/decorators/roles.decorator";
import { UserRole } from "generated/prisma";

@Controller('payments')
@Roles(UserRole.PASSENGER)
export class PaymentController {
    constructor(
        private readonly service: PaymentService
    ) {}

    @Post()
    processPayment(
        @Param('reservationId') reservationId: number,
        @Body() createPaymentDto: CreatePaymentDto,
        @Request() req,
    ) {
        const userId = req.user.id;
        
        return this.service.processPayment(
            reservationId,
            userId,
            createPaymentDto,
        );
    }
}