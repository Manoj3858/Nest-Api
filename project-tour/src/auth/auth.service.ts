import { Injectable , UnauthorizedException} from '@nestjs/common';
import { User } from './user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private users: User[] = [];
    private idCounter = 1;

    constructor(private readonly JwtService : JwtService){}

    register(email: string, password: string): string {

        const userExist = this.users.find(user => user.email === email);
        if (userExist) {
            throw new UnauthorizedException('User alredy exists');}

            const newUser: User = {
                id: this.idCounter.toString(),email, password
            };

            this.users.push(newUser);
            return 'User Registerd Successfully';
        
    }

    login(email: string, password: string):  {'access_token': string }{
        const user = this.users.find(user => user.email === email);
        if (user && user.password === password){
            const payload = { sub: user.id , email: user.email }
            const accessToken = this.JwtService.sign(payload);
            
            return {access_token : accessToken};
       } else {
            throw new UnauthorizedException('Invalid credentials');
       }

    }

    getUserById (id: number): User | undefined {
        return this.users.find(user => user.id === id.toString());
    }
}

  
  
