
 //bai1
//  let reStr = '';
//  let str=prompt('Nhap chuoi')
//     for (let i = str.length - 1; i >= 0; i--) {
//          reStr = reStr + str[i];
//     }
// console.log(`Chuoi la ${revStr}`)


// bai2
let str=prompt('Nhap chuoi')

let words = str.split(" ");

let arr = [];
for (let i in words)
{
   temp = words[i].toLowerCase();
   temp = temp.charAt(0).toUpperCase() + temp.substring(1);
   arr.push(temp);
}

console.log (arr.join(" "))

//Bai 4

const Employees = [
    {
      name: "Peter",
      age: "29",
      salary: "6868",
      title: "Director"
    },
    {
      name: "Tony",
      age: "29",
      salary: "8778",
      title: "Staff"
    },
    {
        
      name: "Tony",
      age: "24",
      salary: "8778",
      title: "Fresher"
    },
  ];
  
  
  while (true) {
    const userInput = prompt("Please input C/R/U/D/E");
  
    if (userInput === "c") {
      // Logic tạo mới
      let newName = prompt("Please input new name:");
      let newAge = prompt("Please input new age");
      let newSalary = prompt("Please input new Salary");
      let newTitle = prompt("Please input new title");
       
      let newEmployees = {
        name: newName,
        age: newAge,
        salary=newSalary,
        title=newTitle
      };
      newEmployees.push(newContact);
      for (let emp of Employees) {

        console.log(`${emp.name} - ${emp.phone} -${emp.salary}-${emp.title}`);
      }
    } else if (userInput === "r") {
        for (let emp of Employees) {

            console.log(`${emp.name} - ${emp.phone} -${emp.salary}-${emp.title}`);
          }
      }
     else if (userInput === "u") {
      let search = prompt("Find by name:");
      let foundIndex = -1;
      Employees.forEach(function (item, index) {
        if (search === item.name) {
          foundIndex = index;
          return;
        }
      });
  
      if (foundIndex < 0) {
        console.log("NOT FOUND");
      } else {
        let updateAge = prompt("Please input update age");
        Employees[foundIndex].age = updateAge;
        for (let emp of Employees) {

            console.log(`${emp.name} - ${emp.phone} -${emp.salary}-${emp.title}`);
          }
      }
    } else if (userInput === "d") {
      let search = prompt("Find by name:");
      let foundIndex = -1;
      Employees.forEach(function (item, index) {
        if (search === item.name) {
          foundIndex = index;
          return;
        }
      });
  
      if (foundIndex < 0) {
        console.log("NOT FOUND");
      } else {
        Employees.splice(foundIndex, 1);
        for (let emp of Employees) {

            console.log(`${emp.name} - ${emp.phone} -${emp.salary}-${emp.title}`);
          }
      
    }
    } else if (userInput === "e") {
      break;
    } else {
      // Các trường hợp còn lại
      console.log("Invalid command");
    }
  }
