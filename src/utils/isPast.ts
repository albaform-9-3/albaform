const isPast = (isoDateString: string) => {
  const currentDate = new Date();

  const targetDate = new Date(isoDateString);

  return targetDate < currentDate;
};

export default isPast;
