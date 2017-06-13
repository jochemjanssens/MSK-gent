const checkOpening = () => {
  let message = ``;
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (day === 1) {
    message = false;
  } else if (day === 0 || day === 6) {
    if (hours < 10) {
      message = true;
    } else if (hours < 18) {
      message = true;
    } else {
      if (day === 0) {
        message = true;
      } else if (day === 6) {
        message = true;
      }
    }
  } else {
    if (hours <= 9) {
      message = false;
    } else if (hours <= 9 && minutes <= 30) {
      message = false;
    } else if (hours < 17) {
      message = true;
    } else if (hours <= 17 && minutes <= 30) {
      message = true;
    } else {
      if (day === 0) {
        message = false;
      } else if (day === 5) {
        message = false;
      } else {
        message = false;
      }
    }
  }

  const month = date.getMonth();
  const dayMonth = date.getDate();
  if (month === 0) {
    if (dayMonth === 1 || dayMonth === 2) {
      message = false;
    }
  }
  if (month === 11) {
    if (dayMonth === 25 || dayMonth === 26) {
      message = false;
    }
    if (dayMonth === 24 || dayMonth === 31) {
      message = true;
    }
  }

  return message;
};

export default () => {
  return (checkOpening());
};
