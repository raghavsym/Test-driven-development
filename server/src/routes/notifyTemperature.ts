import * as express from "express";
const router = express.Router();

import Notify from "../controllers/notifyTemperature";

const NotifyTemperature = new Notify();
router
  .route("/outOfRangeTemperatureStatus")
  .get(NotifyTemperature.outOfRangeTemperatureStatus);

export default router;
