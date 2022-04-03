class Uaer {
    constructor(name) {
        this.name = name;
    }
    sayhi() {
        alert(this.name);
    }
}
let user = new User();//=》 new() 调用 constructor 
user.sayhi();