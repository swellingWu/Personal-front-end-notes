//= 解构赋值
let user = { name: "John", years: 30 };

// 等号左侧是你的代码
// ... = user
({name,years: age,isAdmin=false} = user);

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false



// = 最高薪资
//* 如果 salaries 是空的，函数应该返回 null。
//* 如果有多个收入最高的人，返回其中任意一个即可。
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for(let [name,salary] of Object.entries(salaries)) {
        if(maxSalary<salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}



