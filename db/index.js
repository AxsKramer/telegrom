const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function connectDB(urlDB){
  await mongoose.connect(urlDB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify:true, 
    useCreateIndex: false}
  );
  console.log('[db] Conectada con exito')
}

module.exports = connectDB;