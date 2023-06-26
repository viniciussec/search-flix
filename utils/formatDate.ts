export function formatDate(jsDate: string) {
  const date = new Date(jsDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const monthString = month < 10 ? `0${month}` : `${month}`;
  const dayString = day < 10 ? `0${day}` : `${day}`;

  return `${dayString}/${monthString}/${year}`;
}
