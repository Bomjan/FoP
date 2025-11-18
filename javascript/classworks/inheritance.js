const personProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log("Bro");
  },
};

const me = Object.create(personProto);
me.init("Okay", 5678);
console.log(me);
