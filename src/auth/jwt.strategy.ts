import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.JWT_SECRET || 'your-secret-key-for-dev',
        });
    }
    
    async validate(payload: { sub: number; username: string; role: string }) {
        return { id: payload.sub, username: payload.username, role: payload.role };
    }
}
