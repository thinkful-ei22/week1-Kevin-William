'use strict';
/*const repeat = function (fn, n){
  for (let i = 0; i < n; i++){
    fn();
  }
};

const hello = function (){
  console.log('hello world');
};

const goodbye = function (){
  console.log('goodbye world');
};

//repeat(hello,4);

const hello2 = function (){
  return 'hello world';
};

const repeat2 = function (fn, n){
  for (let i = 0; i < n; i++){
    console.log(fn());
  }
};

repeat2(hello2,4);
*/
/*=============================================*/
// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
/*
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
// This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames);// => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:

function filter(arr, fn){
  let newArray = [];
  for(let i = 0; i<arr.length; i++){
    if(fn(arr[i])=== true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filter(myNames, function (name){
  return name[0] === 'J';
}));
*/

const hazardWarningCreator = function (typeOfWarning){
  let warningCounter = 0;
  return function (location){
    warningCounter++;
    console.log(`"DANGER! There is a ${typeOfWarning} 
    hazard at ${location}"`);
    console.log(`"The ${typeOfWarning} hazard alert has 
    triggered ${warningCounter} time(s) today!"`);
  };
};

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado');
const snowWarning = hazardWarningCreator('Snowstorm');

rocksWarning('Main St and Pacific Ave');
rocksWarning('1st Street and Jefferson');
tornadoWarning('Rick and Morty');
tornadoWarning('Freud and Mendel');
snowWarning('Apple and Orange');

