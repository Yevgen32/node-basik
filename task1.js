import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (text) => {
  const reverseString = text.split("").reverse().join("");

  console.log(`${reverseString}`);
});
