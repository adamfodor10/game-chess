let chessBoard = [
    [['white', 'rook'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'rook']],

    [['white', 'knight'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'knight']],

    [['white', 'bishop'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'bishop']],

    [['white', 'queen'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'queen']],

    [['white', 'king'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'king']],

    [['white', 'bishop'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'bishop']],

    [['white', 'knight'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'knight']],

    [['white', 'rook'], ['white', 'pawn'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['none', 'none'], ['black', 'pawn'], ['black', 'rook']]
];

function getMovesForRook(xCoord, yCoord) {
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
}

function getMovesForBishop(xCoord, yCoord) {
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
        if (((xCoord - i) < 0) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) {
            movesNoCapture.push([xCoord - i, yCoord + i]);
        } else if (chessBoard[xCoord - i][yCoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord - i, yCoord + i]);
            break;
        }
    }
}

function getMovesForQueen(xCoord, yCoord) {
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
        if (((xCoord - i) < 0) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) {
            movesNoCapture.push([xCoord - i, yCoord + i]);
        } else if (chessBoard[xCoord - i][yCoord + i].includes(currentColor)) {
            break;
        } else {
            movesCapture.push([xCoord - i, yCoord + i]);
            break;
        }
    }
}

function getMovesForKing(xCoord, yCoord) {
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
}

function getMovesForKnight(xCoord, yCoord) {
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
}

function getMovesForPawn (xCoord, yCoord) {
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
}

let stepNumber = 1;
let currentColor = 'white';

let movesNoCapture = [];
let movesCapture = [];

let pieceToMoveName = [];
let pieceToMoveCoords = [];
let pieceToMoveImage;

const moveAudio = document.querySelector('.move-audio');
const captureAudio = document.querySelector('.capture-audio');

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (stepNumber % 2 === 1) currentColor = 'white';
        else currentColor = 'black';

        movesNoCapture = [];
        movesCapture = [];

        let squareClickedOnCoords = square.classList[0].split('');
        squareClickedOnCoords.shift();
        squareClickedOnCoords.shift();
        squareClickedOnCoords[0] = Number(squareClickedOnCoords[0]);
        squareClickedOnCoords[1] = Number(squareClickedOnCoords[1]);

        let pieceClickedOnName = [];
        pieceClickedOnName.push(chessBoard[(squareClickedOnCoords[0])][(squareClickedOnCoords[1])][0]);
        pieceClickedOnName.push(chessBoard[(squareClickedOnCoords[0])][(squareClickedOnCoords[1])][1]);

        if (!((square.classList.contains('move-on-white-square'))
        || (square.classList.contains('move-on-black-square')) 
        || (square.classList.contains('capture-on-white-square')) 
        || (square.classList.contains('capture-on-black-square')))) {
            squares.forEach((square) => {square.classList.remove('move-on-white-square')});
            squares.forEach((square) => {square.classList.remove('move-on-black-square')});
            squares.forEach((square) => {square.classList.remove('capture-on-white-square')});
            squares.forEach((square) => {square.classList.remove('capture-on-black-square')});

            pieceToMoveName = pieceClickedOnName;
            pieceToMoveCoords = squareClickedOnCoords;
            pieceToMoveImage = square.firstElementChild;

            if (pieceClickedOnName[0] === currentColor) {
                switch(pieceClickedOnName[1]) {
                    case 'king':
                    getMovesForKing(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;

                    case 'queen':
                    getMovesForQueen(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;

                    case 'bishop':
                    getMovesForBishop(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;

                    case 'knight':
                    getMovesForKnight(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;
                
                    case 'rook':
                    getMovesForRook(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;
                
                    case 'pawn':
                    getMovesForPawn(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;
                    default:
                }
            }

            squares.forEach((square) => {
                let squareCoords = square.classList[0].split('');
                squareCoords.shift();
                squareCoords.shift();
                squareCoords[0] = Number(squareCoords[0]);
                squareCoords[1] = Number(squareCoords[1]);

                for (let i = 0; i < movesNoCapture.length; i++) {
                    if ((Number(squareCoords[0]) === Number(movesNoCapture[i][0]))
                    && (Number(squareCoords[1]) === Number(movesNoCapture[i][1]))) {
                        if (square.classList.contains('white-square')) {
                            square.classList.add('move-on-white-square');
                        };
                        if (square.classList.contains('black-square')) {
                            square.classList.add('move-on-black-square');
                        }
                }
                }

                for (let i = 0; i < movesCapture.length; i++) {
                    if ((Number(squareCoords[0]) === Number(movesCapture[i][0]))
                    && (Number(squareCoords[1]) === Number(movesCapture[i][1]))) {
                        if (square.classList.contains('white-square')) {
                            square.classList.add('capture-on-white-square');
                        };
                        if (square.classList.contains('black-square')) {
                            square.classList.add('capture-on-black-square');
                        }
                }
                }
            });

        } else {
            squares.forEach((square) => {square.classList.remove('move-on-white-square')});
            squares.forEach((square) => {square.classList.remove('move-on-black-square')});
            squares.forEach((square) => {square.classList.remove('capture-on-white-square')});
            squares.forEach((square) => {square.classList.remove('capture-on-black-square')});

            chessBoard[squareClickedOnCoords[0]][squareClickedOnCoords[1]] = pieceToMoveName;
            chessBoard[pieceToMoveCoords[0]][pieceToMoveCoords[1]] = ['none', 'none'];
            if (square.firstElementChild) {
                captureAudio.play();
                square.removeChild(square.firstElementChild);
            } else {
                moveAudio.play();
            }
            square.appendChild(pieceToMoveImage);
            stepNumber++;
        }
    })
});