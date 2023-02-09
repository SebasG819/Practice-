const person ={ 
    name: "Sebas",
    age: 19,
    occupation: "Fuckboy",
    level: 1000
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//Brackets notation 
const lion ={
    name:"Hector",
    friends: ["Melvis", "Perez"]
}
console.log(lion["friends"][0]);

//  In operator

const Mycar = {
    date: 2022,
    make: "Tesla"
}
let dateIn = "date" in Mycar
"age" in Mycar; //true 
console.log(dateIn);

//Reference and copy 
const User = {
name: 'Jhayco',
 age: 18
}

let admin = User ;
console.log(admin.name);

admin.name = "Anuel"
console.log(admin.name);
console.log(User.name);

let Object1 = {};
let Object2 = Object1;
console.log(Object1 === Object2);

//Copying

let Object3 = JSON.parse(JSON.stringify(Object1));

class Person{
    constructor(name, LastName, age ){
        this.name = name;
        this.LastName = LastName;
        this.age = age;
    }

    greet(){
        return "listening....." + this.name;
    }
    getFullName(){
        return this.LastName + "  " + this.LastName;
    }
}

let Badboo = new Person("Badboo","Martinez", "24")

let Daddy = new Person("Daddy","Yankee", "24")

console.log(Badboo.greet());

let Josejose = {...Badboo};I//ECS6
Josejose.namename = "Josejose"
console.log(Badboo)

//POO
class Tornillo{
    constructor(size){
        this.size = size;
    }
}

class Motor{
    constructor(force){
        this.speed = force;
        this.tornillos = [];
        this.tornillos.push(new Tornillo("small"));
        this.tornillos.push(new Tornillo("medium"));
    }
}

class Car{
    constructor(brand){
        this.brand = brand;
        this.motor = new Motor(500);

        this.tornillos = [];
        this.tornillos.push(new Tornillo("big"));

    }

    acelerar(kmh=10){
        if(kmh > 200){
            console.log("Kuchaoooooooo")
        }else{
            console.log("franchescoooooo virgoliniiiiiiii")
        }
    }
}

const mycarMcqueen = new Car ("Tesla");
mycarMcqueen.acelerar();
mycarMcqueen.acelerar(650);

//Inheritance
class Deportivo extends Car {
    constructor(brand){
        super(brand);
        this.have8xV = true;
    }
    acelerar(){
        console.log("acelerando a toda mierda")
    }
}

const myAudi = new Deportivo("Audi");
console.log(myAudi);
myAudi.acelerar();

const calculateArea = (high = 20, width= 23) => high * width;

const person2 = {
    Name: "Juan",
    LastName: "Rami"
}


