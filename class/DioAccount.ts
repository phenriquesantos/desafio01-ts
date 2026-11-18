export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log('Voce depositou ' + amount)
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log('Voce sacou ' + amount);
      } else {
        console.log('Saque invalido. Valor solicitado é maior que o saldo disponivel.')
        console.log('Seu saldo disponivel é: ' + this.balance)
      }
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (amount: number): void => {
    this.balance = amount;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  // metódo para testar a conta desativada
  deactivateAccount = (): void => {
    this.status = false;
    console.log('Conta desativada')
  }
}
