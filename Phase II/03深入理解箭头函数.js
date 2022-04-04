//- 当时用箭头函数时，调用的 this 实际上三从外部访问的 this
let group = {
    title: "Our Group",
    student: ["John","Pate","Alice"],

    showList() {
        this.student.forEach(student)(
            // student => alert(this.title + ": "+student)
            //= 但使用正常函数时
            alert(this.title + ": "+student)//' TypeError: Cannot read properties of undefined (reading 'title')
        )
    }
};
group.showList();