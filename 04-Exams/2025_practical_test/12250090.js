// 1. ======= Create Parking Lot Data =======
let parkingSpots = [];
let vehicles = [];

for (let i = 0; i < 5; i++) {
  let obj = {
    spotNumber: i + 1,
    isOccupied: false,
    vehiclePlate: null,
  };
  parkingSpots.push(obj);
}

// 3. MENU SYSTEM
function runParkingSystem() {
  // Initialize menu choice variable
  let menu =
    "#### GCIT PARKING SYSTEM MENU #### \n1. Display Available Spots \n2. Park Vehicle \n3. Display Parked Vehicles \n4. Exit \nEnter your choice:";
  let isRunning = true;

  while (isRunning) {
    // Repeat until user selects Exit
    // Display menu and get user's choice
    let res = prompt(menu);
    // NOTE: typeof res will be string
    switch (res) {
      case "1":
        displayAvailableSpots();
        break;
      case "2":
        parkVehicle();
        break;
      case "3":
        displayParkedVehicles();
        break;
      case "4":
        isRunning = false;
        alert("exiting system");
        break;
      default:
        alert("Invalid Choice");
        break;
    }
  }
}
runParkingSystem();

// 4. Display available spots
function displayAvailableSpots() {
  let availableSpots = parkingSpots.map((spot) => {
    if (!spot.isOccupied) {
      return spot;
    }
  });
  console.log("========== Available Parking Spots =============");
  console.table(availableSpots);
}

// 5. PARK VEHICLE
function parkVehicle() {
  let freeSpot = null;
  for (let spot of parkingSpots) {
    // only if i have unoccupied spot i.e isOccupied == false
    if (!spot.isOccupied) {
      freeSpot = spot;
      let plateNumber = prompt("Enter plate: ");
      let owner = prompt("Enter owner name: ");

      // update the vehicle array
      vehicles.push({
        Plate: plateNumber,
        Owner: owner,
        Spot: spot.spotNumber,
      });

      // Update parking spot
      spot.vehiclePlate = plateNumber;
      spot.isOccupied = true;
      //display and exit
      console.log(`Vehicle ${plateNumber} parked at spot ${spot.spotNumber}`);
      break;
    }
  }

  if (freeSpot == null) {
    console.log("No Spot available");
    return;
  }
}
// 6. DISPLAY PARKED VEHICLES
function displayParkedVehicles() {
  if (vehicles.length > 0) {
    console.log("========= Parked Vehicles =========");
    console.table(vehicles);
  } else {
    console.log("No vehicles currently parked");
  }
}
