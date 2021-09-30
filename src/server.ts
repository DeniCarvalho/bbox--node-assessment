import { app } from "./app";
import createConnection from "./database";
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
});

createConnection();
