import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PostsController {
  public async index(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        title: "First Title",
      },
      {
        id: 2,
        title: "Second Title",
      },
    ];
  }
}
