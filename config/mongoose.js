const mongoose = require("mongoose");
// const url =
//   "mongodb+srv://willyhp:pontianak1@eduworkwilly.4cake.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const url = 'mongodb+srv://willyhp:pontianak1@eduworkwilly.4cake.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const connection = async () => {
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(" Database Successfully Connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = connection;
const mongoURI =
  "mongodb+srv://willyhp:pontianak1@eduworkwilly.4cake.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // eslint-disable-next-line
    console.log("Database Connection Established...!");
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.log("Error: Database connection can not be established...!", err);
  });
