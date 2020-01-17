// require('expose-loader?$!jquery');

//内置loader module rules
//外置loader 在哪用 在哪引

require('./a.js');
require("./css/index.css");
require("./sass/index.scss");
console.log('1111');

import $ from 'jquery';



// console.log(window.$,'jquery');


//操作真实dom  $
$('.box h3').html("你好").css({'background': 'blue'}).animate({'height': '200px'}, 5000);


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
