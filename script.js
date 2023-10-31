chessBoard = [
    [1, 1, "none", "none"], [2, 1, "none", "none"], [3, 1, "none", "none"], [4, 1, "none", "none"], [5, 1, "none", "none"], [6, 1, "none", "none"], [7, 1, "none", "none"], [8, 1, "none", "none"], 
    [1, 2, "none", "none"], [2, 2, "none", "none"], [3, 2, "none", "none"], [4, 2, "none", "none"], [5, 2, "none", "none"], [6, 2, "none", "none"], [7, 2, "none", "none"], [8, 2, "none", "none"],
    [1, 3, "none", "none"], [2, 3, "none", "none"], [3, 3, "none", "none"], [4, 3, "none", "none"], [5, 3, "none", "none"], [6, 3, "none", "none"], [7, 3, "none", "none"], [8, 3, "none", "none"],
    [1, 4, "none", "none"], [2, 4, "none", "none"], [3, 4, "none", "none"], [4, 4, "none", "none"], [5, 4, "none", "none"], [6, 4, "none", "none"], [7, 4, "none", "none"], [8, 4, "none", "none"],
    [1, 5, "none", "none"], [2, 5, "none", "none"], [3, 5, "none", "none"], [4, 5, "none", "none"], [5, 5, "none", "none"], [6, 5, "none", "none"], [7, 5, "none", "none"], [8, 5, "none", "none"],
    [1, 6, "none", "none"], [2, 6, "none", "none"], [3, 6, "none", "none"], [4, 6, "none", "none"], [5, 6, "none", "none"], [6, 6, "none", "none"], [7, 6, "none", "none"], [8, 6, "none", "none"],
    [1, 7, "none", "none"], [2, 7, "none", "none"], [3, 7, "none", "none"], [4, 7, "none", "none"], [5, 7, "none", "none"], [6, 7, "none", "none"], [7, 7, "none", "none"], [8, 7, "none", "none"],
    [1, 8, "none", "none"], [2, 8, "none", "none"], [3, 8, "none", "none"], [4, 8, "none", "none"], [5, 8, "none", "none"], [6, 8, "none", "none"], [7, 8, "none", "none"], [8, 8, "none", "none"]
];

let allMoves;
let legalMoves;

function getAllMovesForRook(x, y) {
    let allMoves = [];
    for (let i = 1; i <= 8; i++) {
        allMoves.push([i, y]);
    }
    for (let i = 1; i <= 8; i++) {
        allMoves.push([x, i]);
    }
    for (let i = 1; i <= 2; i++) {
        let index = allMoves.findIndex(a=>{return JSON.stringify(a)===JSON.stringify([x, y])})
        allMoves.splice(index, 1);
    }
    return allMoves;
}
console.log(getAllMovesForRook(1, 1));
console.log(JSON.stringify(getAllMovesForRook(1, 1)));

function getLegalMovesForRook(x, y, color) {

}