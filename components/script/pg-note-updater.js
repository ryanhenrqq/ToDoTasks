let storageEngineStatus = localStorage.getItem("todotasks-note-status")
if (!storageEngineStatus) {
    localStorage.setItem("todotasks-note-status", 0)
    storageEngineStatus = 0
}

let storageEngineTitle = localStorage.getItem("todotasks-note-title")
let storageEngineDesc = localStorage.getItem("todotasks-note-desc")
const clearbtn = document.getElementById("clear-all")


function updatePg() {
    storageEngineStatus = localStorage.getItem("todotasks-note-status")
    if (storageEngineStatus == 0) {
        const blankPg = document.getElementById("all-done-main")
        const notePg = document.getElementById("tasker-listing")
        notePg.style.display = "none"
        blankPg.style.display = "flex"
    } else {
        const blankPg = document.getElementById("all-done-main")
        const notePg = document.getElementById("tasker-listing")
        notePg.style.display = "flex"
        blankPg.style.display = "none"
    }
    console.log(storageEngineStatus)
}

function verifyNoteExistence() {
    const list = document.getElementById("today-list")
    if (list.querySelector(".task-object")) {
        console.error("contem")
        localStorage.setItem("todotasks-note-status", 1)
    } else {
        console.error("vazio")
        localStorage.setItem("todotasks-note-status", 0)
        updatePg()
    }
}

function buttonUpdater() {
    const indvDelete = document.querySelectorAll(".trash-ind-note")
    indvDelete.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const tgt = document.getElementsByClassName("task-object")[index]
            tgt.remove()
        })
    })
}

setInterval(verifyNoteExistence, 1000)
setInterval(buttonUpdater, 1000)

clearbtn.addEventListener("click", function() {
    const todayList = document.getElementById("today-list")
    todayList.innerHTML = `<div class="title-list"><img src="./components/res/icon/hourglass.svg" alt="Ampulheta">Para Hoje</div>`
    localStorage.setItem("todotasks-note-status", 0)
    updatePg()
})



document.addEventListener("DOMContentLoaded", updatePg)
