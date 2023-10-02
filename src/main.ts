import Account, {
  TransactionLogs,
  consoleReporter,
} from "./account";
import { Creditable, Debitable } from "./interfaces";

const payBill = (debitable: Debitable, amount: number): void =>
  debitable.debit(amount, new Date());
const cashBack = (creditable: Creditable, amount: number): void =>
  creditable.credit(amount, new Date());

const main = () => {
  const transactionLogs = new TransactionLogs();
  const account = new Account("1234567890", 10000, transactionLogs);
  payBill(account, 1000);

  account.transactionHistory(consoleReporter);
};

main();
