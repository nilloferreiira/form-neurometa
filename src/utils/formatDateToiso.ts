export function formatDateToISO(dataToFormat: { date: Date; time: string }) {
  const year = dataToFormat.date.getFullYear();
  const month = String(dataToFormat.date.getMonth() + 1).padStart(2, "0"); 
  const day = String(dataToFormat.date.getDate()).padStart(2, "0");

  const dateTimeString = `${year}-${month}-${day}T${dataToFormat.time}:00.000Z`;

  const date = new Date(dateTimeString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const isoDate = date.toISOString();

  return isoDate;
}
