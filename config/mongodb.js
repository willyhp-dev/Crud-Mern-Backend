const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://willyhp:pontianak1@eduworkwilly.4cake.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);
(async () => {
  try {
    await client.connect();
    console.log('koneksi ke mongodb Berhasil')
  } catch (error) {
    console.log(error);
  }
})();
const db = client.db('List');
module.exports = db;