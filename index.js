import {bankAccount} from "./BankAccount.js";
import {bankClient} from "./BankClient.js";

const firstClient = new bankAccount(101, new bankClient("Ricardo",11122233309));
const secondClient = new bankAccount(1002, new bankClient("Alice",44455566609));

firstClient.deposit(1000);
firstClient.transfer(300, secondClient);
const withdraw = secondClient.withdraw(200);

// console.log(bankAccount.NumAccount);
// console.log(withdraw);
// console.log(firstClient);
// console.log(secondClient);
// console.log(secondClient.client.cpf);