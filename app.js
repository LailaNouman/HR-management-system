'use strict';

let arr =[];
let div = document.getElementById('div');

function Employee(employeeId,fullName,department,level,image){
         this.employeeId = employeeId;
         this.fullName = fullName;
         this.department = department;
         this.level = level;
         this.image = image
         arr.push(this);  
        }

Employee.prototype.randomSalary = function (){
    let min, max;
    if (this.level == "Junior"){
        min = 500;
        max = 1000; 
    }else  if (this.level == "Mid-Senior"){
        min = 1000;
        max = 1500;
    }else  if (this.level == "Senior"){
        min = 1500;
        max = 2000;
    }
    let ranSalary = Math.floor(Math.random() * (max - min + 1) + min);
    let netSalary = ranSalary - 7.5/100 * ranSalary;
    this.salary = netSalary;
}

 Employee.prototype.render = function (){
   let smalldiv = document.createElement('div');
   let imgg = document.createElement('img');
   imgg.src = this.image;
   imgg.style.width = "100px";
   smalldiv.appendChild(imgg);
   let header = document.createElement('h5');
   header.textContent = " ID: " + this.employeeId + " -Name: " + this.fullName + " -Department: " + this.department
   +" -Level: " + this.level;
   smalldiv.appendChild(header);
   let header1 = document.createElement('h5');
   header1.textContent = this.salary;
   smalldiv.appendChild(header1);
   smalldiv.style.margin = '20px';
   smalldiv.style.backgroundColor = 'rgb(78, 148, 79)';
   smalldiv.style.width = '200px'
   smalldiv.style.height = '180px'
   smalldiv.style.textAlign = 'center';
   smalldiv.style.padding = '.9rem 2%';
   smalldiv.style.fontSize = '16px';
   smalldiv.style.color = 'wheat';
   div.appendChild(smalldiv);
  
}

let Ghazi = new Employee(1000, "Ghazi Samer", "Adminstration", "Senior","Ghazi.jpg");
let Lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "Lana.jpg");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "Tamara.jpg");
let Safi = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior", "Safi.jpg");
let Omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "Omar.jpg");
let Rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "Rana.jpg");
let Hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "Hadi.jpg");

console.log(arr);

for (let i = 0; i < arr.length; i++){
     arr[i].randomSalary();     
     arr[i].render();
     
}

    function uniqueId(){
    return Math.floor(1000 + Math.random() * 9000);
}

let form = document.getElementById('form');
form.addEventListener("submit" , handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let newId = uniqueId();
    let full = event.target.fname.value;
    let department = event.target.departments.value;
    let level = event.target.level.value;
    let img = event.target.image.value;
    console.log(full,department,level);
    let newEmployee = new Employee (newId, full, department, level, img);
    newEmployee.randomSalary(); 
    newEmployee.render();
}
// let imgg = document.createElement('img');
// imgg.setAttribute("src", "Ghazi.jpg");
// div.appendChild(imgg);
// imgg.style.width="100px";
// let header4 = document.createElement('h4');
// header4.textContent = ' Name: Ghazi Samer, Department: Administrator, Level: Senior ';
// div.appendChild(header4);
