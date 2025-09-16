import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateFlightTypeDto } from "./dto/update-flight-type.dto";
import { CreateFlightTypeDto } from "./dto/create-flight-type.dto";
import { CreateFlightDto } from "./dto/create-flight.dto";
import { SearchFlightDto } from "./dto/search-flight.dto";

@Injectable()
export class FlightService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async createFlight(flight: CreateFlightDto) {
        const { stopovers, crewMemberIds, ...flightData } = flight;

        // Create the flight with stopovers and crew members in a transaction
        return await this.prisma.$transaction(async (tx) => {
            // Create the main flight record
            const createdFlight = await tx.flight.create({
                data: {
                    ...flightData,
                    departureDateTime: new Date(flightData.departureDateTime),
                    arrivalDateTime: new Date(flightData.arrivalDateTime),
                },
                include: {
                    flightType: true,
                    aircraft: {
                        include: {
                            aircraftType: true
                        }
                    },
                    originAirport: true,
                    destinationAirport: true,
                }
            });

            // Create stopovers if provided
            if (stopovers && stopovers.length > 0) {
                await tx.stopover.createMany({
                    data: stopovers.map(stopover => ({
                        ...stopover,
                        flightId: createdFlight.id,
                        arrivalDateTime: new Date(stopover.arrivalDateTime),
                        departureDateTime: new Date(stopover.departureDateTime),
                    }))
                });
            }

            // Assign crew members if provided
            if (crewMemberIds && crewMemberIds.length > 0) {
                await tx.flightCrew.createMany({
                    data: crewMemberIds.map(employeeId => ({
                        flightId: createdFlight.id,
                        employeeId: employeeId
                    }))
                });
            }

            // Return the complete flight with all relations
            return await tx.flight.findUnique({
                where: { id: createdFlight.id },
                include: {
                    flightType: true,
                    aircraft: {
                        include: {
                            aircraftType: true
                        }
                    },
                    originAirport: true,
                    destinationAirport: true,
                    stopovers: {
                        include: {
                            airport: true
                        },
                        orderBy: {
                            order: 'asc'
                        }
                    },
                    crewMembers: {
                        include: {
                            employee: true
                        }
                    }
                }
            });
        });
    }

    async searchFlights(searchParams: SearchFlightDto) {
        const { originAirportCode, destinationAirportCode, departureDate } = searchParams;

        // First, find the airport IDs for the given codes
        const [originAirport, destinationAirport] = await Promise.all([
            this.prisma.airport.findFirst({
                where: { code: originAirportCode }
            }),
            this.prisma.airport.findFirst({
                where: { code: destinationAirportCode }
            })
        ]);

        if (!originAirport) {
            throw new Error(`Origin airport with code '${originAirportCode}' not found`);
        }

        if (!destinationAirport) {
            throw new Error(`Destination airport with code '${destinationAirportCode}' not found`);
        }

        // Create date range for the departure date (start and end of day)
        const searchDate = new Date(departureDate);
        const startOfDay = new Date(searchDate);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(searchDate);
        endOfDay.setHours(23, 59, 59, 999);

        // Search for flights
        return await this.prisma.flight.findMany({
            where: {
                originAirportId: originAirport.id,
                destinationAirportId: destinationAirport.id,
                departureDateTime: {
                    gte: startOfDay,
                    lte: endOfDay
                }
            },
            include: {
                flightType: true,
                aircraft: {
                    include: {
                        aircraftType: true
                    }
                },
                originAirport: true,
                destinationAirport: true,
                stopovers: {
                    include: {
                        airport: true
                    },
                    orderBy: {
                        order: 'asc'
                    }
                },
                crewMembers: {
                    include: {
                        employee: true
                    }
                }
            },
            orderBy: {
                departureDateTime: 'asc'
            }
        });
    }

    getSeatMap(flightId: number) {
        return this.prisma.flight.findUnique({
            where: { id: flightId },
            include: {
                aircraft: true
            }
        })
    }

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