import { Request, Response } from 'express';
import { ListComplimentsSentByUserService } from '../services/ListComplimentsSentByUserService';

class ListComplimentsSentByUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listComplimentsSentByUserService =
      new ListComplimentsSentByUserService();

    const compliments = await listComplimentsSentByUserService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListComplimentsSentByUserController };
