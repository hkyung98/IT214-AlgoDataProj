var student = {
  name: {
    firstname: 'Mike',
    lastname: 'Lee'
  },
  age: 18,
  ic: 123456
};

console.log('First Name: ', student.name.firstname);
console.log('Last Name: ', student.name.lastname);
console.log('Age: ', student.age);
console.log('IC No.: ', student.ic);

var jsonString = JSON.stringify(student);
console.log(jsonString);
