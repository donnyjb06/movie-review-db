import Express from "express";
import { PORT } from "./config/config.js";
import { reviewRoutes } from "./routes/review.route.js";
import cors from "cors";

const app = Express();

app.use(cors())
app.use(Express.json());

app.use("/review", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
