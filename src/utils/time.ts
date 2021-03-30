enum Weekdays {
  'Sunday' = 0,
  'Monday' = 1,
  'Tuesday' = 2,
  'Wednesday' = 3,
  'Thursday' = 4,
  'Friday' = 5,
  'Saturday' = 6,
}

const getMonth = (date: Date) =>
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

const getCurrentDate = () => {
  const today = new Date();

  const date = `${today.getDate()}.${getMonth(today)}.${today.getFullYear()}`;

  return date;
};

const getFormattedDatefromDate = (date: Date, config?: 'dd.mm.yyyy') => {
  const day = date.getDate();
  const month = getMonth(date);
  const year = date.getFullYear();
  const shortenedWeekDay = getWeekDayFromDate(date).slice(0, 3);

  switch (config) {
    case 'dd.mm.yyyy':
      return `${day}.${month}.${year}`;
    default:
      return `${shortenedWeekDay} ${day}`;
  }
};

const convertDateToTime = (date: Date, config?: { noSeconds: boolean }) => {
  let time;

  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  time = `${hours}:${minutes}:${seconds}`;

  if (config?.noSeconds) {
    time = `${hours}:${minutes}`;
  }

  return time;
};

const getDateFromMs = (ms: number) => new Date(ms * 1000);

const getDateFromTimezone = (timezone: number) => {
  const date = new Date();
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const cityTime = utc + 1000 * timezone;

  return new Date(cityTime);
};

const getWeekDayFromDate = (date: Date) => {
  const day = date.getDay();

  return Weekdays[day];
};

export {
  getCurrentDate,
  getDateFromMs,
  getDateFromTimezone,
  convertDateToTime,
  getWeekDayFromDate,
  getFormattedDatefromDate,
};
