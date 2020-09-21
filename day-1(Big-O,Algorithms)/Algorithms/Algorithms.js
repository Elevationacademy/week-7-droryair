// //Lesson

// // let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412
// // let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123
// // let numbers = [23, 23, 23, 23, 23] //should find 23

// let smallestNumber  = numbers[0]//our 'number stored in memory'
// for(let num of numbers){ //going over each number
//   if(num < smallestNumber){
//     smallestNumber = num //forget the number stored in memory and store num instead
//   }
// }
// console.log("Smallest number is " + smallestNumber)



// //Exercises
// // link:https://kernel.elevation.ac/cohorts/53/lessons/114/apply/activity/3

// //Exercise 1
// const printStars = function(num){
//     for(let i=1;i<=num;i++){
//         console.log('*'.repeat(i))
//     }
// }
// printStars(5)


// //Exercise 2
// const printBackwardsStars = function(num){
//     for(let i=num;i>0;i--){
//         console.log('*'.repeat(i))
//     }
// }
// printBackwardsStars(5)

// //Exercise 3
// const printStarSeries = function(num,count){
//     while (count > 0) {
//         printStars(num)
//         printBackwardsStars(num)
//         count--
//     }
// }
// printStarSeries(5,3)


// //Exercise 4
// const reverse = function(str){
//     let reversed=""
//     for (let i = str.length-1;i>=0;i--) {
//         reversed += str[i]
//     }
//     console.log(reversed)
// }
  
//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"



// //Exercise 5
// const isPalindrom = function(str){
//     str = str.replace(" ","")
//     str = str.toLowerCase()
//     let leftP = 0
//     let rightP = str.length-1
//     while(rightP!=leftP){
//         if(str[leftP]!==str[rightP]){
//             return false
//         }
//         leftP++
//         rightP--
//     }
//     return true
// }
// console.log(isPalindrom("Taco Cat"))// sould return true


// //Exercise 6
// const alphabet = "abcdefghijklmnopqrstuvwxyz"
// const encrypt = function(str){
//     for(letter of str){
//         const letterIndex = alphabet.indexOf(letter)
//         str = str.replace(letter,alphabet[letterIndex+1])
//     }
//     return(str)
// }
// console.log(encrypt("cat")) //should return  dbu


// //Exercise 7
// const decrypt = function(str){
//     for(letter of str){
//         const letterIndex = alphabet.indexOf(letter)
//         str = str.replace(letter,alphabet[letterIndex-1])
//     }
//     return str
// }

// console.log(decrypt("dbu"))//should return cat
// // WHAT IF IT WAT 'CAT' ????




//Exercise 8
// *** WARNING! VERY UGLY CODE AHEAD! ***
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
let jumbledArr = []

const addFromArr1 = function(arr1){
    let point1 = Math.floor(Math.random() * arr1.length)
    jumbledArr.push(arr1[point1])
    arr1.splice(point1, 1)
}

const addFromArr2 = function(arr2){
    let point2 = Math.floor(Math.random() * arr2.length)
    jumbledArr.push(arr2[point2])
    arr2.splice(point2, 1)
}

const jumble = function (arr1, arr2) {
    const arrsLen = arr1.length + arr2.length
    for (let i = 0; i < arrsLen; i++) {
        if (arr1.length > 0 && arr2.length > 0) {
            addFromArr1(arr1)
            addFromArr2(arr2)
        }
        else if(arr1.length>0){
            addFromArr1(arr1)
        }else if(arr2.length>0){
            addFromArr2(arr2)
        }else{

            return jumbledArr
        }
    }
}
    
    console.log(jumble(colors, foods))
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]
//VERY VERY VERY UGLY CODE :(((