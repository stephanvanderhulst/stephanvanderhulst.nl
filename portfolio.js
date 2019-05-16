/* using jQuery to grab an element */
var myPara = $("#content p:last-child");
myPara.addClass("test");
myPara.fadeOut();

// Looping and conditional statements are collectively known as control flow in javascript

// callback & forEach magic
const ul = document.querySelector('.people'); //the people class is selected
let people = ['Bruce','Fan','Jim','Mark'];

let html = "";

people.forEach(name => { //callback func that is sent to each array item
	html += `<li>${name}</li>`;
});

ul.innerHTML = html;

// lets make an object and access it
let personObject = {
	name: "Jim",
	age: 35,
	faveFood: "Cheese",
	blogs: ['My birthday party', 'Why Ham is now my fave food', 'My last blog!!'],
	login(){document.write('The user logged in<br><br>');},
	logBlog(blogNum){document.write(`This is the blog ${this.blogs[blogNum]} <br>`);},
	logAllBlogs(){this.blogs.forEach(blog => {
		document.write(`${blog}<br>`);
	})}
};
document.write(`${personObject.name} is ${personObject.age} years old. His favourite food is ${personObject.faveFood}.<br>`);
personObject.age += 1; //Jim just had his birthday
document.write(`${personObject.name} is ${personObject.age} years old. His favourite food is ${personObject.faveFood}.<br>`);
personObject['faveFood'] = 'Ham'; //a different way of accessing the value
document.write(`${personObject.name} is ${personObject.age} years old. His favourite food is ${personObject.faveFood}.<br>`);
personObject.login(); // this is an object method
personObject.logBlog(1); //access a specific blog
personObject.logAllBlogs(); //Prints all blogs

//Now lets put objects in an array
const blogArray = [
	{title: 'My birthday party', likes: 30},
	{title: 'Why Ham is now my fave food', likes: 40},
	{title: 'My last blog!!', likes: 20}
];

//Nice way to get random number from 1 to 100
let randomNumber = Math.round(Math.random * 100);

// Write your JS in here
const pics = [
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_wall.jpg"
]

let img = document.getElementById("cat-photo");
let counter = 1;

function nextImage(){
	if (counter === 4) {
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
}

setInterval(nextImage, 3000);

// Break and continue: flow control
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i < scores.length; i++){

	if(scores[i] === 0){
		continue;
	}

	console.log(`your score: ${scores[i]}`);

	if(scores[i] === 100){
		console.log("You got the high score!");
		break;
	}

}

/* lets add an li to the unordered-list */
var newLi = document.createElement("li");
var unorderedList = document.getElementById("unordered-list");
unorderedList.appendChild(newLi);
newLi.innerHTML = "This li was added by JavaScript!";
/* lets add another higher up in the list */
var anotherLi = document.createElement("li");
anotherLi.innerHTML = "added by JavaScript!";
unorderedList.insertBefore(anotherLi, unorderedList.getElementsByTagName("li")[2]);

/* remove an element from the Document Object Model */
var child = unorderedList.getElementsByTagName("li")[3];
unorderedList.removeChild(child);

/* lets do an on-click on the list */
unorderedList.onclick = function(){
	alert("you clicked my list!!!");
}

/* one step access to h2 content in first div [0] */
var myH1 = document.getElementsByClassName("content")[0].getElementsByTagName("h2");
myH1[0].innerHTML = "testing the content update!!YEAAAAA";

/* two step access to h2 content in second div [1] */
var myContentDivs = document.getElementsByClassName("content");
var myH2 = myContentDivs[1].getElementsByTagName("h2");
myH2[0].innerHTML = "testing the content update!!";

/* locating the class "box" and changing its content... */
var myBoxContent = document.getElementsByClassName("box");
myBoxContent[0].innerHTML = "again testing the content update!!";

/* puts the name of the ID inside the element as text then changes the id */
var myDivDiv = document.getElementById("divdiv");
myDivDiv.textContent = myDivDiv.getAttribute("id");
myDivDiv.id = "div div div";
myDivDiv.setAttribute("style", "text-align: center; border: 3px solid green;");
myDivDiv.style.border = "10px solid red";
myDivDiv.style.backgroundColor = "green";

/* JS to expand the Lorem text */
var loremContent = document.getElementById("main-content");
var showMore = document.getElementById("show-more");

showMore.onclick = function() {
	if(loremContent.className == "open"){
		//shrink the box
		loremContent.className = "";
		showMore.innerHTML = "Show more";
	} else {
		//expand the box
		loremContent.className = "open";
		showMore.innerHTML = "Show less";
	}
}

var myCar = {

	maxSpeed: 70,
	driver: "Net Ninja",
	drive: function(){document.write("Car is now driving<br>");},
	distance: function(time){document.write(this.maxSpeed*time+"<br>");},

	testThis(){
		document.write(this+"<br>");
	}

}
document.write(myCar.maxSpeed);
myCar.drive();
myCar.distance(10);
myCar.testThis();

/* constructor function */
var Car = function(maxSpeed, driver){

	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function(){document.write("Car is now driving<br>");};
	this.distance = function(time){document.write(this.maxSpeed*time+"<br>");};

}

/* make car instances using the constructor */
var myCar2 = new Car(120, "Stephan");
var myCar3 = new Car(100, "Yayaya");

/* call functions and properties of newly made cars */
myCar2.drive();
document.write(myCar3.driver);
myCar3.distance(50);

/* the date object */
var myDate = new Date();
document.write(myDate+"<br>");
document.write(myDate.getFullYear()+"<br>");
document.write(myDate.getDay()+"<br>");
document.write(myDate.getHours()+"<br>");

var myString = 'This is a string';
/* -1 means that the word is not found in the string */
if (myString.indexOf("ninja") === -1){
	document.write("The word ninja is not in the string<br>");
}

var age = 5;
while(age < 10){
	document.write(age+"<br>");
	age++;
}

var myAge = 25;

if (myAge >= 18 && myAge <= 30){
	document.write("testtesttest<br>");
}

if (myAge >= 18 || myAge >= 30){
	document.write("testtesttest<br>");
}

/* doing a recursive function */
function countDown(num){
	if(num <= 0){
		document.write("finished counting down!<br><br>");
		return;
	}
	document.write(num+"<br>");
	num--;
	countDown(num);
}

countDown(55);

/* another recursive function that returns the total of all the input plus all the number below it */
function sumRange(num = 400){
	if(num === 1) return 1;
	return num + sumRange(num-1);
}

//num not given so default of 400 is used in function
document.write(sumRange()+"<br>");

//arrow function that calculates an area no () needed when theres one parameter
const calcArea = radius => 3.14 * radius**2;

document.write(`The area is ${calcArea(5)}`);

//FizzBuzz cleaner method that can easily be expanded
for(let i=1; i<=100; i++){
	
	let output = "";

	if(i % 3 == 0) { output += "Fizz"; }
	if(i % 5 == 0) { output += "Buzz"; }

	if(output == "") { output = i;}

	document.write(output+"<br>");
}

//FizzBuzz first idea
for(let i=1; i<=100; i++){
	if (i % 15 == 0){
		document.write("FizzBuzz<br>");
	}
	else if (i % 3 == 0){
		document.write("Fizz<br>");
	}
	else if (i % 5 == 0){
		document.write("Buzz<br>");
	}
	else
		document.write(i+"<br>");
}