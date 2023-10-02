import Account from "./account";
import { Creditable, Debitable } from "./interfaces";

export default class DebitCard implements Debitable, Creditable {
  #cardNumber: string;
  #account: Account;

  constructor(cardNumber: string, account: Account) {
    this.#cardNumber = cardNumber;
    this.#account = account;
  }

  debit(amount: number): void {
    this.#account.debit(amount, new Date());
  }

  credit(amount: number): void {
    this.#account.credit(amount, new Date());
  }

  details() {
    
  }
}
