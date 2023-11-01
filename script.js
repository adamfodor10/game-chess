let chessBoard = [
    [["none", "none"], ["black", "non"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["black", "non"], ["none", "none"], ["white", "non"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["black", "non"], ["none", "none"], ["none", "none"], ["white", "non"], ["none", "none"], ["none", "none"], ["white", "non"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["black", "non"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["white", "non"], ["none", "none"], ["white", "non"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]]
];

let stepNumber = 1;
let movesNoCapture = [];
let movesCapture = [];

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

function getMovesForBishop(xcoord, ycoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    for (let i = 1; i < 8; i++) {
        if (((xcoord + i) > 7) || ((ycoord + i) > 7)) break;
        if (chessBoard[xcoord + i][ycoord + i].includes('none')) {
            movesNoCapture.push([xcoord + i, ycoord + i]);
        } else if (chessBoard[xcoord + i][ycoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord + i, ycoord + i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xcoord - i) < 0) || ((ycoord - i) < 0)) break;
        if (chessBoard[xcoord - i][ycoord - i].includes('none')) {
            movesNoCapture.push([xcoord - i, ycoord - i]);
        } else if (chessBoard[xcoord - i][ycoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord - i, ycoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xcoord + i) > 7) || ((ycoord - i) < 0)) break;
        if (chessBoard[xcoord + i][ycoord - i].includes('none')) {
            movesNoCapture.push([xcoord + i, ycoord - i]);
        } else if (chessBoard[xcoord + i][ycoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord + i, ycoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xcoord - i) < 0) || ((ycoord + i) > 8)) break;
        if (chessBoard[xcoord - i][ycoord + i].includes('none')) {
            movesNoCapture.push([xcoord - i, ycoord + i]);
        } else if (chessBoard[xcoord - i][ycoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord - i, ycoord + i]);
            break;
        }
    }

    return movesNoCapture, movesCapture;
}

function getMovesForQueen(xcoord, ycoord, step) {
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

    for (let i = 1; i < 8; i++) {
        if (((xcoord + i) > 7) || ((ycoord + i) > 7)) break;
        if (chessBoard[xcoord + i][ycoord + i].includes('none')) {
            movesNoCapture.push([xcoord + i, ycoord + i]);
        } else if (chessBoard[xcoord + i][ycoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord + i, ycoord + i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xcoord - i) < 0) || ((ycoord - i) < 0)) break;
        if (chessBoard[xcoord - i][ycoord - i].includes('none')) {
            movesNoCapture.push([xcoord - i, ycoord - i]);
        } else if (chessBoard[xcoord - i][ycoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord - i, ycoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xcoord + i) > 7) || ((ycoord - i) < 0)) break;
        if (chessBoard[xcoord + i][ycoord - i].includes('none')) {
            movesNoCapture.push([xcoord + i, ycoord - i]);
        } else if (chessBoard[xcoord + i][ycoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord + i, ycoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xcoord - i) < 0) || ((ycoord + i) > 8)) break;
        if (chessBoard[xcoord - i][ycoord + i].includes('none')) {
            movesNoCapture.push([xcoord - i, ycoord + i]);
        } else if (chessBoard[xcoord - i][ycoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xcoord - i, ycoord + i]);
            break;
        }
    }

    return movesNoCapture, movesCapture;
}

function getMovesForKing(xcoord, ycoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    let allMovesForKing = [
        [xcoord + 1, ycoord],
        [xcoord - 1, ycoord],
        [xcoord, ycoord + 1],
        [xcoord, ycoord - 1],
        [xcoord + 1, ycoord + 1],
        [xcoord - 1, ycoord - 1],
        [xcoord + 1, ycoord - 1],
        [xcoord - 1, ycoord + 1]
    ];

    for (let i = 0; i < 8; i++) {
        if ((allMovesForKing[i][0] > 7)
        || (allMovesForKing[i][0] < 0)
        || (allMovesForKing[i][1] > 7)
        || (allMovesForKing[i][1] < 0)) {
            continue;
        } else {
            if (chessBoard[allMovesForKing[i][0]][allMovesForKing[i][1]].includes('none')) {
                movesNoCapture.push([(allMovesForKing[i][0]), (allMovesForKing[i][1])]);
            } else if (chessBoard[allMovesForKing[i][0]][allMovesForKing[i][1]].includes(currentColor)) {
                continue;
            } else {
                movesCapture.push([(allMovesForKing[i][0]), (allMovesForKing[i][1])]);
            }
        }
    }

    return movesNoCapture, movesCapture;
}

function getMovesForKnight(xcoord, ycoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    let allMovesForKnight = [
        [xcoord + 2, ycoord + 1],
        [xcoord + 2, ycoord - 1],
        [xcoord - 2, ycoord + 1],
        [xcoord - 2, ycoord - 1],

        [xcoord + 1, ycoord + 2],
        [xcoord - 1, ycoord + 2],
        [xcoord + 1, ycoord - 2],
        [xcoord - 1, ycoord - 2]
    ];

    for (let i = 0; i < 8; i++) {
        if ((allMovesForKnight[i][0] > 7)
        || (allMovesForKnight[i][0] < 0)
        || (allMovesForKnight[i][1] > 7)
        || (allMovesForKnight[i][1] < 0)) {
            continue;
        } else {
            if (chessBoard[allMovesForKnight[i][0]][allMovesForKnight[i][1]].includes('none')) {
                movesNoCapture.push([(allMovesForKnight[i][0]), (allMovesForKnight[i][1])]);
            } else if (chessBoard[allMovesForKnight[i][0]][allMovesForKnight[i][1]].includes(currentColor)) {
                continue;
            } else {
                movesCapture.push([(allMovesForKnight[i][0]), (allMovesForKnight[i][1])]);
            }
        }
    }

    return movesNoCapture, movesCapture;
}

// getMovesForRook(3, 4, stepNumber);
// getMovesForBishop(3, 4, stepNumber);
// getMovesForQueen(3, 4, stepNumber);
// getMovesForKing(3, 4, stepNumber);
// getMovesForKnight(3, 4, stepNumber);
console.log(movesNoCapture);
console.log(movesCapture);