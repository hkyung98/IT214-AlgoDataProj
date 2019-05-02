var student = {
  firstname: 'Mike',
  lastname: 'Lee',
  age: 18,
  ic: 123456
};

console.log('First Name: ', student.firstname);
console.log('Last Name: ', student.lastname);
console.log('Age: ', student.age);
console.log('IC No.: ', student.ic);

var jsonString = JSON.stringify(student);
console.log(jsonString);
