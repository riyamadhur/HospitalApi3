// const mongoose = require('mongoose');
// // mongoose.set('useNewUrlParser', true);
// // mongoose.set('useFindAndModify', false);
// // mongoose.set('useCreateIndex', true);

// // ****** Database Connection with Mongoose ****** //
// mongoose.connect('mongodb+srv://hospitalapi:hospitalapi@cluster0.nzxxqg8.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
// const db = mongoose.connection;

// // ****** Connection Error Handling ****** //
// db.on('error', console.error.bind(console, "Error connecting to the databse"));

// // ****** Connection Error Successful ****** //
// db.once('open', function () {
//     console.log("Successfully connected to the Database");
// });
const mongoose = require('mongoose');

// ****** Database Connection with Mongoose ****** //
mongoose.connect('mongodb+srv://hospitalapi:hospitalapi@cluster0.nzxxqg8.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Use the new URL parser
    useFindAndModify: false // To use findOneAndUpdate() instead of findAndModify()
});

const db = mongoose.connection;

// ****** Connection Error Handling ****** //
db.on('error', console.error.bind(console, 'Error connecting to the database'));

// ****** Connection Successful ****** //
db.once('open', function () {
    console.log('Successfully connected to the Database');
});
