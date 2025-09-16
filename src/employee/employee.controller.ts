import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";

@Controller("admin/employees")
export class EmployeeController {
    constructor(
        private readonly service: EmployeeService
    ) {}

    @Post()
    createEmployee(
        @Body() employee: CreateEmployeeDto
    ) {
        return this.service.create(employee);
    }

    @Get()
    getAllEmployees() {
        return this.service.getAll();
    }

    @Get(":id")
    getOneEmployee(
        @Param("id") id: number
    ) {
        return this.service.getOneById(id);
    }

    @Put(":id")
    updateEmployee(
        @Param("id") id: number,
        @Body() employee: CreateEmployeeDto
    ) {
        return this.service.update(id, employee);
    }

    @Delete(":id")
    deleteEmployee(
        @Param("id") id: number
    ) {
        return this.service.delete(id);
    }
}