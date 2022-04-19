const gameGrid = document.getElementById('game');
const gameContainers = document.getElementsByClassName('container-col');
const startGame = document.getElementsByTagName('button');

/**
 * @name removeGameGrid
 * @description Removes the game grid on each start of new game.
 */
 function removeGameGrid(){
    for(var r = 0; r < gameContainers.length; r++){
        gameContainers[r].innerHTML = '';
    }
}


/**
 * @name buildGameGrid
 * @description Builds the game grid using HTML elements for the cells.
 */
function buildGameGrid(){
    for(var i = 0; i < 16; i++){
        gameGrid.innerHTML +='<div class="container-col"></div>\n';
        for(var j = 0; j < 16; j++){
            gameContainers[i].innerHTML += '<div class="square"></div>\n';
        }
    }
}


/**
 * @name runGame
 * @description Calls all the necessary functions to run the game.
 */
function runGame(){
    removeGameGrid();
    buildGameGrid();
}


startGame[0].addEventListener('click', runGame);