import { Express } from "express";
import { healthCheck } from "@Model/api.model";
export const api = (app: Express) => {
  app.get("/api/health", (req, res) => {
    return res.json(healthCheck());
  });
};
