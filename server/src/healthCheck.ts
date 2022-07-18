import { Request, Response, NextFunction } from "express";

export default function healthCheck(req: Request, res: Response): any {
  try {
    res.status(200).json({
      uptime: process.uptime(),
      message: "Scucess",
      timestamp: Date.now(),
      date: new Date(Date.now()),
    });
  } catch (error) {
    res.status(503).json({
      message: "Error",
      error: "Server is down.",
      reason: error,
    });
  }
}
