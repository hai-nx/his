import { defineAsyncComponent, App } from "vue";
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from "./constant";

import dayjs, { Dayjs } from "dayjs";

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

// export function defineAsyncComponents(app: App<Element>) {
//     app.component("XDateRangePicker", defineAsyncComponent(() => import('@/components/XDateRangePicker.vue')));
//     app.component("XLayout", defineAsyncComponent(() => import('@/components/XLayout.vue')));
//     app.component("XNav", defineAsyncComponent(() => import('@/components/XNav.vue')));
//     app.component("XNavItem", defineAsyncComponent(() => import('@/components/XNavItem.vue')));
//     app.component("XPagination", defineAsyncComponent(() => import('@/components/XPagination.vue')));
// }

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
