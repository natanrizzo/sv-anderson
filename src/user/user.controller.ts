import { Controller, Get, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
    constructor(
        private readonly service: UserService
    ) {}

    @Get("me")
    async getMe() {
        return this.service.findById(1); // TODO: implement getCurrentUser
    }

    @Put("me")
    async updateMe() {
        
    }
}