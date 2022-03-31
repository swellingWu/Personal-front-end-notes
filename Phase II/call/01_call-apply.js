//* 传入的缓存工作
// function slow(x) {
//     alert(`Called with ${x}`);// => Called with 1
//     return x;//- 打印并返回调用的参数
// }

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {  
            return cache.get(x);
        }//= 当数据已存在时，直接返回数据即可
        //= 缓存不存在的数据

        let result = func(x);
        // //=> 
        // let result = func.call(this,x);

        cache.set(x,result);
        return result;
    }
}

//? 测试: 直接传入方法
// slow = cachingDecorator(slow);
// alert(slow(1));// => 1
// alert("Again: " + slow(1));// => Again: 1

//? 测试: 传入对象时 -> fuc
let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        alert(`Called with ${x}`);// => Called with 1
        return x * this.someMethod();//- 打印并返回调用的参数
    },
}
alert(worker.slow(1));
worker.slow = cachingDecorator(worker.slow);
alert(worker.slow(2));