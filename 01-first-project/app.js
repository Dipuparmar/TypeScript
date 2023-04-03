import React from 'react'

export default function app() {
  return (
    <div>
      
    </div>
  )
}



"use strict";
function Combine(data1, data2) {
    let result;
    if (typeof data1 === 'number' && typeof data2 === 'number') {
        result = data1 + data2;
        console.log(result);
    }
    else {
        result = data1.toString() + data2.toString();
        console.log(result);
    }
}
Combine(20, 20);
Combine('deep', "parmar");
// enum Role {
//     admin =1,
//     read_only, 
//     Author
// };
// const person= {
//     name: 'deep',
//     age: 20,
//     role: 3
// }
// if(person.role === Role.Author){
//     console.log('both are same')
// }
