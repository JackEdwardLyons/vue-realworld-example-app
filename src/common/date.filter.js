import { default as format } from "date-fns/format";

export default date => {
  if (!date) return;
  return format(new Date(date), "MMMM d, yyyy");
};
