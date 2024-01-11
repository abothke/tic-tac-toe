let playerWeapon, result, botWeapon
let playerScore = 0;
let cpuScore = 0;
let currentRound = 1;

let rounds = "5"
const botWeapons = ["rock", "paper", "scissors"]
const win = {
    "rock": "scissors",
    "paper": "rock",
    "scissor": "paper"
}

const scoreOfRound = document.querySelector("#scoreRound")
const domPlayerScore = document.querySelector("#playerScore")
const domCpuScore = document.querySelector("#cpuScore")
const domRounds = document.querySelector("#rounds")
const domPlayerWeapon = document.querySelector("#player")
const domCpuWeapon = document.querySelector("#computer")
const domPlayerTitle = document.querySelector("#playerTitle")
const domLetsPlay = document.querySelector("#letsPlay")
const restartButton = document.querySelector("#restart")

document.querySelectorAll("input[type='radio']").forEach((el) =>{
    el.addEventListener("change", () =>{
    rounds = el.value
    console.log(rounds);
    })
})

document.querySelectorAll("[id^=ch-]").forEach((el) =>{
    el.addEventListener("click", () =>{
    playerWeapon = el.id.replace("ch-", "")
    console.log(`Du hast ${playerWeapon} ausgewählt`);
    startGame(rounds, playerWeapon)
    })
})

const startGame = (rounds, playerWeapon) => {
    if (currentRound != rounds){
    currentRound++
    let weaponChoice = Math.floor(Math.random() * botWeapons.length)
    domPlayerTitle.style.display = "flex"
    botWeapon = botWeapons[weaponChoice]
    console.log(`Computer hat ${botWeapon} ausgewählt`);
    console.log(`${win[playerWeapon]} gewinnt gegen deine Waffe`);
    domRounds.textContent = `${currentRound-1} / ${rounds}`
    domPlayerWeapon.className = `${playerWeapon} emoji`
    domCpuWeapon.className = `${botWeapon} emoji`
    if (win[playerWeapon] === botWeapon){
        console.log("Du hast gewonnen!");
        scoreOfRound.textContent = "Du hast gewonnen!"
        playerScore++
        domPlayerScore.textContent = playerScore
    } else if (playerWeapon === botWeapon){
        console.log("Unentschieden!");
        scoreOfRound.textContent = "Unentschieden!"
    } else{
        console.log("Computer hat gewonnen");
        scoreOfRound.textContent = "Du hast verloren!"
        cpuScore++
        domCpuScore.textContent = cpuScore
    }
    console.log(currentRound);
    } else {
    domRounds.textContent = `${currentRound} / ${rounds}`
    if(playerScore > cpuScore){
        domLetsPlay.innerHTML = "Du hast gewonnen" 
    } else if (playerScore < cpuScore){
        domLetsPlay.innerHTML = "Du hast verloren"
    } else{
        domLetsPlay.innerHTML = "Unentschieden!"
    }
    console.log(cpuScore, playerScore);
}
}

restartButton.addEventListener("click", () =>{
    location.reload()
})