const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gimme5');

mongoose.connection.once('open', () => {
    console.log('Connection was successful!');
}).on('error', (error) => {
    console.log('Connection Error: ', error);
});