const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.laaa3.gcp.mongodb.net/mensajesChat?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(db => console.log('conexión con la base de datos correcta')).catch(err => console.log(err));