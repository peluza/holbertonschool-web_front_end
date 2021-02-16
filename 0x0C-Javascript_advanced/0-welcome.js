#!/usr/bin/node
function welcome(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  function displayFullName() {
    const message = "Welcome " + fullName + "!";
    alert(message);
  }
  displayFullName();
}
