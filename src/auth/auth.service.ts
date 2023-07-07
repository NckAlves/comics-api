import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.email, username: user.name };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}