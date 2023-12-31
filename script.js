// Store the position of the pieces
// Dimension of the array: 8 column x 8 square x 2 property (color, piece)
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

// Step can be a move or a capture
// Move is a step without eliminating an enemy piece (green background color)
// Capture is a step with eliminating an enemy piece (red background color)
let stepNumber = 1;
let currentColor = 'white';
let moveCoords = [];
let captureCoords = [];

// getMoveCoordsFor... functions calculate all legal move coordinates for the given piece
// getCaptureCoordsFor... functions calculate all legal capture coordinates for the given piece
function getMoveCoordsForRook(xCoord, yCoord) {
    let moveCoords = [];
    for (let i = xCoord + 1; i < 8; i++) {
        if (chessBoard[i][yCoord].includes('none')) {
            moveCoords.push([i, yCoord]);
        } else break;
    }

    for (let i = xCoord - 1; i >= 0; i--) {
        if (chessBoard[i][yCoord].includes('none')) {
            moveCoords.push([i, yCoord]);
        } else break;
        }

    for (let i = yCoord + 1; i < 8; i++) {
        if (chessBoard[xCoord][i].includes('none')) {
            moveCoords.push([xCoord, i]);
        } else break;
    }

    for (let i = yCoord - 1; i >= 0; i--) {
        if (chessBoard[xCoord][i].includes('none')) {
            moveCoords.push([xCoord, i]);
        } else break; 
    }
    return moveCoords;
}

function getCaptureCoordsForRook(xCoord, yCoord) {
    let captureCoords = [];
    for (let i = xCoord + 1; i < 8; i++) {
        if (chessBoard[i][yCoord].includes('none')) continue;
        else if (chessBoard[i][yCoord].includes(currentColor)) break;
        else {
            captureCoords.push([i, yCoord]);
            break;
        }
    }

    for (let i = xCoord - 1; i >= 0; i--) {
        if (chessBoard[i][yCoord].includes('none')) continue;
        else if (chessBoard[i][yCoord].includes(currentColor)) break;
        else {
            captureCoords.push([i, yCoord]);
            break;
        }
    }

    for (let i = yCoord + 1; i < 8; i++) {
        if (chessBoard[xCoord][i].includes('none')) continue;
        else if (chessBoard[xCoord][i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord, i]);
            break;
        }
    }

    for (let i = yCoord - 1; i >= 0; i--) {
        if (chessBoard[xCoord][i].includes('none')) continue;
        else if (chessBoard[xCoord][i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord, i]);
            break;
        }
    }
    return captureCoords;
}

function getMoveCoordsForBishop(xCoord, yCoord) {
    let moveCoords = [];
    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord + i][yCoord + i].includes('none')) {
            moveCoords.push([xCoord + i, yCoord + i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord - i][yCoord - i].includes('none')) {
            moveCoords.push([xCoord - i, yCoord - i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord + i][yCoord - i].includes('none')) {
            moveCoords.push([xCoord + i, yCoord - i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) {
            moveCoords.push([xCoord - i, yCoord + i]);
        } else break;
    }
    return moveCoords;
}

function getCaptureCoordsForBishop(xCoord, yCoord) {
    let captureCoords = [];
    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord + i][yCoord + i].includes('none')) continue;
        else if (chessBoard[xCoord + i][yCoord + i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord + i, yCoord + i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord - i][yCoord - i].includes('none')) continue;
        else if (chessBoard[xCoord - i][yCoord - i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord - i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord + i][yCoord - i].includes('none')) continue;
        else if (chessBoard[xCoord + i][yCoord - i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord + i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) continue;
        else if (chessBoard[xCoord - i][yCoord + i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord - i, yCoord + i]);
            break;
        }
    }
    return captureCoords;
}

