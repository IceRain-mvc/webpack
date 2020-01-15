 (function(modules) { // webpackBootstrap
 	// The module cache
	 //缓存
 	var installedModules = {};

 	// The require function
 	function __webpack_require__(moduleId) {
 		//()({key:value方法})自执行函数
 	  //1:./src/index.js 先判断缓存有没有
    //2: 模拟了 require方法  __webpack_require__
		//3: key: value 递归执行 __webpack_require__ ('引入的模块的key  ./src/a.js')


 		// Check if module is in cache

		//缓存里有没有
 		if(installedModules[moduleId]) {
 			//从缓存里直接取
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
		//创建一个缓存
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
		//递归
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}

 	// Load entry module and return exports
	 //结果
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
/************************************************************************/
 ({

 "./src/a.js":
 (function(module, exports) {
eval("console.log('aaa');\r\n\n\n//# sourceURL=webpack:///./src/a.js?");
 }),
 "./src/index.js":
 (function(module, exports, __webpack_require__) {
eval("__webpack_require__(/*! ./a.js */ \"./src/a.js\")\r\n\r\nconsole.log('1111');\r\n\n\n//# sourceURL=webpack:///./src/index.js?");
 })

 });

 // eval('')
