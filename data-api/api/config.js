const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "docker",
    database: "Hsl",
  },
  listPerPage: 10,
};

module.exports = config;
