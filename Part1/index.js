console.log('the connection is great')
let board = [];

function play(clickedBoxId){
    const playerSpan = document.getElementById('player');
    const clickedElem = document.getElementById(clickedBoxId);

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElem.innerText = 'X';
        board[clickedBoxId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElem.innerText = 'O';
        board[clickedBoxId] = 'O';
    }
    console.log(board)

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner!`);
        return;
    } if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner!`);
        return;
    } if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner!`);
        return;
    } if (middleCenter !== undefined && middleCenter === topCenter && middleCenter === bottomCenter) {
        alert(`${middleCenter} is the winner!`);
        return;
    } if (middleCenter !== undefined && middleCenter === middleLeft && middleCenter === middleRight) {
        alert(`${middleCenter} is the winner!`);
        return;
    } if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner!`);
        return;
    } if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner!`);
        return;
    }

    //alert when board is full
    let boardFull = true;
    for (let i =0; i <=8; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
    }
    if (boardFull === true){
        alert("Cat's game, there is no winner");
    }
}



