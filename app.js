const db = require("./config/connection");
const express = require('express');
const app = express();
const port = 3000;


// Syncs the models with the database and logs wether is sussessful or if there is an error
db.sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((error) => {
    console.log("Error syncing database:", error);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
