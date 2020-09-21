
// // Exercise 6
// // link: https://kernel.elevation.ac/cohorts/53/lessons/105/apply/activity/14
// const ages = [6,2,1,3,4,5,1]
// const findDuplicates = function (ages) {
// 	let agesObject = {}
// 	for (let i in ages){
//         agesObject[ages[i]]=ages[i]
//         if(ages[i]===agesObject[ages[i]] && i!==ages[ages.length-1]){
// 			return("there are duplicates")
// 		}
//     }
//     return("there are no duplicates")
// }

// console.log(findDuplicates(ages))

// //Exercise 7

// // _id     |name   |age    |salary
// // --------------------------------
// // ax01    |Ray    |28     |1300
// // qs84    |Lucius |31     |840
// // bg33    |Taylor |18     |2700

// const employees = {
//     "ax01": {name:"Ray",age:28,salary:1300},
//     "qs84":{name:"Lucius" , age:31 , salary:840 },
//     "bg33":{name:"Taylor" , age:18 , salary:2700 }
// }

// const findEmployee = (id)=>{
//     console.log(`${employees[id].name}'s salary is ${employees[id].salary}`)
// }

// findEmployee("ax01")


//Exercise 8:
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
// determine what the index of 2630 is - you should find it to be 86:
const binarySearch = function (array, number) {
    let lowLimit = 0
    let highLimit = array.length-1
    let pointer = 0
        while(highLimit-lowLimit>1){
        if (array[pointer] == number) { return (`${number}'s index is ${pointer}`) }
        else if (array[pointer] < number) { 
            lowLimit = pointer
            pointer = Math.floor(pointer+(highLimit - lowLimit)/2)
         }
        else { 
            highLimit = pointer
            pointer = Math.floor(pointer-(highLimit - lowLimit)/2)
        }
    }
    return(`The number ${number} does not exist in the given array`)
}

console.log(binarySearch(numbers,147))