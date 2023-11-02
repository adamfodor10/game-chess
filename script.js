let chessBoard = [
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

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

function getMovesForPawn (xcoord, ycoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    if (currentColor === 'white') {
        if (ycoord + 1 <= 7) {
            if (chessBoard[xcoord][ycoord + 1].includes('none')) {
                movesNoCapture.push([(xcoord), (ycoord + 1)]);
            }
        }
        if ((ycoord + 2 === 3) && (chessBoard[xcoord][ycoord + 1].includes('none'))) {
            if (chessBoard[xcoord][ycoord + 2].includes('none')) {
                movesNoCapture.push([(xcoord), (ycoord + 2)]);
            }
        }

        if (((xcoord + 1) <= 7) && ((ycoord + 1) <= 7)
            && (chessBoard[xcoord + 1][ycoord + 1].includes('black'))) {
            movesCapture.push([(xcoord + 1), (ycoord + 1)]);
        }
        if (((xcoord - 1) >= 0) && ((ycoord + 1) <= 7)
            && (chessBoard[xcoord - 1][ycoord + 1].includes('black'))) {
            movesCapture.push([(xcoord - 1), (ycoord + 1)]);
        }
    }

    if (currentColor === 'black') {
        if (ycoord - 1 >= 0) {
            if (chessBoard[xcoord][ycoord -1].includes('none')) {
                movesNoCapture.push([(xcoord), (ycoord - 1)]);
            }
        }
        if ((ycoord - 2 === 4) && (chessBoard[xcoord][ycoord -1].includes('none'))) {
            if (chessBoard[xcoord][ycoord - 2].includes('none')) {
                movesNoCapture.push([(xcoord), (ycoord - 2)]);
            }
        }

        if (((xcoord + 1) <= 7) && ((ycoord - 1) >= 0)
            && (chessBoard[xcoord + 1][ycoord - 1].includes('white'))) {
            movesCapture.push([(xcoord + 1), (ycoord - 1)]);
        }
        if (((xcoord - 1) >= 0) && ((ycoord - 1) >= 0)
            && (chessBoard[xcoord - 1][ycoord - 1].includes('white'))) {
            movesCapture.push([(xcoord - 1), (ycoord - 1)]);
        }
    }

    return movesNoCapture, movesCapture;
}