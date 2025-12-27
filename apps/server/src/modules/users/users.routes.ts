import type { FastifyInstance, FastifyRequest } from "fastify";
import { userService } from "./users.services";

export default async function userRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return { users: [] };
  });

  app.get("/:id", async (req: FastifyRequest<{ Params: { id: string } }>) => {
    console.log("get user", req.params.id);
    const user = await userService.getById(req.params.id);
    return { user };
  });

  app.post(
    "/",
    async (
      req: FastifyRequest<{
        Body: {
          externalId: string;
          firstName: string;
          lastName: string;
          email: string;
        };
      }>
    ) => {
      const user = await userService.create({
        externalId: req.body.externalId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      return { user };
    }
  );

  app.put(
    "/:id",
    async (
      req: FastifyRequest<{ Params: { id: string }; Body: { email: string } }>
    ) => {
      const user = await userService.update(req.params.id, req.body);
      return { user };
    }
  );

  app.delete(
    "/:id",
    async (req: FastifyRequest<{ Params: { id: string } }>) => {
      await userService.delete(req.params.id);
      return { success: true };
    }
  );
}
