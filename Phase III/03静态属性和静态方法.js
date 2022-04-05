//- 静态提升将值赋予函数而不是赋予给 prototype 原型
class Articel {
    constructor(title,date) {
        this.title = title;
        this.date = date;
    }

    static compare(a,b) {
        return a.date-b.date;
    }

    static createTodays() {
        // 记住 this = Article
        return new this("Today's digest", new Date());
    }
}

// let articles = [
//     new Articel("Html",new Date(2019,1,1)),
//     new Articel("CSS", new Date(2019, 0, 1)),
//     new Articel("JavaScript", new Date(2019, 11, 1)),
// ];
// articles.sort(Articel.compare);//=> sort 由小到大进行排序
// alert(articles[0].title);

let article = Article.createTodays();
alert( article.title ); // Today's digest