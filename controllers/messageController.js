const client = require("../utils/client");
const log = require("signale");

exports.handleMessaging = async (notification, appData, customer, callback) => {
  try {
    const customerData = await customer.getMetaData();
  } catch (err) {
    console.log(err);
  }
};
