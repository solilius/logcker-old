const Log = require("./models/log");

module.exports = {
  getLog: query => {
    return Log.find(query);
  },
  insertLog: log => {
    return Log.create(log);
  },
  deleteAllLogs: () => {
    return Log.remove({});
  }
};
