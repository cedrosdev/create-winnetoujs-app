import express from "express";
import { api } from "@Controller/api.js";

const app = express();
const PORT = process.env.PORT || 3000;
import { $html } from "./View/winnetou-ssr/dist/app.js";

app.use(express.static("Public"));

app.use(express.json());

app.get("/", (req, res) => {
  let template = new $html().constructoString();
  res.send(template);
});

api(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
