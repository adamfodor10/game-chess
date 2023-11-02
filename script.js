let chessBoard = [
    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["white", "king"], ["black", "king"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["white", "queen"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]],

    [["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"], ["none", "none"]]
];

let stepNumber = 1;
let movesNoCapture = [];
let movesCapture = [];

function getMovesForRook(xCoord, yCoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    for (let i = xCoord + 1; i < 8; i++) {
        if (chessBoard[i][yCoord].includes('none')) {
            movesNoCapture.push([i, yCoord]);
        } else if (chessBoard[i][yCoord].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([i, yCoord]);
            break;
        }
    }

    for (let i = xCoord - 1; i >= 0; i--) {
        if (chessBoard[i][yCoord].includes('none')) {
            movesNoCapture.push([i, yCoord]);
        } else if (chessBoard[i][yCoord].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([i, yCoord]);
            break;
        }
    }

    for (let i = yCoord + 1; i < 8; i++) {
        if (chessBoard[xCoord][i].includes('none')) {
            movesNoCapture.push([xCoord, i]);
        } else if (chessBoard[xCoord][i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord, i]);
            break;
        }
    }

    for (let i = yCoord - 1; i >= 0; i--) {
        if (chessBoard[xCoord][i].includes('none')) {
            movesNoCapture.push([xCoord, i]);
        } else if (chessBoard[xCoord][i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord, i]);
            break;
        }
    }

    return movesNoCapture, movesCapture;
}

function getMovesForBishop(xCoord, yCoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord + i][yCoord + i].includes('none')) {
            movesNoCapture.push([xCoord + i, yCoord + i]);
        } else if (chessBoard[xCoord + i][yCoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord + i, yCoord + i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord - i][yCoord - i].includes('none')) {
            movesNoCapture.push([xCoord - i, yCoord - i]);
        } else if (chessBoard[xCoord - i][yCoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord - i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord + i][yCoord - i].includes('none')) {
            movesNoCapture.push([xCoord + i, yCoord - i]);
        } else if (chessBoard[xCoord + i][yCoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord + i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord + i) > 8)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) {
            movesNoCapture.push([xCoord - i, yCoord + i]);
        } else if (chessBoard[xCoord - i][yCoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord - i, yCoord + i]);
            break;
        }
    }

    return movesNoCapture, movesCapture;
}

function getMovesForQueen(xCoord, yCoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    for (let i = xCoord + 1; i < 8; i++) {
        if (chessBoard[i][yCoord].includes('none')) {
            movesNoCapture.push([i, yCoord]);
        } else if (chessBoard[i][yCoord].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([i, yCoord]);
            break;
        }
    }

    for (let i = xCoord - 1; i >= 0; i--) {
        if (chessBoard[i][yCoord].includes('none')) {
            movesNoCapture.push([i, yCoord]);
        } else if (chessBoard[i][yCoord].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([i, yCoord]);
            break;
        }
    }

    for (let i = yCoord + 1; i < 8; i++) {
        if (chessBoard[xCoord][i].includes('none')) {
            movesNoCapture.push([xCoord, i]);
        } else if (chessBoard[xCoord][i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord, i]);
            break;
        }
    }

    for (let i = yCoord - 1; i >= 0; i--) {
        if (chessBoard[xCoord][i].includes('none')) {
            movesNoCapture.push([xCoord, i]);
        } else if (chessBoard[xCoord][i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord, i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord + i][yCoord + i].includes('none')) {
            movesNoCapture.push([xCoord + i, yCoord + i]);
        } else if (chessBoard[xCoord + i][yCoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord + i, yCoord + i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord - i][yCoord - i].includes('none')) {
            movesNoCapture.push([xCoord - i, yCoord - i]);
        } else if (chessBoard[xCoord - i][yCoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord - i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord + i][yCoord - i].includes('none')) {
            movesNoCapture.push([xCoord + i, yCoord - i]);
        } else if (chessBoard[xCoord + i][yCoord - i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord + i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord + i) > 8)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) {
            movesNoCapture.push([xCoord - i, yCoord + i]);
        } else if (chessBoard[xCoord - i][yCoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord - i, yCoord + i]);
            break;
        }
    }

    return movesNoCapture, movesCapture;
}

