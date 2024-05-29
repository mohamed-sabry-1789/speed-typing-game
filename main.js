const words = [
    "hello",
    "word",
    "testing",
    "code",
    "javascript",
    "country",
    "programming",
    "town",
    "youtube",
    "twitter",
    "github",
    "leetcode",
    "internet",
    "python",
    "scala",
    "destructuring",
    "paradigm",
    "styling",
    "cascade",
    "documentation",
    "funny",
    "working",
    "funny",
    "test",
    "rust",
    "playing",
    "runner"
];
const theWord = document.querySelector(".the-word")
const startBtn = document.querySelector(".start")
const uncomingWords = document.querySelector(".uncomig-words")
const lvlSpan = document.querySelector(".level")
const lvlScound = document.querySelector(".second")
const timeLeft = document.querySelector(".left-seconds")
const gotScore = document.querySelector(".got")
const total = document.querySelector(".total")
const inputTyping = document.querySelector("#typing")
const Lvls = {
    "Easy": 8,
    "Normal": 6,
    "Hard": 4
}
inputTyping.disabled = true;
inputTyping.setAttribute("autocomplete", "off")
const inputs = document.getElementsByName("lvls")
const finshMAssge = document.querySelector(".finish span")
const finshPostion = document.querySelector(".finish")
const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => {

    location.reload()
})
startBtn.addEventListener("click", () => {
    document.querySelector(".monkey").play()
    document.querySelector(".arow").style.display = "block"
})
inputs.forEach((input) => {
    input.addEventListener("click", () => {
        document.querySelector(".arow").style.display = "none"
        let defultLevls = input.value
        let defultScounds = Lvls[defultLevls]
        addLvelAndScound(defultLevls, defultScounds)
        startBtn.addEventListener("click", () => {
            document.querySelector(".arow").style.display = "none"
            document.querySelector(".monkey").pause()
            inputTyping.disabled = false;
            startBtn.remove()
            inputTyping.focus()
            genwords(defultScounds)
            // let testGame = setInterval(() => {
            //     genwords(defultScounds)

            // }, defultScounds * 1000)

            inputTyping.addEventListener("keyup", () => {
                if (inputTyping.value === theWord.innerHTML) {
                    genwords(defultScounds)
                    inputTyping.value = ""
                    gotScore.innerHTML++
                    document.querySelector(".nice").play()
                }
            })
            let timer = setInterval(() => {
                if (timeLeft.innerHTML > 0) {
                    timeLeft.innerHTML--

                }

                if (timeLeft.innerHTML === "0") {

                    if (inputTyping.value === theWord.innerHTML) {
                        genwords(defultScounds)
                        inputTyping.value = ""
                        gotScore.innerHTML++

                    } else {
                        clearInterval(timer)
                        creatMassge("GAME OVER", "bad")
                        inputTyping.disabled = true;

                        document.querySelector(".game-over").play()
                    }

                }
                if (gotScore.innerHTML === total.innerHTML) {
                    clearInterval(timer)
                    creatMassge("winner", "good")
                    inputTyping.disabled = true;
                    resetBtn.style.color = "green"
                    document.querySelector(".congrat").play()
                }

            }, 1000)
        })

    })
})
function creatMassge(masssage, cla) {
    let text = document.createTextNode(masssage)
    finshMAssge.append(text)
    finshMAssge.classList.add(cla)
    finshPostion.style.display = "block"
}
function addLvelAndScound(lvl, sucnds) {
    lvlSpan.innerHTML = lvl;
    lvlScound.innerHTML = sucnds
    timeLeft.innerHTML = sucnds
    total.innerHTML = words.length

}
inputTyping.onpaste = () => {
    return false
}


function genwords(sucnds) {

    uncomingWords.innerHTML = ""
    let randomWords = words[Math.floor(Math.random() * words.length)]
    console.log(randomWords)
    theWord.innerHTML = randomWords
    let a = words.indexOf(randomWords)
    words.splice(a, 1)
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div")
        div.append(words[i])
        uncomingWords.append(div)
    }
    timeLeft.innerHTML = sucnds





}





