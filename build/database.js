const mongoose = require("mongoose");
const URI = `mongodb+srv://billy:yeplQ6SxHW2hV5QD@cluster0.dawnq.mongodb.net/Academy?retryWrites=true&w=majority`
mongoose
  .connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((event) =>
    console.log("Successfully connected to:", event.connection.name)
  )
  .catch((error) => console.log("ERROR DETECTED: ", error));