export class MyDate {
  year: number;
  month: number;
  private day: number;//we can use the private assignement to convert the variable in a private segment and just change the value within the class using the methods. you can't modify the value when you initialize the class, but just the calling of the method of this variable can modify the value

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    // TODO look you just can use the method private within the class, and don't use out of this, for the private
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {// ? this method asign a zero when the value joined is less than zero.
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }//here occur something, it doesn't mutter if the varible is private
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay());
