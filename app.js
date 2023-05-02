const db = require("./models/db");

// Syncs the models with the database and logs wether is sussessful or if there is an error
db.sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((error) => {
    console.log("Error syncing database:", error);
});