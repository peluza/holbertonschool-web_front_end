#!/usr/bin/node
function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  let students = [];
  for (let start = 0; start < numbersOfStudents; start++) {
    students.push(studentSeat(start + 1));
  }
  return students;
}
const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
