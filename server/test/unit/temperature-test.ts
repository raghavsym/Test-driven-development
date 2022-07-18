var assert = require("assert");
const expect = require("chai").expect;

const sensorDataMethods = require("../../src/lib/fileOperations");

describe("Get the status of all beers", () => {
  it("should return all beers temperature with status", async () => {
    const sensorData = sensorDataMethods.getAllBeerData();
    sensorData.forEach((obj: any) => {
      expect(obj).to.have.property("category");
      expect(obj).to.have.property("name");
      expect(obj).to.have.property("range");
      expect(obj).to.have.property("currentTemperature");
      expect(obj).to.have.property("status");
    });
  });
});

describe("Get the range of all beers with out of range status", () => {
  it("should return all beers temperature with out of range", async () => {
    const sensorData = sensorDataMethods.getAllBeerData();
    sensorData.forEach((obj: any) => {
      if (
        obj.range.start > obj.range.currentTemperature ||
        obj.range.end < obj.range.currentTemperature
      ) {
        expect(obj.status).to.have.property("status").eql("Out of range!");
      }
    });
  });
});

describe("Get the range of all beers within range status", () => {
  it("should return all beers temperature within range", async () => {
    const sensorData = sensorDataMethods.getAllBeerData();
    sensorData.forEach((obj: any) => {
      if (
        obj.range.start <= obj.range.currentTemperature &&
        obj.range.end >= obj.range.currentTemperature
      ) {
        expect(obj.status).to.have.property("status").eql("Expected!");
      }
    });
  });
});

describe("Get beer temperature status", () => {
  it("should return one beer with status", async () => {
    let beerName = 'IPA';
    const beer = sensorDataMethods.getBeerData(beerName);
    expect(beer).to.have.lengthOf(1);
    expect(beer[0]).to.have.all.keys('category', 'name', 'range', 'currentTemperature', 'status');
  });
});
