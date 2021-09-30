import { Request, Response, Router } from "express";
import { CustomRequest } from "../../interceptor/ICustomRequest";
import { createUserController } from "./userCase/createUser";

const routes = Router();

routes.post("/users", (request: CustomRequest<Request>, response: Response) => {
  return createUserController.handle(request, response);
});

export default routes;
