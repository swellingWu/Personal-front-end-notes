class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    static get[Symbol.special]() {
        return Array;
    }
}

let arr = new PowerArray(1,2,3,4,50,60);
alert(array.inEmpty());

let filteredArr = arr.filter(item => item >= 10);// filteredArr 不是 PowerArray，而是 Array
alert(filteredArr.isEmpty());