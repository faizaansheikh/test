// Write a function that takes an array as an argument  and return  a certain pattern of string . *
var x = [0,2,1,6,9,4,9,5,6,7]
const phoneNum = (x)=>{
   return x.join("")
}
document.write(phoneNum(x))
// -------xxxx-------


// Write a function that takes an array of objects as an argument  and removes the duplicates  objects  *

var Std = [{id:2, name :"haris"},
           {id:2, name :"ali"},
           {id:1, name :"kamran"},
           {id:3, name :"noshan"},
           {id:4, name :"anum"} ]
    
const results  = Std.reduce((finalArray,current)=>{
   let obj = finalArray.find((item)=>item.id === current.id)
   if(obj){
       return finalArray;
   }else{
       return finalArray.concat([current])
   }
},[])
console.log(results)
// -----xxxxx------


const result = new Set(Std.map((value)=>{
    return value.id,
          value.name;
}))
console.log(result)

// -----xxx------

// Write a function that removes all text that follows any of a set of comment markers passed in. *


var string = "SBS ,Clifton $ and Finosys Development Application ! development"
var remove = ["$","!"];
var newString = '';
for(const char of string){
    if(remove.indexOf(char) === -1){
        newString += char;
    }
}
console.log(newString)
