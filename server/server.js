import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRoutes from "../server/routes/blogPosts.js"
import dailyQuotesRoutes from "../server/routes/dailyQuotes.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(cors({
  origin: true
}));
app.use(express.json());


app.use("/test", async (req, res) => {
    console.log("Hit base API endpoint (/)");
    res.status(200).json({msg: "Hit base API endpoint (/)"})
});

app.use("/api/blogs", blogRoutes)
app.use("/api/dailyQuotes", dailyQuotesRoutes)

// Connect to MongoDB via Mongoose
mongoose.connect(process.env.ATLAS_URI)
// Only after connecting do we start listening for server requests
  .then(() => {
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
// Catch any errors
  .catch((error) => {
    console.log(error)
  })
