function humanizeDate(date: Date) {
  const parsedDate = new Date(date);

  let month;

  switch (parsedDate.getMonth()) {
    case 0:
      month = 'Janeiro';
      break;

    case 1:
      month = 'Fevereiro';
      break;

    case 2:
      month = 'Março';
      break;

    case 3:
      month = 'Abril';
      break;

    case 4:
      month = 'Maio';
      break;

    case 5:
      month = 'Junho';
      break;

    case 6:
      month = 'Julho';
      break;

    case 7:
      month = 'Agosto';
      break;

    case 8:
      month = 'Setembro';
      break;

    case 9:
      month = 'Outubro';
      break;

    case 10:
      month = 'Novembro';
      break;

    case 11:
      month = 'Dezembro';
      break;

    default:
  }

  const delta = Math.round((+new Date() - +parsedDate) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  const now = new Date();
  const delimiter = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let humanizedDate;

  if (parsedDate < delimiter) {
    const delta2 = Math.round((+delimiter - +parsedDate) / 1000);
    if (delta2 < day) {
      humanizedDate = `Ontem, às ${
        parsedDate.getHours() < 10
          ? `0${parsedDate.getHours()}`
          : parsedDate.getHours()
      }:${
        parsedDate.getMinutes() < 10
          ? `0${parsedDate.getMinutes()}`
          : parsedDate.getMinutes()
      }`;
    } else {
      humanizedDate = `${parsedDate.getDate()} de ${month}, às ${
        parsedDate.getHours() < 10
          ? `0${parsedDate.getHours()}`
          : parsedDate.getHours()
      }:${
        parsedDate.getMinutes() < 10
          ? `0${parsedDate.getMinutes()}`
          : parsedDate.getMinutes()
      }`;
    }
  } else if (delta < 30) {
    humanizedDate = 'Agora';
  } else if (delta < 2 * minute) {
    humanizedDate = 'Há 1 minuto atrás';
  } else if (delta < hour) {
    humanizedDate = `Há ${Math.floor(delta / minute)} minutos atrás`;
  } else if (Math.floor(delta / hour) === 1) {
    humanizedDate = 'Há 1 hora atrás';
  } else if (delta < day) {
    humanizedDate = `Há ${Math.floor(delta / hour)} horas atrás`;
  }

  return humanizedDate;
}

export default humanizeDate;
