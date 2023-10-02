export interface Debitable {
  debit(amount: number, date: Date): void;
}

export interface Creditable {
  credit(amount: number, date: Date): void;
}
