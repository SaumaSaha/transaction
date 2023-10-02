import { Creditable, Debitable } from "./interfaces";

export default class CreditCard implements Debitable, Creditable {
  #balance: any;
  #cardNumber: any;

  constructor(cardNumber: string, balance: number) {
    this.#cardNumber = cardNumber;
    this.#balance = balance;
  }

  debit(amount: number): void {
    this.#balance -= amount;
  }

  credit(amount: number): void {
    this.#balance += amount;
  }
}
