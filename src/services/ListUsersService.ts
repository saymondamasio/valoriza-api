import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

export class ListUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.find()

    return classToPlain(users)
  }
}
