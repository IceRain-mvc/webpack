require('./a.js');
require("./css/index.css");
require("./sass/index.scss");
console.log('1111');

const aa = () => {
  console.log('aaaa');
};

let aaa = '11';
aa();
//装饰器 es7语法
@log
class A {
  name = '小三';
}

@log
class B {
  name = '小四';
}


// @log()
// function fnIndex() {
//
// }

function log(target) {
  console.log(target);
  target.prototype.print = function () {
    console.log(this.name);
  }
}

new A().print();
new B().print();

// fnIndex.print();


// console.log(new A().name);



// console.log(['aaaa', 'a'].includes('a'));
