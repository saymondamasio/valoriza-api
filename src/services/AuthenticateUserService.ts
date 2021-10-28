import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

interface IRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({
      email,
    })

    if (!user) {
      throw new Error('Incorrect email/password combination')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Incorrect email/password combination')
    }

    const token = sign({ email }, '2aee45cc76db1fe7d5245a860aa721576b73d508', {
      subject: user.id,
      expiresIn: '1d',
    })

    return {
      token,
    }
  }
}
