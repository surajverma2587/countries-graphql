const getDataFromApi = require("../utils/getDataFromApi");

const rates = async () => {
  const url = `https://openexchangerates.org/api/latest.json?app_id=${process.env.EXCHANGE_RATES_APP_ID}`;

  const data = await getDataFromApi(url);

  if (data?.rates) {
    return Object.entries(data?.rates).map(([code, rate]) => ({ code, rate }));
  }

  return [];
};

module.exports = rates;
