const csv = require("csvtojson");
const fs = require("fs");
const stream = require("stream");

const csvUrl = "csv/task2.csv";
const nameFile = "task2.txt";

const readStream = fs.createReadStream(csvUrl);
const writeStream = fs.createWriteStream(nameFile);

stream.pipeline(
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
