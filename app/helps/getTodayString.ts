export const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear().toString().padStart(4, '0');
  const month = today.getMonth().toString().padStart(2, '0');
  const date = today.getDate().toString().padStart(2, '0');
  return year + month + date;
};
