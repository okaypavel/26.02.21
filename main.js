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
const tabZLiczbami = new Array(arr[0], arr[1], arr[2], arr[3], arr[5])
console.log(tabZLiczbami)
const tabZImionami = new Array(arr[4], arr[6])
console.log(tabZImionami)