import { Request, Response, NextFunction } from "express";
const sensorDataMethods = require("../lib/fileOperations");

export default class CurrentTemperature {
  constructor() {}

  /**
   * Get all beer with temperature
   * @param req
   * @param res
   */
  public async getAllBeerCurrentTemperature(req: Request, res: Response) {
    try {
      const sensorData = await sensorDataMethods.getAllBeerData();
      res.status(200).json({
        message: "Success",
        data: sensorData,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Error",
        error: error,
      });
    }
  }

  /**
   * To get single beer details by name
   * @param req 
   * @param res 
   * @returns 
   */
  public async getBeerCurrentTemperature(req: Request, res: Response) {
    const name: string = req.params.name;

    if (!name) {
      return res.status(404).json({
        message: "Beer name not found!",
      });
    }

    try {
      const sensorData = await sensorDataMethods.getBeerData(name);
      res.status(200).json({
        message: "Success",
        data: sensorData,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Error",
        error: error,
      });
    }
  }
}
