const formatDate = require("../utils/formatDate");
const generateWeatherIconUrl = require("../utils/generateWeatherIconUrl");
const getDataFromApi = require("../utils/getDataFromApi");

const currentWeather = async (parent) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${parent.name}&appid=${process.env.WEATHER_APP_ID}`;

  const data = await getDataFromApi(url);

  return {
    date: formatDate(data?.dt),
    temperature: data?.main?.temp,
    humidity: data?.main?.humidity,
    windSpeed: data?.wind?.speed,
    weatherIconUrl: generateWeatherIconUrl(data?.weather[0]?.icon),
  };
};

module.exports = currentWeather;
