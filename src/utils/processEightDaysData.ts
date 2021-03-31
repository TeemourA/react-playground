import {
  translateAngleToDirection,
  getDateFromMs,
  getFormattedDatefromDate,
} from './index';

const processEightDaysData = (eightDaysData: any) =>
  eightDaysData?.map((day: any) => ({
    weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
    iconDescription: day.weather[0].description,
    date: getFormattedDatefromDate(getDateFromMs(day.dt)),
    temp: {
      max: `${Math.round(day.temp.max)} ℃`,
      min: `${Math.round(day.temp.min)} ℃`,
    },
    feelsLike: { ...day.feels_like },
    wind: `${day.wind_speed.toFixed(1)} m/s | ${translateAngleToDirection(
      day.wind_deg
    )}`,
  }));

export { processEightDaysData };
