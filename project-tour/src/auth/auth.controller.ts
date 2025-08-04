import { Controller ,Get,Body,Post,UseGuards,Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

        @Post('register')
  register(@Body() body: { email: string; password: string }) {
    return this.authService.register(body.email, body.password);
  }

    @Post('login')
    login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
}

    @UseGuards(JwtAuthGuard)
        @Get('profile')
        getProfile(@Req() req){
            return {message: 'You are authenticated', user: req.user};
        }

    }



  

