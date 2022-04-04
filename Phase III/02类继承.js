class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`)
    }
}

let animal = new Animal("My animal");
animal.run(20);
animal.stop();