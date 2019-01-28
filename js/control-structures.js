/*
1) Create a JavaScript application that asks the user what their name is. If they answer 'Fred' feedback
to the user telling tell them you like their name.
*/


/*
2) Create a JavaScript application that asks the user for 2 numbers and feeds back to the user with the
highest of the two numbers.
*/

/*
3) Create a JavaScript application that asks the user for their age. If the user is older than 4 and
younger than 16 feedback to the user telling them they should be at school
*/

/*
4) Create a JavaScript program that asks the user for the name of the Prime Minister. If the user
responds with 'Theresa', 'Theresa May' or 'May' the program should feedback telling them they
are correct.
*/


/*
5) Question 4 asks the user for the name of the Prime Minister. It is possible that the user will enter the
answer in lower case e.g. 'theresa may'. Again do some research do find out how the case of string
data can be converted from upper to lower case - 
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Modify your answer to question 4 to make the program more robust.
 */

/*
6) Create a JavaScript program that asks the user for three numbers and feeds back to the user with
the lowest.
*/

/*
7) Create a simple JavaScript quiz. This program has been started for you, see below. Add javaScript 
that will test the user's answers,calculate a score for the user, and feedback to the user.
*/
/*
let score=0;
const capitalEngland=prompt("What is the capital of England");
const capitalFrance=prompt("What is the capital of France");
const capitalGermany=prompt("What is the capital of Germany");
*/


/*
8) Factory owners SlaveDrivers Inc. pay their workers a basic wage of £2.40 an hour. If an employee
works over 40 hours a week they receive £3.60 an hour for every hour of overtime they work. Workers
can work a maximum of 80 hours a week. Write a JavaScript application that allows workers to enter
the number of hours they have worked. The program should then feedback to the user telling them their
wages for the week.
*/

/*
9) Look at the following for loop. Uncomment the code. Modify the loop so that it
a) Output the numbers 0 to 50
b) Outputs the numbers 50 to 100
c) Re-write the loop as a while loop
*/

/*
for(let i=1;i<=10;i++)
{
    console.log(i);
}
*/

/*
10) Write a JavaScript program that asks the user for their name and then for a number. The
program should output the user's name repeatedly. e.g. If the user enters 4 for the number
their name should be printed 4 times. If they enter 6, the name should be printed 6 times
*/

/*
11) Write a JavaScript program that asks the user for a number and then uses a for loop to
output the times table for that number. Here is some code to get you started:
*/
/*
const userNum=prompt("Tell me a number");
for(let i=1;i<=12;i++)
{
    console.log(i);
}
*/

/*
12) Uncomment the following program. It is a simple quiz. The user gets three guesses. 
a)Can you re-write this program using a for loop so that the code is more efficient and easier to maintain?
b) One problem is that if the user answer correctly on the first attempt they are still asked two more times. Do some research into the 'break' statement e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
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
13) Uncomment the following program. It is an example from the lecture. 
a) Modify the program so that every time the user guesses, the program tells the user if their guess is too high or too low. 
b)If you can get this to work it makes the game too easy. Modify the program so that a
random number between 1 and 100 is generated (instead of 1 to 10).
*/

/*
const ranNum=Math.floor(Math.random()*10+1);
let correct=false;
let count=0;
let msg;
while(correct===false)
{
    count++;
    let userGuess=parseInt(prompt("Guess the random number"));
    if(userGuess===ranNum)
    {
        correct=true;
    }
}
msg=`You guessed the random number is ${ranNum} it took you ${count}`;
if(count===1){
    msg=msg+" guess"
}else{
    msg=msg+" guesses"
}
console.log(msg)
*/

/*
14) Write a program that asks the user for a colour and then changes the background
colour of the page to the colour the user enters. The program should repeat this process
until the user doesn't enter a colour i.e. the input will be equal to an empty string "". You will need to use a while loop.
*/

