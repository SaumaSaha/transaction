import { Creditable, Debitable } from "./interfaces";

enum TransactionType {
  DEBIT,
  CREDIT,
}

interface Transaction {
  type: TransactionType;
  amount: number;
  date: Date;
}

class CreditTransaction implements Transaction {
  readonly type: TransactionType;
  readonly amount: number;
  readonly date: Date;

  constructor(amount: number, date: Date) {
    this.type = TransactionType.CREDIT;
    this.amount = amount;
    this.date = date;
  }

  details() {
    return {
      type: this.type,
      amount: this.amount,
      date: this.date,
    };
  }
}

class DebitTransaction implements Transaction {
  readonly type: TransactionType;
  readonly amount: number;
  readonly date: Date;

  constructor(amount: number, date: Date) {
    this.type = TransactionType.DEBIT;
    this.amount = amount;
    this.date = date;
  }

  details() {
    return {
      type: this.type,
      amount: this.amount,
      date: this.date,
    };
  }
}

interface TransactionReporter {
  report(log: Transaction): void;
}

export const consoleReporter = {
  report: (log: Transaction) => {
    switch (log.type) {
      case TransactionType.CREDIT:
        return console.log("Credited: ", log.amount, " On: ", log.date);
      case TransactionType.DEBIT:
        return console.log("Debited: ", log.amount, " On: ", log.date);
    }
  },
};

export class TransactionLogs {
  private readonly logs: Transaction[];
  constructor() {
    this.logs = [];
  }

  register(log: Transaction) {
    this.logs.push(log);
  }

  print(reporter: TransactionReporter) {
    this.logs.forEach((log) => reporter.report(log));
  }
}

export default class Account implements Debitable, Creditable {
  readonly accountNumber: string;
  private balance: number;
  private passbook: TransactionLogs;

  constructor(accountNumber: string, balance: number, transactionLogs: TransactionLogs) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.passbook = transactionLogs;
  }

  debit(amount: number, date: Date = new Date()): void {
    this.balance -= amount;
    this.passbook.register(new DebitTransaction(amount, date));
  }

  credit(amount: number, date: Date = new Date()): void {
    this.balance += amount;
    this.passbook.register(new CreditTransaction(amount, date));
  }

  transactionHistory(reporter: TransactionReporter) {
    this.passbook.print(reporter);
  }
}
