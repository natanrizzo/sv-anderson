import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { Roles } from "src/auth/decorators/roles.decorator";
import { UserRole } from "generated/prisma";

@ApiTags("Payments")
@Controller('payments')
@Roles(UserRole.PASSENGER)
export class PaymentController {
    constructor(
        private readonly service: PaymentService
    ) {}

    @ApiOperation({ summary: "Process a payment for a reservation" })
    @ApiResponse({ status: 201, description: "Payment processed successfully" })
    @ApiResponse({ status: 400, description: "Invalid payment details" })
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