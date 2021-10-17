let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
alert('Welcome to Tic-Tac-Toe!\nClick OK to start');

// use the value stored in the nextPlayer variable to indicate who the next player is
let player = document.getElementById('next-lbl');
player.innerText = 'Player X';

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   let cells = document.querySelectorAll('td');
   for (let i = 0; i < cells.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = '[ ]';
        cells[i].appendChild(btn);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = '[' + nextPlayer + ']';
    if (nextPlayer == 'X'){
        nextPlayer = 'O';
        player.innerText = 'Player O';
    }
    else {
        nextPlayer = 'X';
        player.innerText = 'Player X';
    }

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.setAttribute('disabled' , 'disabled');

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl');
        let header = document.createElement('h1');
        header.innerText = 'Game Over';
        lbl.appendChild(header);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let clickedBtns = 0;
    for (let i = 0; i < btns.length; i++){
        if (btns[i].disabled){
            clickedBtns++;
        }
    }
    if (clickedBtns == btns.length){
        return true;
    }
    else {
        return false;
    }
}
