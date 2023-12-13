import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookmodel.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to the MERN stack tutorial");
});
// route for save new book
app.post('/books', async(request, response) => {
try{}
catch(error){
    console.log(error.message);
    response.status(500);

}

})


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
