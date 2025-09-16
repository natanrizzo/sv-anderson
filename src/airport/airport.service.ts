import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AirportService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    create() {}

    getAll() {}

    getOneById(id: number) {}

    update(id: number) {}

    delete(id: number) {}
}