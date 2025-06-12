const date = new Date();
const dateA1 = date.getHours();
const dateA2 = date.getTime();
const dateA3 = date.toISOString();

const date2 = new Date(1993,1,12);
const dateB1 = date.getHours();
const dateB2 = date.getTime();
const dateB3 = date.toISOString();

console.log(
  "date1:", date,
  "dateA1:", dateA1,
  "dateA2:", dateA2,
  "dateA3:", dateA3,
  "date2:", date2,
  "dateB1:", dateB1,
  "dateB2:", dateB2,
  "dateB3:", dateB3,
);

class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2024, 1, 12);
const myDateC1 = myDate.year;
const myDateC2 = myDate.month;
const myDateC3 = myDate.day;

console.log(
  "myDate:", myDate,
  "myDateYear:", myDateC1,
  "myDateMonth:", myDateC2,
  "myDateDay:", myDateC3,
);