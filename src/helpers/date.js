function humanizeDate(date) {
  var month;
  var hours;
  var minutes;
  switch (date.getMonth()) {
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
  }

  const humanized_date =
    date.getDate() +
    ' de ' +
    month +
    ', às ' +
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
    ':' +
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());

  return humanized_date;
}

export { humanizeDate };
