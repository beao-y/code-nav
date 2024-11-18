# this 指向
> 函数只有在调用时，才会有 `this`，每一个函数都有属于自己的 `this`，`this` 指向谁看他怎么调用的


## 默认绑定规则
```js
console.log( this === window ) // true

// 函数的独立调用this指向window
 function test() {
   console.log(this) // window
 }
test() // 等同于window.test()
```

## 隐式绑定
> 谁调用this就指向谁
```js
var obj = {
  a: 2,
  foo: function() {
    console.log(this) // obj调用的 this指向obj
    
    function test() {
      console.log(this) // 独立调用指向window
    }
    
    test() //函数独立调用
  }
}
obj.foo()

//闭包
var obj = {
  a: 2,
  foo: function() {
    console.log(this) // obj调用的 this指向obj
    
    function test() {
      console.log(this) // 独立调用指向window
    }
    
    return test
  }
}
obj.foo()() // 等同于 test() 是独立调用


var a = 0
function foo() {
  console.log(this) //this 指向window
}
function bar(fn){
  fn() // fn等同于foo函数，属于独立调用
}
var obj = {
  a : 2,
  foo: foo
}

bar(obj.foo)
```

## 显示绑定
```js
call, apply, bind
```
* 手写 `call`
```js
Function.prototype.mycall = function (target, ...args) {
  target = target || window
  const key = mySymbol(target) // symbol 防止重复的值
  target[key] = this
  const res = target[key](...args)
  delete target[key] //执行完借用的函数后，删除掉
  return res
}
```
* 手写 `symbol`
```js
function mySymbol(obj) {
  let num = new Date().getTime().toString(32).slice(0, 8)
  if (obj.hasOwnProperty(num)) {
    return mySymbol(obj)
  } else {
    return num
  }
}
```

## 箭头函数
* 箭头函数没有 `this` 指向，指向的是它的父函数，如果上层父函数还是箭头函数则继续向上寻找
* 所有绑定规则全部不适用
```js


var name = 'window'
var obj1 = {
  name: '1',
  fn1: function() {
    console.log(this.name)
  },
  fn2: () => {console.log(this.name)},
  fn3: function() {
    return function(){
      console.log(this.name)
    }
  },
  fn4: function(){
    return () => {console.log(this.name)}
  }
}
var obj2 = {
  name: '2'
}

obj.fn1() // 1
obj.fn1.call(obj2) // 2

obj.fn2() // f2是箭头函数指向上一层，window
obj.fn2.call(obj2) //箭头函数不适用其他所有this绑定规则，所以不改变，指向window

obj.fn3()() // 等同于函数自调用 window
obj.fn3().call(obj2) // 2
obj.fn3.call(obj2)() // 自调用 window

obj.fn4()() // 1
obj.fn4().call(obj2) // 1
obj.fn4.call(obj2)() // 2


function Foo() {  //Foo 执行
  fn = function() { //此处fn 没有用var 所以是改写了全局的fn
    console.log(1)
  }
  return this
}
Foo.fn = function() {
  console.log(2)
}
Foo.prototype.fn = function() {
  console.log(3)
}
var fn = function(){  // 表达式 覆盖全局的fn 输出的就是4
  console.log(4)
}
function fn(){ 　　// 函数声明，声明提升
  console.log(5)
}

Foo.fn() // 2
fn() // 4
Foo().fn() // 改写了全局的fn 结果是 1
fn() // 1

new Foo.fn(). // 2
new Foo().fn() // 3 实例化，指向原型上的fn
new new Foo().fn() // 3
```
