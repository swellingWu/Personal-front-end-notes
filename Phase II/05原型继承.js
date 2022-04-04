//= 使用原型继承组合两个对象
let animal = {
    eat: true,
    walk() {
        alert("Annimal walk")
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
}
rabbit.__proto__=animal;

alert(rabbit.eat);
alert(rabbit.jumps);
rabbit.walk();// Annimal walk

