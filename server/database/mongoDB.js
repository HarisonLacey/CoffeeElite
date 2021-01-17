// database connection
module.exports = async (mongoose) => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connected to database");
  } catch (err) {
    console.log(err.message);
  }
};
