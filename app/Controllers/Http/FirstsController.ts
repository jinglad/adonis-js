import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FirstsController {
  async index(ctx: HttpContextContract) {
    return [
      {
        id: 1,
        msg: "hello world",
      },
      {
        id: 2,
        msg: "welcome to new world",
      },
    ];
  }
}
