import { defineAsyncComponent, App } from "vue";
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from "./constant";

import dayjs, { Dayjs } from "dayjs";
import moment from "moment";

export function defineAsyncLayoutComponents(app: App<Element>) {
  app.component(
    LAYOUT_DEFAULT,
    defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue"))
  );
  app.component(
    LAYOUT_AUTH,
    defineAsyncComponent(() => import("@/layouts/AuthLayout.vue"))
  );
}

/******************* DATE AND TIME *******************/

const dateTimeFormatWithoutTimezone = "YYYY-MM-DD[T]HH:mm:ss";

/* 
  date to iso string without time zone 
*/
export function dateToISOString(val: Date) {
  return moment(val).format(dateTimeFormatWithoutTimezone);
}

/* 
  dayjs to iso string without time zone 
*/
export function dayjsToISOString (val: Dayjs) {
  return val.format(dateTimeFormatWithoutTimezone);
}

/* 
  dayjs to number
*/
export function dayjsToNumber(val: Dayjs) {
  return val.year() * 10000000000 + (val.month() + 1) * 100000000 + val.date() * 1000000 + val.hour() * 10000 + val.minute() * 100 + val.second();
}

/*
  number to dayjs
*/
export function numberToDayjs(val: number) {
  try {
    const text = val.toString();
    const dayjs = new Dayjs();
    dayjs.year(parseInt(text.substring(0, 4)));
    dayjs.month(parseInt(text.substring(4, 2)));
    dayjs.date(parseInt(text.substring(6, 2)));
    dayjs.hour(parseInt(text.substring(8, 2)));
    dayjs.minute(parseInt(text.substring(10, 2)));
    dayjs.second(parseInt(text.substring(12, 2)));
    return dayjs;
  } catch {
    return new Dayjs();
  }
}
