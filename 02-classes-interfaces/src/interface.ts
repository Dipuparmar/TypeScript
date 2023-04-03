interface Name {
     name: string;
}

interface Addfn {
    (a: number,b: number): number;
}

let add: Addfn;
add =  (n1: number , n2: number)=> {
    return n1 + n2
}


interface Greetable extends Name  {
    geet(pharse: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    geet(pharse: string): void {
        console.log(pharse + "" + this.name)
    }
}

let user1: Greetable;
user1 = new Person('Max')

user1.geet('hi there...')

console.log(user1)