class Patient {
  constructor(id, name, age, medicalCondition) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.medicalCondition = medicalCondition;
  }
}

let idCounter = 0;
let patients = [];

function registerPatient(name, age, medicalCondition) {
  idCounter++;
  let x = new Patient(idCounter, name, age, medicalCondition);
  patients.push(x);
  console.log(
    `${name} with id ${idCounter} was registered at ${medicalCondition} condition`
  );
}

// registerPatient("Bomjan", 900, "good");
// registerPatient("Monil", 800, "bad");

function removePatient(id) {
  patients.forEach((val, ind) => {
    if (id == val.id) {
      patients.splice(ind, 1);
    }
  });
}

function displayAllPatients() {
  if (patients.length != 0) {
    console.table(patients);
  } else {
    console.log("The list is empty");
  }
}
let isStopped = false;
function runPatientRegistrationSystem() {
  let menu =
    "1. Add Patient \n2. Remove Patient \n3.Display all Patients \n4. Exit";

  let res = prompt(menu);
  if (res > 0 && res < 5) {
    switch (res) {
      case "1":
        let name = prompt("Enter patient name: ");
        let age = prompt("Enter patient age: ");
        let cond = prompt("Enter patient medical condition: ");

        if (!isNaN(name)) {
          alert("Got Error");
        } else {
          registerPatient(name, age, cond);
        }
        break;

      case "2":
        let id = parseInt(prompt("Enter patient id"));
        removePatient(id);
        break;

      case "3":
        displayAllPatients();
        break;

      case "4":
        isStopped = true;
        break;
    }
  }
}

while (!isStopped) {
  runPatientRegistrationSystem();
}
