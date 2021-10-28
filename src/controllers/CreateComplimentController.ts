import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateComplimentService'

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body

    const user_sender = request.user_id

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_receiver,
      user_sender,
    })

    return response.json(compliment)
  }
}
