const getCurrentDate = () => {
  const today = new Date();

  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;

  const date = `${today.getDate()}.${month}.${today.getFullYear()}`;

  return date;
};

const getTimeFromMs = (ms: number) => {
  const today = new Date(ms * 1000);
  const hours = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const seconds = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;

  return time;
}

export { getCurrentDate, getTimeFromMs };
