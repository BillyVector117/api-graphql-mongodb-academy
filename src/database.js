const mongoose = require("mongoose");
const URI = `mongodb+srv://XXXX-XXXXXX-XXXXXX-XXXXX:XXXX-XXXXXX-XXXXXX-XXXXX@cluster0.dawnq.mongodb.net/XXXX-XXXXXX-XXXXXX-XXXXX?retryWrites=true&w=majority`
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