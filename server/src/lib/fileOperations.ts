import * as fs from "fs";
import { join } from "path";
const filePath = "./src/sensordata/correctData.json";
const mutationPath = "./src/sensordata/currentTemperature.json";


// To update sensor date file after 5 seconds
setInterval(() => {
  readAndWriteSensorData();
}, 5000);

/**
 * Read sensor data file
 * @param filepath 
 * @returns 
 */
function readFile(filepath: string) {
  try {
    const result = fs.readFileSync(join(process.cwd(), filepath), "utf-8");
    return result;
  } catch (error) {
    console.log("Error during read file: ", error);
  }
}

/**
 * Write sensor data file
 * @param filepath 
 * @param sensordata 
 * @returns 
 */
function writeFile(filepath: string, sensordata: any) {
  try {
    const result = fs.writeFileSync(
      join(process.cwd(), filepath),
      sensordata,
      "utf-8"
    );
    return result;
  } catch (error) {
    console.log("Error during write file: ", error);
  }
}

/**
 * Get all beer data from sensor data file
 * @returns 
 */
const getAllBeerData = () => {
  let sensordata: any = readFile(mutationPath);
  return JSON.parse(sensordata);
};

/**
 * Get single beer data
 * @param name 
 * @returns []
 */
const getBeerData = (name: string) => {
  let sensordata: any = readFile(mutationPath);
  return sensordata.filter((beer) => {
    if (beer.name === name) {
      return true;
    }
  });
};

/**
 * Random temperature generator
 * @param max 
 * @returns int
 */
async function getRandomInt(max) {
  return Math.floor(Math.random() * max) - 1;
}

/**
 * Read and write sensor data file.
 */
async function readAndWriteSensorData() {
  try {
    let sensordata: any = readFile(filePath);
    sensordata = JSON.parse(sensordata);
    for (let i = 0; i < sensordata.length; i++) {
      let beer = sensordata[i];
      let temp = await getRandomInt(4);
      beer.currentTemperature = beer.currentTemperature + temp;
      if (
        beer.currentTemperature >= beer.range.start &&
        beer.currentTemperature <= beer.range.end
      ) {
        sensordata[i]["status"] = "Expected!";
      } else {
        sensordata[i]["status"] = "Out of range!";
      }
    }
    sensordata = JSON.stringify(sensordata);
    writeFile(mutationPath, sensordata);
  } catch (error) {
    console.log("Error during read/write file: ", error);
  }
}

module.exports = {
  getAllBeerData,
  getBeerData
};
