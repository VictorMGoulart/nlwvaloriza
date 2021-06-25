import { Request, Response } from 'express';
import { ListComplimentsReceivedByUserService } from '../services/ListComplimentsReceivedByUserService';

class ListComplimentsReceivedByUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listComplimentsReceivedByUserService =
      new ListComplimentsReceivedByUserService();

    const compliments = await listComplimentsReceivedByUserService.execute(
      user_id
    );

    return response.json(compliments);
  }
}

export { ListComplimentsReceivedByUserController };
