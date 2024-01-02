import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(express.static(path.join(__dirname, "../../../client/dist")));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../../../client/dist/index.html"));
});
