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
try{
    if (
        !request.body.title||
        !request.body.author||
        !request.body.publishYear
    ){
        return response.log(400).send({
            message:'send all required fields title, author, publishYear',
        });
    }
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
    }
    const book = await Book.create(newBook);
}

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
