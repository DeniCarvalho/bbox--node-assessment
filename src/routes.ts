import { Router } from "express";
import UserRouter from "./modules/user";

const router = Router();

router.use(UserRouter);

// app.get("/users", async (req: Request, res: Response) => {
//   const users = await User.find();
//   res.status(200).json(users);
// });

// app.get("/users/:id", async (req: Request, res: Response) => {
//   const user: User = await User.findOne({ uuid: req.params.id });
//   if (user) {
//     res.status(200).json(user);
//   } else res.status(404).json({ message: "User not found!" });
// });

// app.delete("/users/:id", async (req: Request, res: Response) => {
//   const user: User = await User.findOne({ uuid: req.params.id });
//   if (user) {
//     User.delete(user);
//     res.sendStatus(204);
//   } else res.status(404).json({ message: "User not found!" });
// });

// app.post(
//   "projects",
//   async ({ body }: CustomRequest<ProjectRequestBody>, res: Response) => {
//     const uuid = uuidv4();
//     const user: User = await User.findOne({ uuid: body.userId });
//     const project: Project = Project.create({
//       uuid,
//       description: body.description,
//       owner: user,
//       creationDate: new Date(),
//     });
//     await project.save();
//     res.status(201).json({ id: uuid });
//   }
// );

// app.get("/projects", async (req: Request, res: Response) => {
//   const { userId } = req.query;
//   let projects: Project[];
//   if (userId) projects = await Project.find({ where: { owner: userId } });
//   else projects = await Project.find();
//   res.status(200).json(projects);
// });

// app.get("/projects/:projectId", async (req: Request, res: Response) => {
//   const { projectId } = req.params;
//   const projects: Project = await Project.findOne({
//     where: { uuid: projectId },
//   });
//   res.status(200).json(projects);
// });

// app.delete("/projects/:projectId", async (req: Request, res: Response) => {
//   const { projectId } = req.params;
//   const project: Project = await Project.findOne({
//     where: { uuid: projectId },
//   });
//   if (project) {
//     Project.delete(project);
//     res.sendStatus(204);
//   } else res.status(404).json({ message: "User not found!" });
// });

export { router };
