/*
1) Create a JavaScript application that asks the user what their name is. If they answer 'Fred' feedback to the user telling tell them you like their name. (slide 6 has a very similar example)
*/

/*
const userName = prompt("What is your name?");
if(userName === "Fred"){
    console.log("I like your name");
}else{
    console.log("You're not Fred");
}
*/

/*
2) Create a JavaScript application that asks the user for 2 numbers and feeds back to the user with the highest of the two numbers.(slides 4-6)
*/

/*
const num1 = parseInt(prompt("Enter a number"));
const num2 = parseInt(prompt("Enter another number"));

if(num1 > num2){
    console.log(`${num1} is bigger than ${num2}`);
}else if(num2 > num1){
    console.log(`${num2} is bigger than ${num1}`);
}else{
    console.log(`${num1} equals ${num2}`);
}
*/

/*
3) Create a JavaScript application that asks the user for their age. If the user is older than 4 and younger than 16 feedback to the user telling them they should be at school. (slides 10-12)
*/

/*
const userAge = parseInt(prompt("How old are you?"));

if(userAge >= 4 && userAge <= 16){
    console.log(`You are ${userAge} years old. You should be at school.`);
}
*/

/*
4) Create a JavaScript program that asks the user for the name of the Prime Minister. If the user responds with 'Boris', 'Boris Johnson' or 'Johnson' the program should feedback telling them they are correct. (slides 13-14)
*/

/*
const pmGuess=prompt("What is the name of the Prime Minister?");
if(pmGuess === "Boris"||pmGuess === "Johnson"|| pmGuess === "Boris Johnson"){
    console.log("You are correct.");
}
else{
    console.log("Wrong");
}
*/

/*
5) Create a JavaScript program that asks the user for three numbers and feeds back to the user with the lowest of the three numbers.(slides 10-12)
*/

/*
let lowest;
const num1=parseInt(prompt("Tell me a number"));
const num2=parseInt(prompt("Tell me another number"));
const num3=parseInt(prompt("Tell me third number"));

if(num1 < num2 && num1 < num3){
    lowest = num1;
}else if(num2 < num1 && num2 < num3){
    lowest = num2;
}else if(num3 < num2 && num3 < num1){
    lowest = num3;
}
console.log(`The lowest number out of ${num1}, ${num2} and ${num3} is ${lowest}`);
*/

/*
6) Look at the following for loop. Uncomment the code. Check it works, it should output the numbers 1 to 10. Modify the loop so that it does the following (slides 26-32):
a) Output the numbers 0 to 50
b) Outputs the numbers 50 to 100
c) Re-write the loop as a while loop
*/

/*
for(let i=1;i<=10;i++){
    console.log(i);
}
*/

/*
for(let i=0;i<=50;i++){
    console.log(i);
}

for(let i=50;i<=100;i++){
    console.log(i);
}

let i = 0;
while(i<=10){
  console.log(i);
  i++;
}
*/

/*
Most students find the following questions a bit more difficult, so don't worry too much if you can't get the programs to work / aren't sure about how to answer the question. Even if you are attempting the questions and thinking about how to provide a solution you are learning. You can use the solutions branch to see example answers.
*/

/*
7) Question 4 asked the user for the name of the Prime Minister. It is possible that the user will enter the answer in lower case e.g. 'boris'. Do some research do find out how the case of string data can be converted from upper to lower case - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase. Modify your answer to question 4 to make the program more robust i.e it doesn't matter what case the user uses to answer the question and the program still works.
 */

/*
 let pmGuess = prompt("What is the name of the Prime Minister?");
 pmGuess = pmGuess.toLowerCase();
 if(pmGuess === "boris" || pmGuess === "johnson" || pmGuess === "boris johnson") {
     console.log("You are correct.");
 } else {
     console.log("Wrong");
 }
*/


/*
8) This program has been started for you. It is a simple JavaScript quiz. Add some more JavaScript that will test the user's answers, calculate a score for the user, and feedback to the user. (Hint: you might want to use the increment operator ++ e.g. score++;)
*/

/*
let score = 0;
const capitalEngland = prompt("What is the capital of England");
const capitalFrance = prompt("What is the capital of France");
const capitalGermany = prompt("What is the capital of Germany");

if(capitalEngland === "London"){
    score++;
}
if(capitalFrance === "Paris"){
    score++;
}
if(capitalGermany === "Berlin"){
    score++;
}
console.log(`Your score is ${score} out of 3.`);
*/

/*
9) Factory owners SlaveDrivers Inc. pay their workers a basic wage of £2.40 an hour. If an employee works over 40 hours a week they receive £3.60 an hour for every hour of overtime they work. Workers can work a maximum of 80 hours a week. Write a JavaScript application that allows workers to enter the number of hours they have worked. The program should then feedback to the user telling them their
wages for the week.
*/

