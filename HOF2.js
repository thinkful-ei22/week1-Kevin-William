'use strict';
const repeat = function (fn, n){
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

