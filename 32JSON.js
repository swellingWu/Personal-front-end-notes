//* 将对象转化为 json 容纳和再转化回来
    // let user = {
    //     name: "JOhn Smith",
    //     age: 35,
    // }
    // //==>
    // let user2 = Json.parse(Json.stringify(user));


//* 排除反向引用
//= 编写 replacer 函数，移除引用 meetup 的属性，并将其他所有属性序列化：
let room = {
    number: 23,
};
let meetup = {
    title: "Conference",
    participants: [{name: "John"},{name: "Alice"}],
    place: room,
};

room.occupiedBy = meetup;

//= alert(JSON.stringify(meetup,['title','participants','place','name','number']));
alert(JSON.stringify(meetup,function replacer(key,value) {
    alert(`${key}: ${value}`);
    return(key == "occupiedBy") ? undefined: value;
}));

// alert(JSON.stringify(meetup, function replacer(key,value){
//     return (key !="" && value == meetup) ? undefined: value;
// }));