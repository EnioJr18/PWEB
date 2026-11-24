import express from "express";
import routes from "./src/routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Escola de Curso em http://localhost:${PORT}`);
});
