
 function theBeatlesPlay (musicians, instruments) {
  let emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
     emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}
   const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var howMuch = [];
  do {
    howMuch.push("I love the Beatles!");
    num++;
  } while (num < 15);
    return howMuch;
}

