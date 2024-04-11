var plrscore = 0
var botscore = 0

function choice(plrmove) {
    var botmove = Math.floor((Math.random() * 3) + 1)
    // Code pas top mais azul
    if (plrmove == 1 && botmove == 1) {
        document.getElementById("score").textContent = "😐 Égalité 😐"
        document.getElementById("score").style.color = "#000"
        return
    }
    else if (plrmove == 2 && botmove == 2) {
        document.getElementById("score").textContent = "😐 Égalité 😐"
        document.getElementById("score").style.color = "#000"
        return
    }
    else if (plrmove == 3 && botmove == 3) {
        document.getElementById("score").textContent = "😐 Égalité 😐"
        document.getElementById("score").style.color = "#000"
        return
    }
    else if (plrmove == 1 && botmove == 3) {
        document.getElementById("score").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("score").style.color = "#f1c40f"
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else if (plrmove == 2 && botmove == 1) {
        document.getElementById("score").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("score").style.color = "#f1c40f"
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else if (plrmove == 3 && botmove == 2) {
        document.getElementById("score").textContent = "🎉 Vous avez gagné 🎉"
        document.getElementById("score").style.color = "#f1c40f"
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else {
        document.getElementById("score").textContent = "😔 Vous avez perdu 😔"
        document.getElementById("score").style.color = "#e74c3c"
        botscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
}
