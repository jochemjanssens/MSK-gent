const checkOpening = () => {
  let message = ``;
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (day === 1) {
    message = `Het MSK is vandaag gesloten, we zijn terug open dinsdag om 9:30`;
  } else if (day === 0 || day === 6) {
    if (hours < 10) {
      message = `Het MSK is vandaag open, we openen op 10:00 en we blijven open 18:00`;
    } else if (hours < 18) {
      message = `Het MSK is vandaag open, we blijven open tot 18:00`;
    } else {
      if (day === 0) {
        message = `Het MSK was vandaag open, we zijn terug open dinsdag om 9:30`;
      } else if (day === 6) {
        message = `Het MSK was vandaag open, we zijn terug open morgen om 10:00`;
      }
    }
  } else {
    if (hours <= 9) {
      message = `Het MSK is vandaag open, we openen op 9:30 en we blijven open 17:30`;
    } else if (hours <= 9 && minutes <= 30) {
      message = `Het MSK is vandaag open, we openen op 9:30 en we blijven open 17:30`;
    } else if (hours < 17) {
      message = `Het MSK is vandaag open, we blijven open tot 17:30`;
    } else if (hours <= 17 && minutes <= 30) {
      message = `Het MSK is vandaag open, we blijven open tot 17:30`;
    } else {
      if (day === 0) {
        message = `Het MSK was vandaag open, we zijn terug open dinsdag om 9:30`;
      } else if (day === 5) {
        message = `Het MSK was vandaag open, we zijn terug open morgen om 10:00`;
      } else {
        message = `Het MSK was vandaag open, we zijn terug open morgen om 9:30`;
      }
    }
  }

  const month = date.getMonth();
  const dayMonth = date.getDate();
  if (month === 0) {
    if (dayMonth === 1 || dayMonth === 2) {
      message = `Het MSK is vandaag gesloten, we zijn terug open op 3 januari`;
    }
  }
  if (month === 11) {
    if (dayMonth === 25 || dayMonth === 26) {
      message = `Het MSK is vandaag gesloten, we zijn terug open op 27 december`;
    }
    if (dayMonth === 24 || dayMonth === 31) {
      message = `Het MSK is vandaag open, we zijn open tot 16:15`;
    }
  }

  return message;
};

export default () => {
  return (checkOpening());
};
