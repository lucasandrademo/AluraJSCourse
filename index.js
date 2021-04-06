
import { currentAccount } from "./Account/CurrentAccount.js";
import { bankClient } from "./BankClient.js";
import { savingsAccount } from "./Account/SavingsAccount.js";
import { salaryAccount } from "./Account/SalaryAccount.js";
import { manager } from "./Employee/Manager.js";
import { principal } from "./Employee/Principal.js";
import { system } from "./System.js";


const empManager = new manager("José", 5000, 11122234509);
const empPrincipal = new principal("Raimundo", 10000, 22233344409);
empPrincipal.createPassword("123456789");
empManager.createPassword("987");
const isLogin = system.login(empPrincipal, "123456789");

console.log(isLogin);


const client = new bankClient("Anna",11122233309, "666");
const isClientLogin = system.login(client, "666");
console.log(isClientLogin);