import * as express from "express";
const router = express.Router();

import Current from "../controllers/currentTemperature";

const CurrentTemperature = new Current();
router
  .route("/getAllBeerCurrentTemperature")
  .get(CurrentTemperature.getAllBeerCurrentTemperature);
router
  .route("/getBeerCurrentTemperature/:name")
  .get(CurrentTemperature.getBeerCurrentTemperature);

export default router;
