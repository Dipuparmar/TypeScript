// console.log("starting")


// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// const mergedObj1 = merge({ name: 'Max'}, { age: 30 });
// console.log(mergedObj);
// console.log(mergedObj1);


class DataStorage<T extends number | string | object> {
    data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('deepe')
textStorage.addItem('udit')
// textStorage.removeItem('deepe')
console.log(textStorage.getItems());


const numberData = new DataStorage<number>();
numberData.addItem(10)
numberData.addItem(20)
// numberData.removeItem(10)
console.log(numberData.getItems());