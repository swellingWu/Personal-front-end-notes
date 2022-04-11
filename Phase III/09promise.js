let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"),1000);
})

promise.then(
    result => alert(result), // 1 秒后显示 "done!"
    error => alert(error) // 不运行
);
//' setTimeout(() => reject(new Error("Whoops!")),1000);
//' promise.catch(alert);

function loadScript(src,callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

function loadScripts(src) {
    return new Promise(function(resolve,reject) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    })
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));