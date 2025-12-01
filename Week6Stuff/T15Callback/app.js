const express = require('express');
const app = express();
const port = 3000;

setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

setTimeout(function(){
	console.log("This is an anonymous callback function");
},3000);

setTimeout(()=>{
	console.log("This is an arrow function callback");
},4000);