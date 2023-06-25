var click = 10
var minotaur = Math.floor(Math.random() * 9) 
var freedom = Math.floor(Math.random() * 9) 
    if(minotaur === freedom) {
    return minotaur = Math.floor(Math.random() * 9)
    }


const treasure = (location) => {
    click = click - 1
    document.getElementById ("counter").innerHTML = `Turns Remaining ${click}`
    if(freedom === location) {
    document.getElementById("outcome").innerHTML = "Winner"
    document.getElementById("gameBoard").innerHTML = "Wall"
    } else if(minotaur === location) {
    document.getElementById("outcome").innerHTML = "Loser"
    document.getElementById("gameBoard").innerHTML = "Wall"
    } else if(freedom !== location && minotaur !== location) {
    document.getElementById(location).innerHTML = "Loser"
    } 
}