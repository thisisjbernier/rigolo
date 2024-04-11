let plroptions = [document.getElementById("rock"), document.getElementById("paper"), document.getElementById("scissors")]
let botoptions = [document.getElementById("botrock"), document.getElementById("botpaper"), document.getElementById("botscissors")]
var gamelock = false
var plrscore = 0
var botscore = 0

function choice(plrmove){
    // Code pas top mais azul
    if (gamelock == true){return}
    var botmove = Math.floor((Math.random() * 3) + 1)

    // Fait disparaître les élements non selectionner du joueur :)
    if (plrmove == 1){
        plroptions[1].style.display = "none"
        plroptions[2].style.display = "none" 
    }
    else if (plrmove == 2) {
        plroptions[0].style.display = "none"
        plroptions[2].style.display = "none" 
    }
    else if (plrmove == 3) {
        plroptions[0].style.display = "none"
        plroptions[1].style.display = "none" 
    }

    // Fait disparaître les élements non selectionner du bot :)
    if (botmove == 1){
        botoptions[1].style.display = "none"
        botoptions[2].style.display = "none" 
    }
    else if (botmove == 2) {
        botoptions[0].style.display = "none"
        botoptions[2].style.display = "none" 
    }
    else if (botmove == 3) {
        botoptions[0].style.display = "none"
        botoptions[1].style.display = "none" 
    }
    
// La logique du jeux codé nullement mais genre vrm
    if (plrmove == 1 && botmove == 1) {
        document.getElementById("wtext").textContent = "😐 Égalité 😐"
        document.getElementById("wtext").style.color = "#000"
    }
    else if (plrmove == 2 && botmove == 2) {
        document.getElementById("wtext").textContent = "😐 Égalité 😐"
        document.getElementById("wtext").style.color = "#000"
    }
    else if (plrmove == 3 && botmove == 3) {
        document.getElementById("wtext").textContent = "😐 Égalité 😐"
        document.getElementById("wtext").style.color = "#000"
    }
    else if (plrmove == 1 && botmove == 3) {
        document.getElementById("wtext").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("wtext").style.color = "#f1c40f"
        plrscore += 1
    }
    else if (plrmove == 2 && botmove == 1) {
        document.getElementById("wtext").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("wtext").style.color = "#f1c40f"
        plrscore += 1
    }
    else if (plrmove == 3 && botmove == 2) {
        document.getElementById("wtext").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("wtext").style.color = "#f1c40f"
        plrscore += 1
    }
    else {
        document.getElementById("wtext").textContent = "😔 Vous avez perdu 😔"
        document.getElementById("wtext").style.color = "#e74c3c"
        botscore += 1
    }

    gamelock = true
    document.getElementById("score").textContent = plrscore + " | " + botscore
}
