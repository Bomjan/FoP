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
  console.log(`${name} with id ${idCounter} was regidtered for ${course}`);
}

registerStudent("Bomjan", 600, "SOC");
registerStudent("Thinley", 1000, "SOC 8");

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
    // create a table
    let table = [];

    // headers
    let cols = [];
    for (let col in students[0]) {
      cols.push(col);
    }
    table.push(cols);

    // actual vlaues inside each row
    students.forEach((std) => {
      let row = [];
      for (let key in std) {
        row.push(std[key]);
      }
      table.push(row);
    });

    // convert to table
    console.table(table);
  }
};

const displayMenu = () => {
  console.log(
    "1. Add Student \n2. Remove Student \n3. Display All Students \n4. Exit"
  );
};

displayMenu();
