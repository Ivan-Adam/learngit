/**
 * 这是对+号表示字符串拼接还是运算所做的测试
 */

// let a='Hello'
// let b='World'
// let c
// c=a+' '+b
// console.log(c)


/**
 * regexp--正则表达式
 */
// search方法
//  let str="visit Running"
//  let n=str.search("v")
//  console.log(n)          


//  let str="visit Running 00046874843154654"
//  let n=str.replace(" ","")
//  console.log(n)    
//  console.log(str.replace(/[0-9]/g,""))     
 

 let re=new RegExp("^[a-zA-Z0-9_-]{6,12}$")
 let name1="aA0-_1"
 let name="Mike0101---"
 let name2="aaa"
 console.log(re.exec(name))
 console.log(re.exec(name1))
 console.log(re.test(name))
 console.log(re.test(name2))

