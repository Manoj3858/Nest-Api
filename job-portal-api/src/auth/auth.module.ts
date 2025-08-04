import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';    
import {AuthService} from './auth.service';
import { UserModule } from '../users/users.module';     
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports:[UserModule,JwtModule.register({
        secret: 'superSecretKey',
        signOptions: { expiresIn: 'id' } 
    })],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})

export class AuthModule {}
