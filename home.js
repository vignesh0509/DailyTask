// VARIABLE:

// example-1
/*
create  three variable ( price,product,tax) and give values,
then calculate the total price of product with tax*/


var price=45
var product= "shoes"
var tax=10
var total
(total=price+tax)
{
    console.log("Name of the product: "+product + total);
}

/*Output:
Name of the product: shoes55
*/

// Example-2
/* 
create a var= fruitname,count and total,
then assign values to them and calculate the total price of fruits?

*/

var fruitname = "orange"
var count = 20
var price = 10
var total = count*price
console.log(fruitname)
console.log(total)

/*Output:
orange
200
*/

//  FUNTIONS:

// example-1

/* 
create a  funtion
add two numbers ?
*/

let a = 19;
let b = 12;
function add() {
  console.log(a + b);
}
add();

/*Output:31
*/

// example-2
/* 
create a var= factor,fplayer,fmovie 
using funtion
print output?

*/

var factor = "kamal"
var fplayer = "dhoni"
var fmovie = "doom"
function fav (){
    console.log("fav actor is: "+ factor);
    console.log("fav player is: "+fplayer);
    console.log("fav movie is: "+fmovie);
}
fav();

/*Output:
fav actor is: kamal
fav player is: dhoni
fav movie is: dom
*/

// PARAMETERS:

/* 
create funtion area assign values length,breadth
calculate area? using parameters.

*/

function area(length, breadth) {
  console.log(length * breadth);
}
area(10, 55);

/*Output:550
*/

//RETURN STATEMENT:
/* 
create function 
create var total, and assign it the value of add(a,b)
find output using return statement
 

*/

function add(a,b){
    return a+b
}
var total=add(10,58)
console.log(total);

/*Output:68
*/

// if condtional statement:

// example-1
/* 
create a var=homework, 
find true or false condtion ?

*/


var homework = false;
if (homework) {
  console.log("Great Job");
} else {
  console.log("Finish your homework before playing");
}

/*Output:Finish your homework before playing
*/

// example-2
/* 
create a var=cookies, 
find true or false condtion ?

*/

var cookies = true;
if (cookies) {
  console.log("Would you like cookies");
} else {
  console.log("Time to Bake More Cookies");
}

/*Output:Would you like cookies
*/
// //example-3
/* 
create a var=brush, 
find true or false condtion ?

*/

var brush = true;
if (brush) {
  console.log("Your teeth is clean");
} else {
  console.log("go brush your teeth now");
}

/*Output:Your teeth is clean
*/

// //example-4
/* 
create a var=bday, 
find true or false condtion ?

*/

var bday = true;
if (bday) {
  console.log("happy bday");
} else {
  console.log("have a great day");
}

/*Output:happy bday
*/

// LOGICAL STATEMENT:

// example-1
/* 
create a var=season, summmer,autumn and spring
find which condtion true ?

*/

var season="summer";
 if(season== "summer"){
   console.log("enjoy the folwers");
 }

 if(season== "autumn"){
   console.log("admire the colourfl leave");
 }

 if(season== "spring"){
   console.log("have fun in the sun ");
 }

 /*Output:enjoy the folwers
*/

// example-2
/* 
create a var ,values is 12,
find odd or even number.using if ,else 

*/

var number=12
if(number%2 ==0){
    console.log("the number is even");
}
else{
    console.log("this number is odd");
}

/*Output:the number is even
*/

// example-3
/* 
create a string ,fruits,
less than 50 print you need improve,
less than 70 and greater then 50 print good job,
greater than 70  print exellent.

*/


var fruit=""
let vowel=["a","e","i","o","u"]
if(fruit||vowel){
    console.log("its a vowel");
}
else{
    console.log("its a consonant");
}

/*Output: 
*/

// example-4

/* 
create a var ,values is 72,
less than 50 print you need improve,
less than 70 and greater then 50 print good job,
greater than 70  print exellent.

*/

var score=72

if(score<=50){
    console.log("you need  to improve ");
}
else if(score>50 && score<=70)
{
    console.log("Good job!");
}
else if(score>70)
{
console.log("Exellent");
}

/*Output:Exellent
*/

//FOR LOOP:

//example-1
/* 
print the numbers (1to10)

*/

for(num=1;num<=10; num++)   {
    console.log(num)
}

/*Output:
1
2
3
4
5
6
7
8
9
10
*/

 //example-2

 /* 
print the number (1 to 10) in reserve order

*/

for(num=10;num>0; num--)   {
    console.log(num);
}

/*Output:
10
9
8
7
6
5
4
3
2
1
*/

//example-3
/* 
 print even number only using for and if

*/

for(num=1;num<=10; num++) 
    if(num%2 == 0)  {
    console.log(num);
}

/*Output:
2
4
6
8
10
*/

//example-4
/* 
create 2 tables using for

*/


for(num=1;num<=10; num++) 
   
      {
    console.log(num+"x2=" +(num*2));
}

/*Output:
1x2=2
2x2=4
3x2=6
4x2=8
5x2=10
6x2=12
7x2=14
8x2=16
9x2=18
10x2=20
*/
