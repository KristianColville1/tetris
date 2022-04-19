const gameGrid = document.getElementById('game');
const gameContainers = document.getElementsByClassName('container-row');
const startGame = document.getElementsByTagName('button');

/**
 * @name runGame
 * @description Builds the game grid using HTML elements for the cells.
 */
function buildGameGrid(){
    for(var i = 0; i < 16; i++){
        gameGrid.innerHTML +='<div class="container-row"></div>\n';
        for(var j = 0; j < 17; j++){
            gameContainers[i].innerHTML += '<div class="square"></div>\n';
        }
    }
}

/**
 * @name runGame
 * @description Calls all the necessary functions to run the game.
 */
function runGame(){
    buildGameGrid();
}

startGame[0].addEventListener('click', runGame);