/*
let wages;
const hours=parseInt(prompt("Please enter the number of hours you have worked?"));
if(hours >= 1 && hours <=80){
    if(hours>40){
        const overtimeHours=hours-40;
        wages=overtimeHours*3.60 + 40*2.40
    }else{
        wages=hours*2.40
    }
    console.log(`You worked ${hours} hours. You earnt £${wages}.`);
}else{
  console.log(`It's not possible to work ${hours} hours.`);
}
*/

/*
10) Write a JavaScript program that asks the user for their name and then for a number. The program should output the user's name repeatedly. e.g. If the user enters 4 for the number their name should be printed 4 times. If they enter 6, the name should be printed 6 times
*/

/*
const userNum=parseInt(prompt("Enter a number"));
const userName=prompt("Enter a name");
for(let i=1;i<=userNum;i++){
    console.log(`${i} ${userName}`);
}
*/

/*
11) Write a JavaScript program that asks the user for a number and then uses a for loop to output the times table for that number. Here is some code to get you started:
*/

/*
const userNum=prompt("Tell me a number");
for(let i=1;i<=12;i++)
{
    console.log(i);
}
*/

/*
const userNum=prompt("Tell me a number");
for(let i=1;i<=12;i++)
{
    console.log(`${userNum} times ${i} = ${i*userNum}`);
}
*/

/*
12) Uncomment the following program. It is a simple quiz where the user gets three guesses. Run the code in a browser to see what it does.
a)Can you re-write this program using a for loop so that the code is more efficient and easier to maintain?
b) One problem is that if the user answers correctly on the first attempt they are still asked two more times. Do some research into the 'break' statement e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
*/

/*
let userGuess;
alert("You get three guesses for the following question");

userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
if(userGuess===1){
    alert("You are correct");
}else if(userGuess<1){
    alert("Too low");
}else if(userGuess>1){
    alert("Too high");
}

userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
if(userGuess===1){
    alert("You are correct");
}else if(userGuess<1){
    alert("Too low");
}else if(userGuess>1){
    alert("Too high");
}

userGuess=parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
if(userGuess===1){
	alert("You are correct");
}else if(userGuess<1){
    alert("Too low");
}else if(userGuess>1){
    alert("Too high");
}
*/

/*
let userGuess;
alert("You get three guesses for the following question");
for(let i=1;i<=3;i++) {
    userGuess = parseInt(prompt("How many times have Huddersfield Town won the FA Cup?"));
    if(userGuess === 1) {
        alert("You are correct");
        break;
    } else if(userGuess<1) {
        alert("Too low");
    } else if(userGuess>1) {
        alert("Too high");
    }
}
*/

/*
13) Uncomment the following program. It is an example from the lecture slides.
a) Modify the program so that every time the user guesses, the program tells the user if their guess is too high or too low.
b) If you can get this to work it makes the game too easy. Modify the program so that a random number between 1 and 100 is generated (instead of 1 to 10).
*/

/*
const ranNum = Math.floor(Math.random()*10+1);
let correct = false;
let count = 0;
let msg;
while(correct === false)
{
    count++;
    let userGuess = parseInt(prompt("Guess the random number"));
    if(userGuess === ranNum)
    {
        correct = true;
    }
}
msg = `You guessed the random number is ${ranNum} it took you ${count}`;
if(count === 1){
    msg = msg+" guess"
}else{
    msg = msg+" guesses"
}
console.log(msg)
*/

/*
const ranNum = Math.floor(Math.random()*100+1);
let correct = false;
let count = 0;
let msg;
while(correct === false)
{
    count++;
    let userGuess = parseInt(prompt("Guess the random number"));
    if(userGuess === ranNum)
    {
        correct = true;
    }else if(userGuess > ranNum)
    {
        alert("Too high");
    }
    else if(userGuess < ranNum)
    {
        alert("Too low");
    }
}
msg=`You guessed the random number is ${ranNum} it took you ${count}`;
if(count === 1){
    msg = msg+" guess"
}else{
    msg = msg+" guesses"
}
console.log(msg);
*/

/*
14) Write a program that asks the user for a colour and then changes the background colour of the page to the colour the user enters. The program should repeat this process until the user doesn't enter a colour i.e. the input will be equal to an empty string "". You will need to use a while loop.
*/

/*
let userCol
while(userCol !== "")
{
    userCol = prompt("Enter a colour");
    document.body.style.backgroundColor = userCol;
}
*/

/*
The lecture slides 21-23 consider the use of the isNaN() function. Think about how you could use isNaN() to test if the user has entered a number e.g. for question 9
*/

/*
let wages;
const hours=parseInt(prompt("Please enter the number of hours you have worked?"));
if(!isNaN(hours)){
  if(hours >= 1 && hours <=80){
      if(hours>40){
          const overtimeHours=hours-40;
          wages=overtimeHours*3.60 + 40*2.40
      }else{
          wages=hours*2.40
      }
      console.log(`You worked ${hours} hours. You earnt £${wages}.`);
  }else{
    console.log(`It's not possible to work ${hours} hours.`);
  }
}else{
  console.log(`You need to enter a number.`);
}
*/
