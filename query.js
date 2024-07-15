const {Person} = require("./create-person");


// Find all people with a given name (model.find()):
Person.find({ name: 'Alice' }).then(person => console.log(person));


// Find a person by ID (model.findById()):
const personId = "6694cbc0711b83ee8f559805";
Person.findById(personId).then((person) => console.log(person));

// Find one person with a certain favorite food (model.findOne()):
const food = "Sushi";

Person.findOne({ favoriteFoods: food }).then((person) => {
  console.log("Person found who likes", food, ":", person);
});
// Classic Update with Find, Edit, Save:
Person.findById(personId).then((person) => {
    console.log(person)
    person.favoriteFoods.push("hamburger"); // Add new favorite food
    person.save();
  });

//   Update with model.findOneAndUpdate():
  const personName = "Bob";

Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }).then(
  (person) => {
    console.log("Person updated successfully:", person);
  }
);

// Delete a person by ID (model.findByIdAndRemove):
Person.findByIdAndDelete(personId).then((removedPerson) => {
    console.log("Person deleted successfully:", removedPerson);
  });

  // Delete all people with a certain name (model.remove):
const name = 'John Doe';

Person.deleteMany({ name }).then(deleteResult => console.log('People deleted:', deleteResult));

// Chained Search Queries:
Person.find({ favoriteFoods: "burritos" })
  .sort({ name: 1 }) // Sort by name ascending
  .limit(2) // Limit to 2 documents
  .select("-age") // Exclude the 'age' field
  .exec()
  .then((people) =>
    console.log("People who like burritos (limited, sorted, no age):", people)
  );