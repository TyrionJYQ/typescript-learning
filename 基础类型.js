// 基础类型
var l = console.log;
// 布尔值
var isDone = true;
isDone = false;
// 数字
// 十进制 十六进制 二进制 八进制
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
// 单引号 双引号 模板字符串
var lastName = 'Tom', firstName = 'Bob';
var fullName = lastName + " " + firstName;
// 数组 
// 元素类型相同 
var nums = [1, 2, 3];
var classes = ['1', '2', '3'];
// 元组
// 数组元素类型可以不相同
var x = [1, '2'];
x = [3, 'hello ts'];
// 枚举
// 枚举的元素如果没有默认值，默认值为索引
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
var red = Color.Red;
l(red);
var Age;
(function (Age) {
    Age[Age["Adault"] = 0] = "Adault";
    Age[Age["Old"] = 1] = "Old";
    Age[Age["Young"] = 2] = "Young";
})(Age || (Age = {}));
var ageName = Age[2];
l(ageName);
l(Age[0]);
// Any
var unSure = 1;
unSure = '1';
unSure = true;
l(unSure);
var y = [1, 2, ' 33'];
var z = [1, 2, true];
// Void
// 没有任何类型
// 赋值为undefined或者null
function t() {
    l('no value');
    return undefined;
}
// Null Undefined
var u = undefined;
var n = null;
// Never
// 永不存在的类型
// Object
function create(o) { }
;
create({ prop: 0 }); // OK
create(null); // OK
// 类型断言
// 尖括号
// as
var someValue = "this is a string";
var s1 = someValue.length;
l(s1);
var s2 = someValue.length;
l(s2);
// ts实现了let
