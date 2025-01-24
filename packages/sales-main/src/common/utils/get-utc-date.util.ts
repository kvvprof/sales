export const getUTCDate = (date: Date = new Date()): Date => {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
};
