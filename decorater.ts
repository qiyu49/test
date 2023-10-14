// 装饰器

function Greeter (value:any, context:ClassMethodDecoratorContext) {
    value.prototype.greet = function(){
        console.log('你好')
    }
}


@Greeter
class User{
    name = "green";
    constructor(name: string){
        this.name = name
    }
}

let u = new User('wang')
u.greet()