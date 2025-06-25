export class MyDate {

  constructor(
    private _day: number = 1,
    private _month: number = 1,
    private _year: number = 2000,
    readonly century: string = '21st century'
  ) {}

  printFormat(): string {
    const month = this.addPadding(this._month);
    const day = this.addPadding(this._day);
    const year = this._year
    return `${day}/${month}/${year}`;
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
        this._day += amount;
        break;
      case 'months':
        this._month += amount;
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
  get day(): number {
    return this._day;
  }
  get month(): number {
    return this._month;
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

  set month(newValue: number) {
    if (newValue < 1 || newValue > 12) {
      throw new Error('Month must be between 1 and 12');
    }
    this._month = newValue;
  }

  set day(newValue: number) {
    if (newValue < 1 || newValue > 31) {
      throw new Error('Day must be between 1 and 31');
    }
    this._day = newValue;
  }

  set year(newValue: number) {
    this._year = newValue;
  }
}

const myDate = new MyDate(7, 10, 1993);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78;
// console.log('esto no debe aparecer', myDate.month);