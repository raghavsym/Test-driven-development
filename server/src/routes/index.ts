import * as express from "express";
import * as bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

import currentTemperatureRouter from "./currentTemperature";
import notifyTemperatureRouter from "./notifyTemperature";

// Routes
router.use("/status", currentTemperatureRouter);
router.use("/notify", notifyTemperatureRouter);

module.exports = router;
