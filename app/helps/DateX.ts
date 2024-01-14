export class DateX extends Date {
  constructor() {
    super();
  }

  addYear(value: number) {
    if (Math.floor(value) !== value) return this;

    this.setFullYear(this.getFullYear() + value);
    return this;
  }

  addMonth(value: number) {
    if (Math.floor(value) !== value) return this;

    this.setMonth(this.getMonth() + value);
    return this;
  }

  addSeconds(value: number) {
    if (Math.floor(value) !== value) return this;

    this.setSeconds(this.getSeconds() + value);
    return this;
  }

  toString() {
    const year = this.getFullYear().toString().padStart(4, '0');
    const month = this.getMonth().toString().padStart(2, '0');
    const date = this.getDate().toString().padStart(2, '0');
    return year + month + date;
  }
}
