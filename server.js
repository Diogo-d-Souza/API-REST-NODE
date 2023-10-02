import app from "./app";

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Port is ${port}`);
  console.log(`check it on: http://localhost:${port}`);
});
