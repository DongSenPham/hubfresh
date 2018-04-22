const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const {Schema} = mongoose;
const sellerSchema = new Schema({
  googleId: String,
  googleDisplayName: String
});

// create a sellers schema by using sellerSchema
mongoose.model('sellers', sellerSchema);
