export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-Us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
