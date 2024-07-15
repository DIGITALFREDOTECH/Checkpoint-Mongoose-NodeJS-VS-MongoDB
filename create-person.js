const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from .env
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);


const person1 = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Pasta', 'Sushi']
});

person1.save()
    .then(() => console.log('Person saved successfully!'))
    .catch(err => console.error('Error saving person:', err));

module.exports.Person=Person