// Import required libraries
const faker = require("faker");

class APIGenerator {
  constructor() {}

  // Generate fake food data
  generateFood(count = 10) {
    const foodItems = [];
    for (let i = 0; i < count; i++) {
      foodItems.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.lorem.sentence(),
        image: faker.image.food(),
      });
    }
    return foodItems;
  }

  // Generate fake dress data
  generateDress(count = 10) {
    const dressItems = [];
    for (let i = 0; i < count; i++) {
      dressItems.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        size: faker.random.arrayElement(["S", "M", "L", "XL"]),
        price: faker.commerce.price(),
        description: faker.lorem.sentence(),
        image: faker.image.fashion(),
      });
    }
    return dressItems;
  }

  // Generate custom data for any category
  generateCustom(count = 10, customFields) {
    const customItems = [];
    for (let i = 0; i < count; i++) {
      const item = {};
      customFields.forEach((field) => {
        item[field] = faker.commerce[field] || faker.lorem.word();
      });
      customItems.push(item);
    }
    return customItems;
  }
}

module.exports = APIGenerator;
