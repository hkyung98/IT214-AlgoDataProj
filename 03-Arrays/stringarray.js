var students = [
  {
    name: 'Adrian',
    age: 16,
    ic: 456789
  },
  {
    name: 'isaac',
    age: 20,
    ic: 794562
  },
  {
    name: 'Heng',
    age: 21,
    ic: 784614
  }
];

for (var i = 0; i < students.length; i++) {
  console.log('student: ' + (i+1));
  console.log('name: ' + students[i].name);
  console.log('age: ' + students[i].age);
  console.log('ic: ' + students[i].ic);
  console.log('=============');
}
