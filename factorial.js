 // take input from the user
 var number = prompt("Enter a positive integer");
 number = parseInt(number);
 var fact = 1;
 // if number is 0
 if (number == 0) {
   console.log(`The factorial of ${number} is 1`);
 }
 // checking if number is negative
 else if (number < 0) {  
   console.log("The factorial for negative number does not exist.");
 }

 // if number is positive
 else {
 
   for ( var i = 1; i <= number; i = i + 1) {
     fact = fact * i;
   }
   console.log(`the factorial of ${number} is ${fact}`);
 }