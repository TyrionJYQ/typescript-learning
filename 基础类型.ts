// 基础类型
const l = console.log
// 布尔值
let isDone: boolean = true
isDone = false

// 数字
// 十进制 十六进制 二进制 八进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
// 单引号 双引号 模板字符串

let lastName: string = 'Tom',
  firstName: string = 'Bob'
let fullName: string = `${lastName} ${firstName}`

// 数组 
// 元素类型相同 

let nums: number[] = [1, 2, 3]

let classes: Array<string> = ['1', '2', '3']


// 元组
// 数组元素类型可以不相同
let x: [number, string] = [1, '2']
x = [3, 'hello ts']

// 枚举
// 枚举的元素如果没有默认值，默认值为索引
enum Color { Red = "red", Blue = "blue", Green = "green" }
let red: Color = Color.Red
l(red)


enum Age { Adault, Old, Young }
let ageName: string = Age[2]
l(ageName)
l(Age[0])

// Any

let unSure: any = 1
unSure = '1'
unSure = true
l(unSure)


let y: any[] = [1, 2, ' 33']

let z: Array<any> = [1, 2, true]


// Void
// 没有任何类型
// 赋值为undefined或者null
function t():void {
  l('no value')
  return undefined 
}

// Null Undefined
let u:undefined = undefined
let n: null = null 


// Never
// 永不存在的类型



// Object

function create(o: object | null): void {};

create({ prop: 0 }); // OK
create(null); // OK


// 类型断言
// 尖括号
// as
let someValue: any = "this is a string";
let s1 = (<string>someValue).length
l(s1)

let s2 = (someValue as string).length
l(s2)

// ts实现了let