export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
        break;
      case 'months':
        this.month += amount;
        break;
      case 'years':
        this.year += amount;
        break;
      default:
        throw new Error('Invalid type');
    }
  }
}

const myDate = new MyDate(2002, 6, 15);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

myDate.add(2, 'months');
console.log(myDate.printFormat());

myDate.add(1, 'years');
console.log(myDate.printFormat());