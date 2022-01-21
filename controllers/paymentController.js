const log = require("signale");
const client = require("../utils/client");
exports.handlePayment = async (notification, customer, appData, callback) => {
  log.info(`Processing payment from ${customer.customerNumber.number}`);
  const {
    value: { amount },
  } = notification;
};
