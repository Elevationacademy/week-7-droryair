function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}
let matrix = generateMatrix(3, 4)
console.log(matrix)
// console.log(matrix[1][2]) //prints 7

// //spot check 2:
// //Write a (double) loop that prints out all the numbers of matrix
// const printMatrixContent = function (matrix) {
//     for (let r = 0; r < matrix.length ; r++) {
//         for (let c = 0; c < matrix[r].length; c++) {
//             console.log(matrix[r][c])
//         }
//     }
// }

// printMatrixContent(matrix)  


// // spot check 3:
// //Write a function called get that receives two parameters,
// // rowNum and colNum, and returns the item at that position in the matrix.
// //In other words, get(1, 2) should return 7

// const get = function (rowNum, colNum) {

//     console.log(matrix[rowNum][colNum])
// }

// get(1, 2)

// // spot check 4:
// // Write a print function that prints the below:
// // 1       2       3       4
// // 5       6       7       8
// // 9       10      11      12

// const print = function (matrix) {
//     for(let r =0; r<matrix.length;r++){
//         let str = String(matrix[r])
//         str = str.replace(/,/g,'\t')
//         console.log(str)
//     }
// }

// print(matrix)


//spot check 5:
// Write a function called printRow(rowNum) that prints all the element of row number rowNum
// When you call printRow(1), it should print 5, 6, 7, 8.

const printRow  = function(rowNum){
    for(let i=0;i<matrix[rowNum].length;i++){
        console.log(matrix[rowNum][i])
    }
}

printRow(1)


//spot check 6:
//Write the alter function,  alter((row number), (column number),(value))
// such that alter(1,3,174) would change the 8 to 174

const alter = function(rowNum,colNum,value){
    matrix[rowNum][colNum] = value
    console.log(matrix)
}

alter(1, 3, 174)

