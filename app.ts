import { Account10 } from './class/Account10'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

console.log('===================================================')
console.log('                 Conta pessoal                     ')
console.log('===================================================')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(5)
peopleAccount.withdraw(3)
console.log('Saldo atual: ' + peopleAccount.getBalance())


console.log('\n===================================================')
console.log('                 Conta Empresarial                 ')
console.log('===================================================')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.withdraw(11)
companyAccount.getLoan(200)
console.log('Saldo atual: ' + companyAccount.getBalance())

console.log('\n===================================================')
console.log('                 Conta acrescida de 10             ')
console.log('===================================================')

const account10: Account10 = new Account10('Conta acrescida', 30)
account10.deposit(10)
console.log('Saldo atual: ' + account10.getBalance());

console.log('\n===================================================')
console.log('                 Conta acrescida de 10             ')
console.log('===================================================')

const deactivatedAccount: CompanyAccount = new CompanyAccount('Conta acrescida', 30)
deactivatedAccount.deactivateAccount();
deactivatedAccount.deposit(10)
deactivatedAccount.withdraw(10)
deactivatedAccount.getLoan(10)
console.log('Saldo atual: ' + account10.getBalance());
