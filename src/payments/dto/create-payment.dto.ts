import {
    IsEnum,
    IsNotEmpty,
    IsString,
    ValidateIf,
    IsCreditCard,
  } from 'class-validator';
  
  enum PaymentMethod {
    CREDIT_CARD = 'CREDIT_CARD',
    BANK_SLIP = 'BANK_SLIP',
  }
  
  export class CreatePaymentDto {
    @IsEnum(PaymentMethod)
    @IsNotEmpty()
    method: PaymentMethod;
  
    @ValidateIf(o => o.method === PaymentMethod.CREDIT_CARD)
    @IsString()
    @IsNotEmpty()
    cardType?: string;
    
    @ValidateIf(o => o.method === PaymentMethod.CREDIT_CARD)
    @IsCreditCard()
    @IsNotEmpty()
    cardNumber?: string;
  
    @ValidateIf(o => o.method === PaymentMethod.CREDIT_CARD)
    @IsString()
    @IsNotEmpty()
    cardHolderName?: string;
    
    @ValidateIf(o => o.method === PaymentMethod.CREDIT_CARD)
    @IsString()
    @IsNotEmpty()
    cardExpiryDate?: string;
  
    @ValidateIf(o => o.method === PaymentMethod.CREDIT_CARD)
    @IsString()
    @IsNotEmpty()
    cardCvv?: string;
  }