var plrscore = 0
var botscore = 0

function choice(plrmove) {
    var botmove = Math.floor((Math.random() * 3) + 1)
    // Code pas top mais azul
    if (plrmove == 1 && botmove == 1) {
        console.log("Tie")
        return
    }
    else if (plrmove == 2 && botmove == 2) {
        console.log("Tie")
        return
    }
    else if (plrmove == 3 && botmove == 3) {
        console.log("Tie")
        return
    }
    else if (plrmove == 1 && botmove == 3) {
        console.log("Player Win")
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else if (plrmove == 2 && botmove == 1) {
        console.log("Player Win")
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else if (plrmove == 3 && botmove == 2) {
        console.log("Player Win")
        plrscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
    else {
        console.log("Bot Win")
        botscore += 1
        document.getElementById("score").textContent = plrscore + " | " + botscore
        return
    }
}
