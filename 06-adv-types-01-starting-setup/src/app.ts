// type admin = {
//     name: string;
//     privileges: string[]
// }

// type employee = {
//     name: string;
//     startDate: Date;
// }

// type EMployeee = admin & employee;

// const e1: EMployeee = {
//     name: 'Max',
//     privileges: ['hellllllll'],
//     startDate: new Date()
// };

// console.log(e1)


// class Car {
//     drive() {
//         console.log('Driving..')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a Truck ..')
//     }

//     loadCargo(amount: number) {
//         console.log('Loading Cargo <<<' + amount)
//     }
// }

// type vehicle = Car | Truck;

// const V1= new Car();
// const V2 = new Truck();

// function useVehicle(vehicle: vehicle) {
//     vehicle.drive()
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(V1);
// useVehicle(V2);


// interface Bird {
//     type: 'Bird';
//     flyingSpeed : number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed : number;
// }

// type Animal = Bird | Horse;

// function moveAnimal( Animal : Animal){
// let speed;
// switch( Animal.type){
//     case 'Bird':
//         speed = Animal.flyingSpeed;
//         break;
//     case 'horse':
//         speed= Animal.runningSpeed;    
// }
//     console.log('Moving with speed '+ speed);
// }


// moveAnimal({type: 'horse' , runningSpeed : 10})

// type Combinable = string | number;
// type Numeric = number | boolean ;

// type Universal = Combinable & Numeric;

// function add (a: number, b: number ): number;
// function add (a: string, b: string ): string;
// function add (a: Combinable, b: Combinable ){
//     if(typeof a === 'string' || typeof b === 'string' ){
//         return a.toString() + b.toString();
//     }
//     return a + b; 
// }

// const result = add("deeep", "parmar")
// console.log(result)

const fetechedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title :'CEO', description: 'this is my company' }
}


console.log(fetechedUserData?.job?.title);
