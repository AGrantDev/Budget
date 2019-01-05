//Classes
class Bill {
    constructor(name,method,amount,due,paid){
        this.name = name;
        this.method = method;
        this.amount = amount;
        this.due = due;
        this.paid = false;
    }
}

class Debt {
    constructor(account,monthlyPayment,due,totalBalance){
        this.account = account;
        this.monthlyPayment = monthlyPayment;
        this.due = due;
        this.totalBalance = totalBalance;
    }
}

class Credit {
    constructor(account, creditLine){
        this.account = account;
        this.creditLine = creditLine;
    }
}

//Declarations
let salaryArray = [];
let companyArray = [];
let billArray = [];
let debtArray = [];
let creditArray = [];

let salaryButton = document.getElementById("addSalary");
let billButton = document.getElementById("addBill");
let debtButton = document.getElementById("addDebt");
let creditButton = document.getElementById("addCredit");

let button = document.getElementsByClassName("window-collapse-button");
let windowBody = document.getElementsByClassName("window-body");

//Will append both company and salary information
function addCompany(){
    let company = document.getElementById("company").value;
    companyArray.push(company);
    let testDiv = document.createElement('div');
    for(let i = 0; i < salaryArray.length; i++){
        const newDiv = `
            <div>${companyArray[i]}</div>
            <div>${salaryArray[i]}</div>
        `;
        let salaryWindow = document.getElementById("salary-content");
        testDiv.innerHTML = newDiv;
        salaryWindow.appendChild(testDiv);
    }
}

function addSalary(){
    let salaryString = document.getElementById("salary").value;
    let salary = parseInt(salaryString,10);
    salaryArray.push(salary);
    updateIncome();
}

function addBill(){
    let billName = document.getElementById("billName").value;
    let billMethod = document.getElementById("billMethod").value;
    let billAmountString = document.getElementById("billAmount").value;
    let billAmount = parseInt(billAmountString,10);
    let billDue = document.getElementById("billDueDate").value;

    const newBill = new Bill(billName,billMethod,billAmount,billDue,false);
    billArray.push(newBill);
    // let testDiv = document.createElement('div');
    // for(let i = 0; i < billArray.length; i++){
    //     const newDiv = `
    //         <div>test</div>
    //     `;
    //     let billWindow = document.getElementById("bill-content");
    //     testDiv.innerHTML = newDiv;
    //     billWindow.appendChild(testDiv);
    // }
}

function addDebt(){
    let debtAccount = document.getElementById("debtAccount").value;
    let debtPaymentString = document.getElementById("debtPayment").value;
    let debtPayment = parseInt(debtPaymentString,10);
    let debtDue = document.getElementById("debtDue").value;
    let debtBalanceString = document.getElementById("debtBalance").value;
    let debtBalance = parseInt(debtBalanceString,10);

    const debt = new Debt(debtAccount, debtPayment, debtDue, debtBalance);
    debtArray.push(debt);
}

function addCredit(){
    let creditAccount= document.getElementById("creditAccount").value;
    let creditLineString = document.getElementById("creditLine").value;
    let creditLine = parseInt(creditLineString,10);

    const credit = new Credit(creditAccount, creditLine);
    creditArray.push(credit);
}

salaryButton.addEventListener("click", addSalary);
salaryButton.addEventListener("click", addCompany);
billButton.addEventListener("click", addBill);
debtButton.addEventListener("click", addDebt);
creditButton.addEventListener("click",addCredit);

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        windowBody[i].style.display = "none";
    });
}

//Output logic
function updateIncome(){
    let incomeTotalWindow = document.getElementById("income-snapshot-display");
    let incomeTotal = 0;

    for(let i = 0; i < salaryArray.length;i++)
    {
        incomeTotal += salaryArray[i];
    }
    incomeTotalWindow.innerText = incomeTotal;
}