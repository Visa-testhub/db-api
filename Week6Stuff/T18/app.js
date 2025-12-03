const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter two numbers separated by a comma: ", (numbers) => {
  if (numbers != null) {
    let parts = numbers.split(',').map(x => x.trim());
    let num1 = Number(parts[0]);
    let num2 = Number(parts[1]);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Invalid input. Please enter two valid numbers.");
    } else {
      let sum = num1 + num2;
      console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
    }
  }

  rl.close();
});