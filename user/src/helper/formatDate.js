export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }); // e.g., May
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
