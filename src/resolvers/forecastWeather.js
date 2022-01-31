const formatDate = require("../utils/formatDate");
const generateWeatherIconUrl = require("../utils/generateWeatherIconUrl");
const getDataFromApi = require("../utils/getDataFromApi");

const forecastWeather = async (parent) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${parent.latitude}&lon=${parent.longitude}&appid=${process.env.WEATHER_APP_ID}&units=imperial`;

  const { daily } = await getDataFromApi(url);

  if (daily) {
    return daily.slice(1, 6).map((each) => ({
      date: formatDate(each?.dt),
      temperature: each?.temp?.max,
      humidity: each?.humidity,
      windSpeed: each?.wind_speed,
      weatherIconUrl: generateWeatherIconUrl(each?.weather[0]?.icon),
    }));
  }

  return [];
};

module.exports = forecastWeather;
