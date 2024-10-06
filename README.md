# API Genrator
API Generator is a simple Node.js library designed to help developers generate random fake data for APIs, such as food, dress, and other custom data. This can be especially useful for testing purposes when you need mock data without manually creating it.
# Installation
 To install the package via npm, use the following command:
 ```npm i api-genrator```
# Features
+ Generate random Food data
+ Generate random Dress data
+ Generate Custom data with user-defined fields
+ Easy to use and customizable
# Usage
## Import the Library
First, import the library in your Node.js project:

```
const APIGenerator = require('api-genrator');
const generator = new APIGenerator();
```
# Generate Food Data
To generate a list of fake food items, you can use the generateFood() method:
```
const foodData = generator.generateFood(5); // Generates 5 food items
console.log(foodData);
```
# Example output:
```
[
  {
    "id": "abcd1234",
    "name": "Tasty Pizza",
    "price": "9.99",
    "description": "Delicious cheesy pizza with toppings",
    "image": "https://via.placeholder.com/150"
  },
  ...
]
```
# Generate Dress Data
To generate a list of fake dress items, use the generateDress() method:
```
const dressData = generator.generateDress(3); // Generates 3 dress items
console.log(dressData);
```
Example output:
```
[
  {
    "id": "xyz5678",
    "name": "Elegant Dress",
    "size": "M",
    "price": "29.99",
    "description": "A beautiful and elegant dress",
    "image": "https://via.placeholder.com/150"
  },
  ...
]
```
# Generate Custom Data
You can also generate custom data based on user-defined fields using the generateCustom() method:
```
const customData = generator.generateCustom(5, ['name', 'price']); // Generates 5 custom objects
console.log(customData);
```
Example output:
```
[
  {
    "name": "Awesome Product",
    "price": "15.99"
  },
  ...
]
```
# Example
Here’s an example of how to use all the methods:
```
 const APIGenerator = require('api-genrator');
const generator = new APIGenerator();

// Generate 5 food items
const foodData = generator.generateFood(5);
console.log('Food Data:', foodData);

// Generate 3 dress items
const dressData = generator.generateDress(3);
console.log('Dress Data:', dressData);

// Generate 5 custom items with name and price
const customData = generator.generateCustom(5, ['name', 'price']);
console.log('Custom Data:', customData);
```
# License
This project is licensed under the MIT License - see the LICENSE file for details.
# Author
Developed by Shivam Singh.

Feel free to contribute or report any issues to improve the project!

