const axios = require("axios");

const logger = require("../lib/logger");

const getDataFromApi = async (url) => {
  try {
    logger.info(`Fetching data from ${url}`);

    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    logger.error(`Failed to fetch data from ${url} | ${error.message}`);
  }
};

module.exports = getDataFromApi;
