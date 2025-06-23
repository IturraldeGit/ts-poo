export class MyDate {

  constructor(
    public day: number = 1,
    public month: number = 1,
    private year: number = 2000,
    readonly century: string = '21st century'
  ) {}

  printFormat(): string {
    const month = this.addPadding(this.month);
    const day = this.addPadding(this.day);
    return `${day}/${month}/${this.year}`;
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
        this.year += amount;
        break;
      default:
        throw new Error('Invalid type');
    }
  }

  getDay(): number {
    return this.day;
  }
}

const myDate = new MyDate(6, 3, 2002);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2);
console.log(myDate3.printFormat());

const myDate4 = new MyDate(5, 6);