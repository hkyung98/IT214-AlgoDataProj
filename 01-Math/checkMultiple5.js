function checkmultiplefive(t) {
  if (t % 5 == 0) {
    return 'multiple of 5';
  } else {
    //if t divided by 2 remainder is not 0,
    //i.e. 1, then it is odd number
    return 'not multiple of five';
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(i + ' is ' + checkmultiplefive(i));
}