function getMoveCoordsForQueen(xCoord, yCoord) {
    let moveCoords = [];
    for (let i = xCoord + 1; i < 8; i++) {
        if (chessBoard[i][yCoord].includes('none')) {
            moveCoords.push([i, yCoord]);
        } else break;
    }

    for (let i = xCoord - 1; i >= 0; i--) {
        if (chessBoard[i][yCoord].includes('none')) {
            moveCoords.push([i, yCoord]);
        } else break;
    }

    for (let i = yCoord + 1; i < 8; i++) {
        if (chessBoard[xCoord][i].includes('none')) {
            moveCoords.push([xCoord, i]);
        } else break;
    }

    for (let i = yCoord - 1; i >= 0; i--) {
        if (chessBoard[xCoord][i].includes('none')) {
            moveCoords.push([xCoord, i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord + i][yCoord + i].includes('none')) {
            moveCoords.push([xCoord + i, yCoord + i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord - i][yCoord - i].includes('none')) {
            moveCoords.push([xCoord - i, yCoord - i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord + i][yCoord - i].includes('none')) {
            moveCoords.push([xCoord + i, yCoord - i]);
        } else break;
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) {
            moveCoords.push([xCoord - i, yCoord + i]);
        } else break;
    }
    return moveCoords;
}

function getCaptureCoordsForQueen(xCoord, yCoord) {
    let captureCoords = [];
    for (let i = xCoord + 1; i < 8; i++) {
        if (chessBoard[i][yCoord].includes('none')) continue;
        else if (chessBoard[i][yCoord].includes(currentColor)) break;
        else {
            captureCoords.push([i, yCoord]);
            break;
        }
    }

    for (let i = xCoord - 1; i >= 0; i--) {
        if (chessBoard[i][yCoord].includes('none')) continue;
        else if (chessBoard[i][yCoord].includes(currentColor)) break;
        else {
            captureCoords.push([i, yCoord]);
            break;
        }
    }

    for (let i = yCoord + 1; i < 8; i++) {
        if (chessBoard[xCoord][i].includes('none')) continue;
        else if (chessBoard[xCoord][i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord, i]);
            break;
        }
    }

    for (let i = yCoord - 1; i >= 0; i--) {
        if (chessBoard[xCoord][i].includes('none')) continue;
        else if (chessBoard[xCoord][i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord, i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord + i][yCoord + i].includes('none')) continue;
        else if (chessBoard[xCoord + i][yCoord + i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord + i, yCoord + i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord - i][yCoord - i].includes('none')) continue;
        else if (chessBoard[xCoord - i][yCoord - i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord - i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord + i) > 7) || ((yCoord - i) < 0)) break;
        if (chessBoard[xCoord + i][yCoord - i].includes('none')) continue;
        else if (chessBoard[xCoord + i][yCoord - i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord + i, yCoord - i]);
            break;
        }
    }

    for (let i = 1; i < 8; i++) {
        if (((xCoord - i) < 0) || ((yCoord + i) > 7)) break;
        if (chessBoard[xCoord - i][yCoord + i].includes('none')) continue;
        else if (chessBoard[xCoord - i][yCoord + i].includes(currentColor)) break;
        else {
            captureCoords.push([xCoord - i, yCoord + i]);
            break;
        }
    }
    return captureCoords;
}

function getMoveCoordsForKing(xCoord, yCoord) {
    let moveCoords = [];
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
        || (allMovesForKing[i][1] < 0)) continue;
        else {
            if (chessBoard[allMovesForKing[i][0]][allMovesForKing[i][1]].includes('none')) {
                moveCoords.push([(allMovesForKing[i][0]), (allMovesForKing[i][1])]);
            } else continue;
        }
    }
    return moveCoords;
}

function getCaptureCoordsForKing(xCoord, yCoord) {
    let captureCoords = [];
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
        || (allMovesForKing[i][1] < 0)) continue;
        else {
            if (chessBoard[allMovesForKing[i][0]][allMovesForKing[i][1]].includes('none')) continue;
            else if (chessBoard[allMovesForKing[i][0]][allMovesForKing[i][1]].includes(currentColor)) continue;
            else {
                captureCoords.push([(allMovesForKing[i][0]), (allMovesForKing[i][1])]);
            }
        }
    }
    return captureCoords;
}

function getMoveCoordsForKnight(xCoord, yCoord) {
    let moveCoords = [];
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
        || (allMovesForKnight[i][1] < 0)) continue;
        else {
            if (chessBoard[allMovesForKnight[i][0]][allMovesForKnight[i][1]].includes('none')) {
                moveCoords.push([(allMovesForKnight[i][0]), (allMovesForKnight[i][1])]);
            } else continue;
        }
    }
    return moveCoords;
}

function getCaptureCoordsForKnight(xCoord, yCoord) {
    let captureCoords = [];
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
        || (allMovesForKnight[i][1] < 0)) continue;
        else {
            if (chessBoard[allMovesForKnight[i][0]][allMovesForKnight[i][1]].includes('none')) continue;
            else if (chessBoard[allMovesForKnight[i][0]][allMovesForKnight[i][1]].includes(currentColor)) continue;
            else {
                captureCoords.push([(allMovesForKnight[i][0]), (allMovesForKnight[i][1])]);
            }
        }
    }
    return captureCoords;
}

