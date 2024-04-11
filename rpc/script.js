var plrscore = 0
var botscore = 0

function choice(plrmove) {
    var botmove = Math.floor((Math.random() * 3) + 1)
    // Code pas top mais azul
    if (plrmove == 1 && botmove == 1) {
        document.getElementById("wtext").textContent = "😐 Égalité 😐"
        document.getElementById("wtext").style.color = "#000"
        return
    }
    else if (plrmove == 2 && botmove == 2) {
        document.getElementById("wtext").textContent = "😐 Égalité 😐"
        document.getElementById("wtext").style.color = "#000"
        return
    }
    else if (plrmove == 3 && botmove == 3) {
        document.getElementById("wtext").textContent = "😐 Égalité 😐"
        document.getElementById("wtext").style.color = "#000"
        return
    }
    else if (plrmove == 1 && botmove == 3) {
        document.getElementById("wtext").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("wtext").style.color = "#f1c40f"
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else if (plrmove == 2 && botmove == 1) {
        document.getElementById("wtext").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("wtext").style.color = "#f1c40f"
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else if (plrmove == 3 && botmove == 2) {
        document.getElementById("wtext").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("wtext").style.color = "#f1c40f"
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else {
        document.getElementById("wtext").textContent = "😔 Vous avez perdu 😔"
        document.getElementById("wtext").style.color = "#e74c3c"
        botscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
}
