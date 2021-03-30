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

const processCurrentData = (currentData: any) => ({
  name: currentData?.name,
  country: currentData?.sys.country,
  weatherIcon: `http://openweathermap.org/img/wn/${currentData?.weather[0].icon}@2x.png`,
  iconDescription: currentData?.weather[0].description,
  temp: `${Math.round(currentData?.main.temp)} ℃`,
  feelsLike: `${Math.round(currentData?.main.feels_like)} ℃`,
  cloudCoverage: `${currentData?.clouds.all}%`,
  wind: `${currentData?.wind.speed.toFixed(1)} m/s | ${translateAngleToDirection(
    currentData?.wind.deg
  )}`,
  visibility: `${(currentData?.visibility / 1000).toFixed(1)}km`,
  pressure: `${currentData?.main.pressure * 0.75} MMC`,
  humidity: `${currentData?.main.humidity}%`,
  sunriseTime: convertDateToTime(getDateFromMs(currentData?.sys.sunrise)),
  sunsetTime: convertDateToTime(getDateFromMs(currentData?.sys.sunset)),
  localTime: convertDateToTime(
    getDateFromTimezone(currentData?.timezone),
    localTimeConfig
  ),
  weekDay: getWeekDayFromDate(getDateFromMs(currentData?.dt)),
});

export { processCurrentData };
