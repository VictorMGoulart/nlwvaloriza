import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(request: Request, response: Response) {
    const tagsService = new ListTagsService();

    const tags = await tagsService.execute();

    return response.json(tags);
  }
}

export { ListTagsController };
