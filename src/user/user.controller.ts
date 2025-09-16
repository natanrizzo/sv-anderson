import { Body, Controller, Get, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";

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
    async updateMe(
        @Body() updateData: UpdateUserDto
    ) {
        return this.service.update(1, updateData); // TODO: implement getCurrentUser
    }
}