const arr = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk")
console.log(arr)
// 
// zad 1
arr.forEach(item => {
    console.log(item)
})
// zad 2
const wiekszeOdJeden =
    arr.some(item => item > 1)
console.log(wiekszeOdJeden)
// zad 3
let indexJan
arr.forEach((item, index) => {
    if(item === "Jan") {
        indexJan = index
    }
})
console.log(indexJan)
// zad na 6
let num = []
let name = new Array()

arr.forEach(item => {
    if(typeof item === Number) {
        num.push(item)
    } else {
        name.push(item)
    }
})

const obj = {
    name: "Jan",
    age: 12
}
console.log(obj.name, obj.age)
const arrWithObj = [obj]
console.log(arrWithObj[0].name)