function getMoveCoordsForPawn(xCoord, yCoord) {
    let moveCoords = [];
    if (currentColor === 'white') {
        if (yCoord + 1 <= 7) {
            if (chessBoard[xCoord][yCoord + 1].includes('none')) {
                moveCoords.push([(xCoord), (yCoord + 1)]);
            }
        }
        if ((yCoord + 2 === 3) && (chessBoard[xCoord][yCoord + 1].includes('none'))) {
            if (chessBoard[xCoord][yCoord + 2].includes('none')) {
                moveCoords.push([(xCoord), (yCoord + 2)]);
            }
        }
    }

    if (currentColor === 'black') {
        if (yCoord - 1 >= 0) {
            if (chessBoard[xCoord][yCoord -1].includes('none')) {
                moveCoords.push([(xCoord), (yCoord - 1)]);
            }
        }
        if ((yCoord - 2 === 4) && (chessBoard[xCoord][yCoord -1].includes('none'))) {
            if (chessBoard[xCoord][yCoord - 2].includes('none')) {
                moveCoords.push([(xCoord), (yCoord - 2)]);
            }
        }
    }
    return moveCoords;
}

function getCaptureCoordsForPawn(xCoord, yCoord) {
    let captureCoords = [];
    if (currentColor === 'white') {
        if (((xCoord + 1) <= 7) && ((yCoord + 1) <= 7)
        && (chessBoard[xCoord + 1][yCoord + 1].includes('black'))) {
            captureCoords.push([(xCoord + 1), (yCoord + 1)]);
        }
        if (((xCoord - 1) >= 0) && ((yCoord + 1) <= 7)
        && (chessBoard[xCoord - 1][yCoord + 1].includes('black'))) {
            captureCoords.push([(xCoord - 1), (yCoord + 1)]);
        }
    }

    if (currentColor === 'black') {
        if (((xCoord + 1) <= 7) && ((yCoord - 1) >= 0)
        && (chessBoard[xCoord + 1][yCoord - 1].includes('white'))) {
            captureCoords.push([(xCoord + 1), (yCoord - 1)]);
        }
        if (((xCoord - 1) >= 0) && ((yCoord - 1) >= 0)
        && (chessBoard[xCoord - 1][yCoord - 1].includes('white'))) {
            captureCoords.push([(xCoord - 1), (yCoord - 1)]);
        }
    }
    return captureCoords;
}

// Store the information of the first click to use it during the second click
let pieceToMoveName = [];
let pieceToMoveCoords = [];
let pieceToMoveImage;

const squares = document.querySelectorAll('.square');

// Add one type of background color to the squares in the coordsToColor array
function addBackgroundColor(coordsToColor, typeOfBackground) {
    squares.forEach((square) => {
        let squareCoords = square.classList[0].split('');
        squareCoords.shift();
        squareCoords.shift();
        squareCoords[0] = Number(squareCoords[0]);
        squareCoords[1] = Number(squareCoords[1]);
    
        for (let i = 0; i < coordsToColor.length; i++) {
            if ((Number(squareCoords[0]) === Number(coordsToColor[i][0]))
            && (Number(squareCoords[1]) === Number(coordsToColor[i][1]))) {
                if (square.classList.contains('white-square')) {
                    if (typeOfBackground === 'move') {
                        square.classList.add('move-on-white-square');
                    }
                    if (typeOfBackground === 'capture') {
                        square.classList.add('capture-on-white-square');
                    }
                    if (typeOfBackground === 'currentStep') {
                        square.classList.add('current-step-on-white-square');
                    }
                    if (typeOfBackground === 'previousStep') {
                        square.classList.add('previous-step-on-white-square');
                    }
                } else {
                    if (typeOfBackground === 'move') {
                        square.classList.add('move-on-black-square');
                    }
                    if (typeOfBackground === 'capture') {
                        square.classList.add('capture-on-black-square');
                    }
                    if (typeOfBackground === 'currentStep') {
                        square.classList.add('current-step-on-black-square');
                    }
                    if (typeOfBackground === 'previousStep') {
                        square.classList.add('previous-step-on-black-square');
                    }
                }
            }
        }
    });
}

