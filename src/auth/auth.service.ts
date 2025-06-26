import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs'; // ✅ CORRETO

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(username);
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compare(pass, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    dto: CreateUserDto,
  ): Promise<{ message: string; access_token: string }> {
    const userExists = await this.usersService.findByEmail(dto.email);
    if (userExists) {
      throw new UnauthorizedException('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = await this.usersService.create({
      ...dto,
      password: hashedPassword,
    });

    const payload = { sub: newUser.id, username: newUser.username };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'Cadastro realizado com sucesso!',
      access_token: token,
    };
  }
}
