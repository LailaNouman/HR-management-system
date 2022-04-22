'use strict';

let arr =[];

function Employee(employeeId,fullName,department,level,image){
         this.employeeId = employeeId;
         this.fullName = fullName;
         this.department = department;
         this.level = level;
         this.image = image;
         arr.push(this);  
        }

Employee.prototype.randomSalary = function (){
    let min, max;
    if (this.level = "Junior"){
        min = 500;
        max = 1000; 
    }else  if (this.level = "Mid-Senior"){
        min = 1000;
        max = 1500;
    }else  if (this.level = "Senior"){
        min = 1500;
        max = 2000;
    }
    let ranSalary = Math.floor(Math.random() * (max - min + 1) + min);
    let netSalary = ranSalary - 7.5/100 * ranSalary;
    this.salary = netSalary;
}

 Employee.prototype.render = function (){
   document.write(`<h2> ${this.fullName} ` + ` ${this.salary} </h2> <br> <br>`);
}

let Ghazi = new Employee(1000, "Ghazi Samer", "Adminstration", "Senior");
let Lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior");
let Omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
let Rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
let Hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

console.log(arr);

for (let i = 0; i < arr.length; i++){
     arr[i].randomSalary();
    arr[i].render();
}
