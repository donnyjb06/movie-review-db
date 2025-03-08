import Express from "express";
import { PORT } from "config/config";
import { reviewRoutes } from "routes/review.route";

const app = Express();

app.use(Express.json());

app.use("/review", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
