import { DioAccount } from "./DioAccount";

export class Account10 extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (amount: number) => {
    if (this.validateStatus()) {
      const addition = 10
      const currentBalance10 = this.getBalance() + addition
      this.setBalance(currentBalance10 + amount)
      console.log('Voce depositou ' + amount + ' e teve um acrescimo de ' + addition);
    }
  }
}