var mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url)
    .then( () => {
        console.log('Database is Connected');
    })
    .catch( (err) => {
        console.log(err);
    })