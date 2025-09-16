import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly service: AuthService
    ) {}

    @Post("register")
    async register() {
        return await this.service.register();
    }


    @Post("login")
    async login() {
        return await this.service.login();
    }
}