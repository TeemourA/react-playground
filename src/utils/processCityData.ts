import {
  translateAngleToDirection,
  convertDateToTime,
  getDateFromMs,
  getDateFromTimezone,
  getWeekDayFromDate,
} from './index';

const localTimeConfig = {
  noSeconds: true,
};

const processCityData = (cityData: any) => ({
  name: cityData?.name,
  country: cityData?.sys.country,
  weatherIcon: `http://openweathermap.org/img/wn/${cityData?.weather[0].icon}@2x.png`,
  iconDescription: cityData?.weather[0].description,
  temp: `${Math.round(cityData?.main.temp)} ℃`,
  feelsLike: `${Math.round(cityData?.main.feels_like)} ℃`,
  cloudCoverage: `${cityData?.clouds.all}%`,
  wind: `${cityData?.wind.speed.toFixed(1)} m/s | ${translateAngleToDirection(
    cityData?.wind.deg
  )}`,
  visibility: `${(cityData?.visibility / 1000).toFixed(1)}km`,
  pressure: `${cityData?.main.pressure * 0.75} MMC`,
  humidity: `${cityData?.main.humidity}%`,
  sunriseTime: convertDateToTime(getDateFromMs(cityData?.sys.sunrise)),
  sunsetTime: convertDateToTime(getDateFromMs(cityData?.sys.sunset)),
  localTime: convertDateToTime(
    getDateFromTimezone(cityData?.timezone),
    localTimeConfig
  ),
  weekDay: getWeekDayFromDate(getDateFromMs(cityData?.dt)),
});

export { processCityData };
