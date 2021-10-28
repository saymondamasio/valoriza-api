import { getCustomRepository } from 'typeorm'
import { ComplimentsRepository } from '../repositories/ComplimentsRepository'
import { UsersRepository } from '../repositories/UsersRepository'

interface IRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentService {
  async execute({ message, tag_id, user_receiver, user_sender }: IRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const usersRepository = getCustomRepository(UsersRepository)

    if (user_sender === user_receiver) {
      throw new Error('You cannot send a compliment to yourself')
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new Error('User receiver not found')
    }

    const compliment = complimentsRepository.create({
      message,
      tag_id,
      user_sender,
      user_receiver,
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}
