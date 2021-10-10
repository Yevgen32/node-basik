import csv from "csvtojson";
import fs from "fs";
import { pipeline } from "stream";

const csvUrl = "csv/task2.csv";
const nameFile = "task2.txt";

const readStream = fs.createReadStream(csvUrl);
const writeStream = fs.createWriteStream(nameFile);

pipeline(
  readStream,
  csv({ ignoreColumns: /(amount)/ }).preFileLine((line, index) =>
    index === 0 ? line.toLocaleLowerCase() : line
  ),
  writeStream,
  (err) => {
    if (err) {
      console.error(`Failed with error: ${err}`);
    }
  }
);
