export function getToday() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export function getDateXDaysAgo(xDays: number) {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - xDays);
  return tenDaysAgo.toISOString().split("T")[0];
}
