const getCurrentDate = () => {
  const today = new Date();

  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;

  const date = `${today.getDate()}.${month}.${today.getFullYear()}`;

  return date;
};

const convertDateToTime = (
  date: Date,
  config?: { noSeconds: boolean }
) => {
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

export {
  getCurrentDate,
  getDateFromMs,
  getDateFromTimezone,
  convertDateToTime,
};
