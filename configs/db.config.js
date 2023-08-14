module.exports = {
  DB_NAME: "crm_db",
  DB_URL:
    process.env.MONGODB_URI ||
    `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@cluster0.7svvvwe.mongodb.net/crm_db`,
};
