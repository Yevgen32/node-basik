import csv from "csvtojson";
import fs from "fs";

const csvUrl = "csv/task2.csv";
const nameFile = "task2.txt";

const formatCsvFile = async () => {
  try {
    const jsonArray = await csv().fromFile(csvUrl);

    const stream = fs.createWriteStream(nameFile);

    stream.once("open", function () {
      jsonArray.forEach((item) => {
        delete item["Amount"];

        return stream.write(`${JSON.stringify(item)}\n`);
      });

      stream.end();
    });
  } catch (error) {
    console.log(error);
  }
};

formatCsvFile();
