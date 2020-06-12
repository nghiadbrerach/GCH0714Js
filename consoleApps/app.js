
var myModule = require('./myModule.js');

var myMath = require('./math.js');

var myFileModule = require('./fileModule.js');

var stringModule = require('./stringModule.js');
console.log(stringModule.subString('a nice day','nice'));
console.log(stringModule.subString('a nice day','bad'));

myModule.myPrint('hi hey hi');

myModule.myPrint2('hi hey hi');

myFileModule.taoFile('hello.txt','xin chao nhe!!!!');


let k = myMath.hamMu(2,4);

console.log(k);

console.log(myMath.hamSqrt(16));



for(i=1;i<=5;i++)

{

   sayHi("Hello Visual Studio code "+ 2*i); 

}

function sayHi(msg){

    console.log(msg);

}