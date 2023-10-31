let chessBoard = [
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]], 
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["black", "rook"], ["none", "none"], ["none", "none"], ["none", "none"]], 
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]], 
    [["none", "none"], ["black", "rook"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["white", "rook"]], 
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]], 
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["white", "rook"], ["none", "none"], ["none", "none"], ["none", "none"]], 
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]], 
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]]
];

let stepNumber = 1;
let movesCapture = [];
let movesNoCapture = [];

function getMovesForRook(xcoord, ycoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    for (let i = xcoord + 1; i < 8; i++) {
        if (chessBoard[i][ycoord].includes('none')) {
            movesNoCapture.push([i, ycoord]);
        } else if (chessBoard[i][ycoord].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([i, ycoord]);
            break;
        }
    }
    for (let i = xcoord - 1; i >= 0; i--) {
        if (chessBoard[i][ycoord].includes('none')) {
            movesNoCapture.push([i, ycoord]);
        } else if (chessBoard[i][ycoord].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([i, ycoord]);
            break;
        }
    }

    for (let i = ycoord + 1; i < 8; i++) {
        if (chessBoard[xcoord][i].includes('none')) {
            movesNoCapture.push([xcoord, i]);
        } else if (chessBoard[xcoord][i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord, i]);
            break;
        }
    }

    for (let i = ycoord - 1; i >= 0; i--) {
        if (chessBoard[xcoord][i].includes('none')) {
            movesNoCapture.push([xcoord, i]);
        } else if (chessBoard[xcoord][i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord, i]);
            break;
        }
    }
    return movesNoCapture, movesCapture;
}

getMovesForRook(3, 4, stepNumber);
console.log(movesNoCapture);
console.log(movesCapture);