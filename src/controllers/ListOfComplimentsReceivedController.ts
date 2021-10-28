import { Request, Response } from 'express'
import { ListOfComplimentsReceivedService } from '../services/ListOfComplimentsReceivedService'

export class ListOfComplimentsReceivedController {
  async handle(request: Request, response: Response) {
    const listOfComplimentsReceivedService =
      new ListOfComplimentsReceivedService()

    const { user_id } = request

    const compliments = await listOfComplimentsReceivedService.execute(user_id)

    return response.json(compliments)
  }
}