// Remove background color(s) from all squares for the type(s) where the parameter is true
function removeBackgroundColor(move, capture, currentStep, previousStep) {
    if (move === true) {
        squares.forEach((square) => {square.classList.remove('move-on-white-square')});
        squares.forEach((square) => {square.classList.remove('move-on-black-square')});
    }

    if (capture === true) {
        squares.forEach((square) => {square.classList.remove('capture-on-white-square')});
        squares.forEach((square) => {square.classList.remove('capture-on-black-square')});
    }

    if (currentStep === true) {
        squares.forEach((square) => {square.classList.remove('current-step-on-white-square')});
        squares.forEach((square) => {square.classList.remove('current-step-on-black-square')});
    }

    if (previousStep === true) {
        squares.forEach((square) => {square.classList.remove('previous-step-on-white-square')});
        squares.forEach((square) => {square.classList.remove('previous-step-on-black-square')});
    }
}

// Event listener to handle all click events
squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (stepNumber % 2 === 1) currentColor = 'white';
        else currentColor = 'black';

        let squareClickedOnCoords = square.classList[0].split('');
        squareClickedOnCoords.shift();
        squareClickedOnCoords.shift();
        squareClickedOnCoords[0] = Number(squareClickedOnCoords[0]);
        squareClickedOnCoords[1] = Number(squareClickedOnCoords[1]);

        let pieceClickedOnName = [];
        pieceClickedOnName.push(chessBoard[(squareClickedOnCoords[0])][(squareClickedOnCoords[1])][0]);
        pieceClickedOnName.push(chessBoard[(squareClickedOnCoords[0])][(squareClickedOnCoords[1])][1]);

        // First click (the piece what the player wants to step with)
        if (!((square.classList.contains('move-on-white-square'))
        || (square.classList.contains('move-on-black-square')) 
        || (square.classList.contains('capture-on-white-square')) 
        || (square.classList.contains('capture-on-black-square')))) {
            removeBackgroundColor(true, true, true, false);

            // Store the information of the first click to use it during the second click
            pieceToMoveName = pieceClickedOnName;
            pieceToMoveCoords = squareClickedOnCoords;
            pieceToMoveImage = square.firstElementChild;

            if (pieceClickedOnName[0] === currentColor) {

                // Update background color for the current step coordinates (yellow background color)
                let currentStepCoords = [];
                currentStepCoords.push(squareClickedOnCoords);
                addBackgroundColor(currentStepCoords, 'currentStep');

                // Calculate all legal move and capture coordinates
                switch(pieceClickedOnName[1]) {
                    case 'king':
                    moveCoords = getMoveCoordsForKing(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    captureCoords = getCaptureCoordsForKing(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;

                    case 'queen':
                    moveCoords = getMoveCoordsForQueen(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    captureCoords = getCaptureCoordsForQueen(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;

                    case 'bishop':
                    moveCoords = getMoveCoordsForBishop(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    captureCoords = getCaptureCoordsForBishop(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;

                    case 'knight':
                    moveCoords = getMoveCoordsForKnight(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    captureCoords = getCaptureCoordsForKnight(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;
                
                    case 'rook':
                    moveCoords = getMoveCoordsForRook(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    captureCoords = getCaptureCoordsForRook(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;
                
                    case 'pawn':
                    moveCoords = getMoveCoordsForPawn(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    captureCoords = getCaptureCoordsForPawn(squareClickedOnCoords[0], squareClickedOnCoords[1]);
                    break;
                }
            } else {
                moveCoords = [];
                captureCoords = [];
            }

            // Update background color for move and capture  coordinates
            addBackgroundColor(moveCoords, 'move');
            addBackgroundColor(captureCoords, 'capture');

        // Second click (the square where the player wants to step to)
        } else {
            removeBackgroundColor(true, true, true, true);

            // Execute the step
            chessBoard[squareClickedOnCoords[0]][squareClickedOnCoords[1]] = pieceToMoveName;
            chessBoard[pieceToMoveCoords[0]][pieceToMoveCoords[1]] = ['none', 'none'];
            if (square.firstElementChild) {
                const captureAudio = document.querySelector('.capture-audio');
                captureAudio.play();
                square.removeChild(square.firstElementChild);
            } else {
                const moveAudio = document.querySelector('.move-audio');
                moveAudio.play();
            }
            square.appendChild(pieceToMoveImage);
            stepNumber++;

            // Update background color for the previous step coordinates (yellow background color)
            let previousStepCoords = [];
            previousStepCoords.push(squareClickedOnCoords);
            previousStepCoords.push(pieceToMoveCoords);
            addBackgroundColor(previousStepCoords, 'previousStep');
        }
    })
});