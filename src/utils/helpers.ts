import moment from "moment";

// utils/helpers.ts
export const formatDate = (date: Date): string => {
  return moment(date).format("DD/MM/YYYY");
};
