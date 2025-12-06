const mongoose = require('mongoose')


 function connect() {
    mongoose.connect('mongodb://localhost:27017/final_project')
        .then(() => { console.log("database is connected to db 🔥") })
        .catch((err) => { console.log(err) })
}
module.exports = {connect}