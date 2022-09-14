"use strict";
const fs = require("fs");

const duration = 2503;
const fileData = fs
  .readFileSync("./reindeer-olympics.txt", "utf-8")
  .split("\n");

const getMaxDistance = (reindeer) => {
  try {
    const reindeerIputs = reindeer.match(/\d+/g).map((i) => Number(i));
    const name = reindeer.slice(0, reindeer.indexOf(" "));
    const speed = reindeerIputs[0];
    const time = reindeerIputs[1];
    const restTime = reindeerIputs[2];
    //log for test name and max distance
    console.log({
      name: name,
      maxDistane:
        Math.ceil(duration / (time + restTime)) * (speed * time) + " km",
    });
    return Math.ceil(duration / (time + restTime)) * (speed * time);
  } catch (err) {
    console.error(err);
  }
};

const res = fileData.reduce(
  (max, reindeer) =>
    getMaxDistance(reindeer) > max ? getMaxDistance(reindeer) : max,
  0
);
console.log(res);
