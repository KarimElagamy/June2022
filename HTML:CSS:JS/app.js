const myBtn = document.getElementById("bgColor");

myBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "Green";
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
for (let el in object){

}