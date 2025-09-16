import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly service: AuthService
    ) {}

    @Post("register")
    async register(
        @Body() user: RegisterUserDto
    ) {
        return await this.service.register(user);
    }


    @Post("login")
    async login(
        @Body() login: LoginDto
    ) {
        return await this.service.login(login);
    }
}