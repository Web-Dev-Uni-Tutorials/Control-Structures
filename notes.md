## Control Structures

### The 'if' statement

The if statement is used to test values
```javascript
const name="Matthew";
if(name === "Matthew"){
  console.log(`Welcome ${name}`);
}else{
  console.log(`Welcome user`);
}
```
Conditional Operators allow us to test in different ways:

* === 	(Equal to)
* \> 		(Greater than)
* \>= 		(Greater than or equal to)
* < 		(Less than)
* <=		(Less than or equal to)
* !==		(Not equal to)

```javascript
const uTeam="Huddersfield Town";
if(uTeam!=="Man Utd."){
	console.log(`You support ${uTeam}, good choice`);
}else{
	console.log('Bad choice');
}
```
JavaScript allows us to combine two or more tests into one statement using AND (&&) and OR (||) operators.

```javascript
const mark=68;
if(mark>=60 && mark<70){
	console.log("You got a B");
}
```
```javascript
const weather="raining";
if(weather === "raining" || weather === "cold"){
	console.log("Wear a coat");
}
```
### Loops
The while loop repeats a set of instructions over and over again until a condition is met. This while loop outputs the numbers 10 to 19:

```javascript
let counter=10;
while (counter<20){
	console.log(counter);
	counter++;
}
```
The for loop outputs a set of instructions a pre-defined, set number of times. The following for loop will output the numbers 1 to 10.

```javascript
for(let i=1;i<=10;i++){
	console.log (i);
}
```
