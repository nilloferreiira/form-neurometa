export function formatDateToISO(dateToFormat: { date: Date; time: string }) {
  const year = dateToFormat.date.getFullYear();
  const month = String(dateToFormat.date.getMonth() + 1).padStart(2, "0");
  const day = String(dateToFormat.date.getDate()).padStart(2, "0");

  const dateTimeString = `${year}-${month}-${day}T${dateToFormat.time}:00.000Z`;

  const date = new Date(dateTimeString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const isoDate = date.toISOString();

  return isoDate;
}
