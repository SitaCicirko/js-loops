const animals = ["wolf", "yeti", "dragon", "unicorn", "manticora"];

for (let animal of animals) {
  console.log(animal);
}

const colors = ["black", "blue", "green", "white", "red"];

for (let color of colors) {
  console.log(color);
}

const numbers = [15, 22, 25, 30, 100, 123, Infinity];

for (let number of numbers) {
  console.log(number);
}

numbers.forEach(function (number) {
  console.log(number);
});
