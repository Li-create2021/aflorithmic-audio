require("dotenv").config();
const app = require("./app");

//starts the server and listen on port 8000 for connections
const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) console.error(err);

  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
