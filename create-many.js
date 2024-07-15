const {Person} = require("./create-person");

const arrayOfPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['Salad', 'Burgers'] },
    { name: 'Bob', age: 32, favoriteFoods: ['Pasta', 'Steak'] },
    { name: 'Charlie', age: 40, favoriteFoods: ['Sushi', 'Thai food'] },
  ];
  
  // Create multiple people using model.create()
  Person.create(arrayOfPeople
)