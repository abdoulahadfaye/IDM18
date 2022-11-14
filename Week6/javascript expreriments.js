// JavaScript source code

console.log("Hello World!");

// define a variable named a and initialise it to the value of 3
var a = 3;

// log the value of a to the console.HINT: use console.log();
console.log(a);

// define a variable named b and initialise it to 5
var b = 5;

// log to the console the value of a multiplied by b
console.log(a * b);

/*log to the console the following expressions:
a is less or equal to b  	
a is greater than 4 and b is greater than 4  
a is not equal b and b is greater than 0
a times b is less than 15
a times b equal or less than 15
*/
console.log(a <= b);
console.log(a > 4 && b > 4);
console.log(a != b && b > 0);
console.log((a * b) < 15);
console.log((a * b) <= 15);

// define a variable s1 and initialise it to "Hello" and a variable s2 and initialise it to your name
var s1 = "hello";
var s2 = "Lahat";
// print to the console the result of concatenating s1 and s2>
console.log(s1 + s2);
// improve the previous step by adding a blank space between s1 and s2 
console.log(s1 + " " + s2);
//log to the console the concatenated string a " squared is " a*a
console.log(a + " square is " + a*a);
// use an if statement that tests whether a is greater than b and then logs either "x is greater than y" or "x is less than or equal to y" to the console.
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else { console.log("a is equal b");  } 
// log the result of dividing b by a, but only if b is greater than a
if (b > a) {
    console.log(b / a);
} else { console.log("no results"); }
		
// add a to b while b is less than 100, then log the value of b to the console 
while (b < 100) {
    b = b + a;
    // b +=a;
}
console.log(b)

// use a for loop to log the string "Hello <number>" to the console y times
for (var i = 0; i < 100; i++) {
    console.log("hello " + i);
}

// Declare a variable str with the value "I'm learning JavaScript in my web development module."HINT: Remember to escape any special characters!
var str = "I\'m learning javascript in my web development module.";
// log the number of characters in string str to the console.
console.log("the string is " + str.length + " character long");
//find the position of the string "JavaScript" in string str and log it to the console. 
var pos = str.indexOf("javascript");
console.log("Javascript is at position " + pos);
// Count the number of times the letter "e" appears in the string str.HINT: Using a for loop and the String.charAt() method.
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "e") {
        count++;
    }
}

//Find the position of all letters "m" in string str and log them to the consoleHINT: The String.indexOf() takes an optional second parameter.

//Reverse string str and print it to the console. The result should be: !.elud<om tnempoleved bew ym ni tpircSavaJ gninrael m'I"HINT: Use a second string variable, a decrementing for loop, string concatenation and the String.charAt() method.
// Declare a variable url and assign it a web address. Test if the address points to a web server (http:), a secure web server (https:), the file system (file:).HINT: use the the String.startsWith() method
var url = "https://my.brighton.ac.uk/dashboard/home";
if (url.startsWith('https:')) {
    console.log("secure server");
} else if (url.startsWith("http:")) {
    console.log("server not secure");
} else if (url.starstWith("file:")) {
    console.log("file system");
} else { console.log("not file"); }