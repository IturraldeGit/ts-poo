export class MyDate {

  constructor(
    public day: number = 1,
    public month: number = 1,
    private _year: number = 2000,
    readonly century: string = '21st century'
  ) {}

  printFormat(): string {
    const month = this.addPadding(this.month);
    const day = this.addPadding(this.day);
    return `${day}/${month}/${this._year}`;
  }

  private addPadding(value: number) {
    if (value <= 9) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
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
        this._year += amount;
        break;
      default:
        throw new Error('Invalid type');
    }
  }

  get year(): number {
    return this._year;
  }

  get isLeapYear(): boolean {
    if (this._year <= 0) {
      throw new Error('Year must be greater than 0');
    } else {
      if (this._year % 400 === 0) return true
      if (this._year % 100 === 0) return false
      return this._year % 4 === 0;
    }
  }
}

const myDate = new MyDate(7, 10, 1993);
console.log(myDate.printFormat());
console.log(myDate.year);
console.log('1993',myDate.isLeapYear);

const myDate2 = new MyDate(2, 2, 2000);
console.log('2000', myDate2.isLeapYear);
const myDate3 = new MyDate(2, 2, 2001);
console.log('2001', myDate3.isLeapYear);
const myDate4 = new MyDate(2, 2, 2004);
console.log('2004', myDate4.isLeapYear);