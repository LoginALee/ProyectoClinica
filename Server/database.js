const mongoose = require('mongoose');
const URL = 'mongodb://localhost/clinicaDB';


/*mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));*/


mongoose.connect(URL, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('DB is connected');
    });

module.exports = mongoose;