import { DateTime } from "./luxon.js";

const Date = () => {
  const recent = DateTime.local();
  document.getElementById('dates').innerHTML = recent.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
export default Date;