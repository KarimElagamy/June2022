const myBtn = document.getElementById("bgColor");

myBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "Green";
})

function resetForm(){
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPassword").value = "";
}

const resetButton = document.getElementById("clearForm");

resetButton.addEventListener("click", () => {
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPassword").value = "";
})

//Object Literals
var Person = {firstName: "Karim", lastName: "Elagamy", Age: 22, Location: "Washington"};
console.log(Person);

//Function Constructors
function Guy(first = "default", last = "default", Age = 0, Location = "default"){
    this.firstName = first;
    this.lastName = last;
    this.age = Age;
    this.location = Location;
}

const defaultGuy =  new Guy();
const Karim = new Guy("Karim", "Elagamy", 22, "Washington");
console.log(defaultGuy);
console.log(Karim);

//Object.Create Method
const newPerson = Object.create(defaultGuy);
console.log(newPerson);
newPerson.firstName = "New First Name";
newPerson.lastName = "new Last Name";
newPerson.age = Karim.age;
newPerson.location = Karim.location;
console.log(newPerson);

//Class
class Car {
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
    intro(){
        console.log(this.Make, this.Model);
    }
}

const newCar = new Car("ford", "focus");
console.log(newCar);
newCar.intro();

//Inheritance
class Engine extends Car {
    constructor(Make, Model, Engine){
        super(Make, Model);
        this.Engine = Engine;
    }
}

const specificCar = new Engine("ford", "Mustang", "V8");
console.log(specificCar);

//Homework Example
let Salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

var sum = Salaries.Ann + Salaries.John + Salaries.Pete;
console.log(sum);

//Create an Array
const salariesArray = [100, 160, 130];

console.log(salariesArray);
//Access an element - Remember index starts at 0
console.log(salariesArray[1]);

//Change value of array item
salariesArray[1] = 200;
console.log(salariesArray); 

//Add item to end of Array
salariesArray.push(500);
console.log(salariesArray);

//Remove last item from Array
salariesArray.pop();
console.log(salariesArray);

//Remove first item from Array
salariesArray.shift();
console.log(salariesArray);

salariesArray.push(100, 200, 300, 400, 500, 600);
console.log(salariesArray);

//Remove item from middle of the Array
salariesArray.splice(3,2);
console.log(salariesArray);

//For loop in Javascript
function functionName(){
    for (var i = 0; i < salariesArray.length; i++){
        salariesArray[i] += 1;
    }
}

//Function execution
functionName();
console.log(salariesArray);

//Iterate through elements in an object
//for (let el in object){

//}

//local Storage
localStorage.clear();
localStorage.setItem('firstItem', 'Strawberry Pancake');
console.log("First Local Storage Item: " + localStorage.getItem('firstItem'));
localStorage.setItem('secondItem', 'Chocolate Chip Pancake');
console.log("First Item: " + localStorage.getItem("firstItem") + ", Second Item: " + localStorage.getItem("secondItem"));
localStorage.removeItem('firstItem');
console.log("First Item: " + localStorage.getItem("firstItem") + ", Second Item: " + localStorage.getItem("secondItem"));
localStorage.clear();
console.log("First Item: " + localStorage.getItem("firstItem") + ", Second Item: " + localStorage.getItem("secondItem"));

//Session Storage
let x = 'Strawberry Pancake';
sessionStorage.setItem('favoriteFood', btoa(x));
console.log("Encrypted value: " + sessionStorage.getItem('favoriteFood'));
console.log("Decrypted value: " + atob(sessionStorage.getItem('favoriteFood')));
sessionStorage.setItem('favoriteFood2', 'ghjlhgsrghsrghsroi');
console.log(sessionStorage.getItem('favoriteFood') + ", " + sessionStorage.getItem('favoriteFood2'));
sessionStorage.removeItem('favoriteFood');
console.log(sessionStorage.getItem('favoriteFood') + ", " + sessionStorage.getItem('favoriteFood2'));
sessionStorage.clear();
console.log(sessionStorage.getItem('favoriteFood') + ", " + sessionStorage.getItem('favoriteFood2'));

//Cookies
document.cookie = "new_Sample_Cookie=This_is_our_Cookie; expires=Mon 5 Sep 2022 12:000:00 UTC; path=/";
document.cookie = "no_flag_Cookie=This_is_our_cookie_with_no_flags";
console.log(document.cookie);

//Get Current Date and Time
var currentDate = new Date();
console.log(currentDate);

//Add days to current Date and Time
function addDays(date, days){
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

//Function Call
currentDate = addDays(currentDate, 7);
console.log(currentDate);

//Create Cookie with the Date variable 
document.cookie = "new_Sample_Cookie2=This_is_our_Cookie; expires="+currentDate+"; path=/";
console.log(document.cookie);

//XMLHttpRequest GET Request
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
oReq.send();
function reqListener(){
    console.log(this.responseText);
}

//XMLHttpRequest POST Request
var pReq = new XMLHttpRequest();
pReq.addEventListener("load", reqListener);
pReq.open("POST", "https://jsonplaceholder.typicode.com/posts");
pReq.send("title=Example POST Request&body=Antra.com&userId=100");
function reqListener(){
    console.log(this.responseText);
}

//Fetch API
//Getting a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((json) => console.log(json));

//Creating a Resource
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'Example Post Request',
        body: 'Antra.com',
        userId: 101,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//Updating a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'Example Put Request',
        body: 'Antra.com',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//Partially Updating a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'Example Patch Request',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//Deleting a Resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE',
})
.then((response) => response.json())
.then((json) => console.log(json));

const myForm = document.getElementById("myForm");

//Regular Expressions
//A or a and optionally numbers before an @ symbol + that has to be followed by letters uppercase or lowercase + that has to be followed by .com or .net or .edu or basically a . with text after it
function ValidateEmail(inputText){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)){
        alert("Valid Email Address!");
        document.myForm.inputEmail.focus();
        return true;
    }
    else {
        alert("You have entered an invalid Email Address!");
        document.myForm.inputEmail.focus();
        return false;
    }
}

//Promises: a callback function to initalize a process that takes in two arguments: resolve and reject
//resolved: the resource was loaded successfully/promise executed successfully
//rejected: the resource failed to load/promise failed to execute properly

//both of these return something, so the order of resole or reject matters
//Callback: is essentially a function that is passed in as a parameter
function promiseDemo(){
    let p = new Promise(function(resolve, reject){
        let dept = {
            id: 1,
            name: "Full Stack"
        }
        resolve(dept);
        reject("The service is currently unavailable");
    })
    p.then(function(d){
        console.log(d)
    }).catch(function(e){
        console.log(e)
    })
}

promiseDemo();

//Chaining .thens to transform, format, or otherwise change your data

let p2 = new Promise((resolve,reject) => {
    resolve(2);
})
p2.then(function(d){
    console.log(d);
    return d*2;
}).then(function(d1){
    console.log(d1);
    return d1*2;
}).then(function(d2){
    console.log(d2);
})