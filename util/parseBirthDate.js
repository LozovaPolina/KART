export function parseBirthDate(input) {
  if (!input) return "";

  const [day, month, year] = input.split(".");
  if (!day || !month || !year) return "";

  const formatted = `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  return formatted;
}
