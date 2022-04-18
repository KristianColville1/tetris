const gameGrid = document.getElementById('game');
const gameContainers = document.getElementsByClassName('container-row');
const startGame = document.getElementsByTagName('button');

function buildGameGrid(){
    alert('active');
    for(let i = 0; i < 15; i++){
        gameGrid.innerHTML +='<div class="container-row"></div>\n';
    }
    for(let o = 0; o < 15; o++){
        for(let i = 0; i < 18; i++){
            gameContainers[o].innerHTML += '<div class="square"></div>\n';
        }
    }
}

startGame[0].addEventListener('click', buildGameGrid);