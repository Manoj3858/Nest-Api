import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";    
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";


@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authservice: AuthService){
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: '@777',
            }
        );
        
    }
     validate(payload: any) {
        return this.authservice.getUserById(payload.sub);
     }
}
