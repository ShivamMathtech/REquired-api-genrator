const APIGenerator = require("./index");
const generator = new APIGenerator();

// Generate Food Data
const foodData = generator.generateFood(5);
console.log("Food Data:", foodData);

// Generate Dress Data
const dressData = generator.generateDress(5);
console.log("Dress Data:", dressData);

// Generate Custom Data
const customData = generator.generateCustom(5, ["name", "price"]);
console.log("Custom Data:", customData);
