import { log } from "console";
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("App is running at 3000");
});
