import { Request, Response, NextFunction } from "express";
const sensorDataMethods = require("../lib/fileOperations");

export default class NotifyTemperature {
  constructor() {}

  /**
   * Get only out of range temperature beers
   * @param req
   * @param res
   */
  public async outOfRangeTemperatureStatus(req: Request, res: Response) {
    try {
      let sensorData = await sensorDataMethods.getAllBeerData();
      sensorData = sensorData.filter((beer: any) => {
        if (
          beer.currentTemperature < beer.range.start ||
          beer.currentTemperature > beer.range.end
        ) {
          return true;
        }
        return false;
      });
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
