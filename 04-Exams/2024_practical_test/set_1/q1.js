class Students {
  constructor(id, name, age, course) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

let idCounter = 0;
let students = [];
function registerStudent(name, age, course) {
  idCounter++;
  students.push(new Students(idCounter, name, age, course));
  console.log(
    `${name} ${age} with id ${idCounter} was regidtered for ${course}`
  );
}

function removeStudent(id) {
  students.forEach((std, ind) => {
    if (id == std.id) {
      students.splice(ind, 1);
    } else {
      console.log("Student not found");
    }
  });
}

const listStudents = () => {
  if (students.length == 0) {
    console.log("The list is empty");
  } else {
    console.table(students);
  }
};

const displayMenu = () => {
  return "1. Add Student \n2. Remove Student \n3. Display All Students \n4. Exit";
};

let exited = false;
function showMenu() {
  let res = prompt(displayMenu());

  switch (res) {
    case "1":
      let name = prompt("Enter student name: ");
      let age = prompt("Enter student age: ");
      let course = prompt("Enter student course: ");

      if (age > 0) {
        registerStudent(name, parseInt(age), course);
      } else {
        console.log("Age cannot be negative bro");
      }
      break;
    case "2":
      let id = parseInt(prompt("enter id"));
      removeStudent(id);
      break;

    case "3":
      listStudents();
      break;

    case "4":
      exited = true;
      break;
  }
}

while (!exited) {
  showMenu();
}
