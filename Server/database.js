const mongoose = require('mongoose');
const URL = 'mongodb://localhost/clinicaDB';


/*mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));*/


mongoose.connect(URL, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('DB is connected');

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongo is disconnected');
            process.exit(0);
        })
    })
});

module.exports = mongoose;