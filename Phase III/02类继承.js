// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} hides!`)
//     }
//     // stop() {
//     //     alert("Rabbit.stop()");
//     // }//= 重写方法
//     stop() {
//         super.stop();
//         this.hide();
//     }
//     //- 继承类的 constructor 必须调用 super(...)，并且 (!) 一定要在使用 this 之前调用。
//     constructor(name,earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
// }

// let rabbit = new Rabbit("White Rabbit",10);
// alert(rabbit.name);
// alert(rabbit.earLength);

//================================================================
//=> 拓展实例例子

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);//=> 子类的 constructor 必须调用 super()。
        this.createa = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name);