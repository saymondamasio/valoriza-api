import { Request, Response } from 'express'
import { ListOfComplimentsSentService } from '../services/ListOfComplimentsSentService'

export class ListOfComplimentsSentController {
  async handle(request: Request, response: Response) {
    const listOfComplimentsSentService = new ListOfComplimentsSentService()

    const { user_id } = request

    const compliments = await listOfComplimentsSentService.execute(user_id)

    return response.json(compliments)
  }
}
