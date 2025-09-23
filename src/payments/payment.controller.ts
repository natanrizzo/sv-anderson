import { Body, Controller, Param, Post, Request } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";

@Controller('payments')
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