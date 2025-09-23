import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AirportModule } from './airport/airport.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { EmployeeModule } from './employee/employee.module';
import { FlightModule } from './flight/flight.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    AirportModule,
    AircraftModule,
    EmployeeModule,
    FlightModule,
    ReservationModule
  ],
})
export class AppModule {}
