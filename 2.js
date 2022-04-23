const person1 = {
  firstName: "jerry",
  lastName: "Seinfeld",
  age: 25,
  phones: [],
};

const person2 = {
  firstName: "Michael",
  lastName: "Scott",
  age: 30,
  phones: [],
};

function fullName() {
  return this.firstName + " " + this.lastName;
}
console.log(fullName.call(person1, person2));
function addPhone(phone) {
  this["phones"] = [];
  return { ...this, phone: [phone] };
}
console.log(addPhone.call(person1, 09120000));
