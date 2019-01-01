let salaryArray = [];
let companyArray = [];

let salaryButton = document.getElementById("addSalary")

function addSalary(){
    let salaryString = document.getElementById("salary").value;
    let salary = parseInt(salaryString,10);
    salaryArray.push(salary);
}

function addCompany(){
    let company = document.getElementById("company").value;
    companyArray.push(company);
}

salaryButton.addEventListener("click", addSalary);
salaryButton.addEventListener("click", addCompany);

let button = document.getElementsByClassName("window-collapse-button");
let windowBody = document.getElementsByClassName("window-body");


for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        windowBody[i].style.display = "none";
    });
}