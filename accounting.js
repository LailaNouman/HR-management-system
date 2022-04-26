'strict';

let tableEl = document.getElementById('tableID');
let tfoot1 = document.getElementById('tfoot');

let neArr = [];
function getData(){
    let retrievedData = localStorage.getItem("employees");
    let arrayData = JSON.parse(retrievedData);
    for (let b = 0; b < arrayData.length; b++){
        neArr.push(arrayData[b]);
        //console.log(neArr[b].department);
    }
};
console.log(neArr);
getData();

arrayDepartment = ['Administration','Marketing','Development','Finance'];

let adm = 0;
let mar = 0;
let dev = 0;
let fin = 0;
let sal1 = 0,sal2 = 0,sal3 = 0,sal4 = 0,avgsal1,avgsal2,avgsal3,avgsal4;
let numArr = [], avgArr = [], totalArr = [];
for (let a = 0; a < neArr.length; a++){

    if (neArr[a].department == 'Administration'){
       adm = adm + 1;
       sal1 = sal1 + neArr[a].salary;
    }else if (neArr[a].department == 'Marketing'){
        mar = mar + 1;
        sal2 = sal2 + neArr[a].salary;
    }else if (neArr[a].department == 'Development'){
        dev = dev + 1;
        sal3 = sal3 + neArr[a].salary;
    }else if (neArr[a].department == 'Finance'){
        fin = fin + 1;
        sal4 = sal4 + neArr[a].salary;
    }
};
avgsal1 = sal1 / adm;
avgsal2 = sal2 / mar;
avgsal3 = sal3 / dev;
avgsal4 = sal4 / fin;
let totnum = adm + mar + dev + fin;
let totavg = avgsal1 + avgsal2 + avgsal3 + avgsal4;
let totsal = sal1 + sal2 + sal3 + sal4;
numArr.push(adm,mar,dev,fin)
avgArr.push(avgsal1,avgsal2,avgsal3,avgsal4);
totalArr.push(sal1,sal2,sal3,sal4) 
console.log(totalArr)

function renderTable(){
    for (let i =0; i < arrayDepartment.length; i++){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = arrayDepartment[i];
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = numArr[i];
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = avgArr[i];
    let tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = totalArr[i];
    }
    let tdEL2 = document.createElement('td');
    let tdEL3 = document.createElement('td');
    let tdEL4 = document.createElement('td');
    let tdEL5 = document.createElement('td');
    tfoot1.appendChild(tdEL2);
    tfoot1.appendChild(tdEL3);
    tfoot1.appendChild(tdEL4);
    tfoot1.appendChild(tdEL5);
    tdEL2.textContent = "Total";
    tdEL3.textContent = totnum;
    tdEL4.textContent = totavg / totnum;
    tdEL5.textContent = totsal;
    
}

renderTable();