function getMovesForKing(xCoord, yCoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    let allMovesForKing = [
        [xCoord + 1, yCoord],
        [xCoord - 1, yCoord],
        [xCoord, yCoord + 1],
        [xCoord, yCoord - 1],
        [xCoord + 1, yCoord + 1],
        [xCoord - 1, yCoord - 1],
        [xCoord + 1, yCoord - 1],
        [xCoord - 1, yCoord + 1]
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

function getMovesForKnight(xCoord, yCoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    let allMovesForKnight = [
        [xCoord + 2, yCoord + 1],
        [xCoord + 2, yCoord - 1],
        [xCoord - 2, yCoord + 1],
        [xCoord - 2, yCoord - 1],

        [xCoord + 1, yCoord + 2],
        [xCoord - 1, yCoord + 2],
        [xCoord + 1, yCoord - 2],
        [xCoord - 1, yCoord - 2]
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

function getMovesForPawn (xCoord, yCoord, step) {
    movesNoCapture = [];
    movesCapture = [];
    let currentColor;
    if (step % 2 === 1) currentColor = 'white';
    else currentColor = 'black';

    if (currentColor === 'white') {
        if (yCoord + 1 <= 7) {
            if (chessBoard[xCoord][yCoord + 1].includes('none')) {
                movesNoCapture.push([(xCoord), (yCoord + 1)]);
            }
        }
        if ((yCoord + 2 === 3) && (chessBoard[xCoord][yCoord + 1].includes('none'))) {
            if (chessBoard[xCoord][yCoord + 2].includes('none')) {
                movesNoCapture.push([(xCoord), (yCoord + 2)]);
            }
        }

        if (((xCoord + 1) <= 7) && ((yCoord + 1) <= 7)
            && (chessBoard[xCoord + 1][yCoord + 1].includes('black'))) {
            movesCapture.push([(xCoord + 1), (yCoord + 1)]);
        }
        if (((xCoord - 1) >= 0) && ((yCoord + 1) <= 7)
            && (chessBoard[xCoord - 1][yCoord + 1].includes('black'))) {
            movesCapture.push([(xCoord - 1), (yCoord + 1)]);
        }
    }

    if (currentColor === 'black') {
        if (yCoord - 1 >= 0) {
            if (chessBoard[xCoord][yCoord -1].includes('none')) {
                movesNoCapture.push([(xCoord), (yCoord - 1)]);
            }
        }
        if ((yCoord - 2 === 4) && (chessBoard[xCoord][yCoord -1].includes('none'))) {
            if (chessBoard[xCoord][yCoord - 2].includes('none')) {
                movesNoCapture.push([(xCoord), (yCoord - 2)]);
            }
        }

        if (((xCoord + 1) <= 7) && ((yCoord - 1) >= 0)
            && (chessBoard[xCoord + 1][yCoord - 1].includes('white'))) {
            movesCapture.push([(xCoord + 1), (yCoord - 1)]);
        }
        if (((xCoord - 1) >= 0) && ((yCoord - 1) >= 0)
            && (chessBoard[xCoord - 1][yCoord - 1].includes('white'))) {
            movesCapture.push([(xCoord - 1), (yCoord - 1)]);
        }
    }

    return movesNoCapture, movesCapture;
}

const square = document.querySelectorAll('.square');

square.forEach((individualSquare) => {
    individualSquare.addEventListener('click', function (e) {
        let clickOnCoords = this.classList[0].split('');
        clickOnCoords.shift();
        clickOnCoords.shift();
        clickOnCoords[0] = Number(clickOnCoords[0]);
        clickOnCoords[1] = Number(clickOnCoords[1]);
        console.log(clickOnCoords);

        let currentPiece = [];
        currentPiece.push(chessBoard[(clickOnCoords[0])][(clickOnCoords[1])][0]);
        currentPiece.push(chessBoard[(clickOnCoords[0])][(clickOnCoords[1])][1]);
        console.log(currentPiece);

        switch(currentPiece[1]) {
            case 'king':
            getMovesForKing(clickOnCoords[0], clickOnCoords[1], stepNumber);
            break;

            case 'queen':
            getMovesForQueen(clickOnCoords[0], clickOnCoords[1], stepNumber);
            break;

            case 'bishop':
            getMovesForBishop(clickOnCoords[0], clickOnCoords[1], stepNumber);
            break;

            case 'knight':
            getMovesForKnight(clickOnCoords[0], clickOnCoords[1], stepNumber);
            break;
        
            case 'rook':
            getMovesForRook(clickOnCoords[0], clickOnCoords[1], stepNumber);
            break;
        
            case 'pawn':
            getMovesForPawn(clickOnCoords[0], clickOnCoords[1], stepNumber);
            break;
            default:
        }
        console.log(movesNoCapture);
        console.log(movesCapture);

        square.forEach((currentSquare) => {
            let currentSquareCoords = currentSquare.classList[0].split('');
            currentSquareCoords.shift();
            currentSquareCoords.shift();
            currentSquareCoords[0] = Number(currentSquareCoords[0]);
            currentSquareCoords[1] = Number(currentSquareCoords[1]);

            for (let i = 0; i < movesNoCapture.length; i++) {
                if ((Number(currentSquareCoords[0]) === Number(movesNoCapture[i][0]))
                && (Number(currentSquareCoords[1]) === Number(movesNoCapture[i][1]))) {
                    console.log(currentSquareCoords);
                    if (currentSquare.classList.contains('white-square')) {
                        currentSquare.classList.toggle('move-on-white-square');
                    };
                    if (currentSquare.classList.contains('black-square')) {
                        currentSquare.classList.toggle('move-on-black-square');
                    }
            }
            }

            for (let i = 0; i < movesCapture.length; i++) {
                if ((Number(currentSquareCoords[0]) === Number(movesCapture[i][0]))
                && (Number(currentSquareCoords[1]) === Number(movesCapture[i][1]))) {
                    console.log(currentSquareCoords);
                    if (currentSquare.classList.contains('white-square')) {
                        currentSquare.classList.toggle('capture-on-white-square');
                    };
                    if (currentSquare.classList.contains('black-square')) {
                        currentSquare.classList.toggle('capture-on-black-square');
                    }
            }
            }
        });
    })
});