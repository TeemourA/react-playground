const getCurrentDate = () => {
  const today = new Date();

  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;

  const date = `${today.getDate()}.${month}.${today.getFullYear()}`;

  return date;
};

export { getCurrentDate };
