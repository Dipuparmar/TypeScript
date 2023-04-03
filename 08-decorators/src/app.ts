

// function Logger(logString: string) {
  
//   return function (constructor: Function) {

//     console.log(logString);
//     console.log(constructor);
//   }
// }

// function withTemplate(template: string , hookId: string){
//   return function(constructor: any){
//     const hookEl=  document.getElementById(hookId);
//     const p = new constructor();
//     if(hookEl){
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name
//     }
//   }
// }





// @Logger('hello world')
// @withTemplate('<h1>My Person Object</h1>','app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const pers = new Person();

// console.log(pers);


// //....................

// function Log(target : any ,propertyName: string){
//   console.log('property decorator');
//   console.log(target, propertyName);
// }


// class product {
//   @Log  
//   title : string;
//  private _price: number;

//  set price(val: number){
//   if( val>0){
//     this._price = val;
//   }else{
//     throw  new Error('invalid price!!!!!!!!!!!!!!!1')
//   }
//  }
//   constructor(t: string, p: number ){
//     this.title = t;
//     this._price = p; 
//   }

//   getPriceWithTax(tax: number){
//     return this._price*(1+ tax);
//   }
// }



class printer {
  message = 'this works!!'

  showMessage(){
    console.log(this.message)
  } 
}

const p = new printer();
const button = document.querySelector('button')!;
button.addEventListener('click',p.showMessage.bind(p));

