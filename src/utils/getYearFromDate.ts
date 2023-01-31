export const getYearFromDate = (date: string | undefined) => {
   if (date && date.length === 10) {
      return date.split("-")[0];
   }
   return "";
};
