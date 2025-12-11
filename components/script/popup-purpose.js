const popupShowupBtn = document.getElementById("popup-add-note")
const closePopup = document.getElementById("close-new-popup")
const saveOptY = document.getElementById("save-option-yes")
const saveOptN = document.getElementById("save-option-no")
const timeAddOpt = document.getElementById("activate-time")
const createButton = document.getElementById("button-set")

let isPopupShowing = false
let doNotSave = false
let doNotSaveChc = 0

popupShowupBtn.addEventListener("click", function() {
    if (isPopupShowing) {
        hidePop()
        return
    } else {
        showPop()
        return
    }
    function showPop() {
        autoSetDate()
        const bodyblur = document.getElementById("background-content")
        const popupAllDiv = document.getElementById("create-pop")
        bodyblur.style.filter = "blur(6px)"
        bodyblur.style.pointerEvents = "none"
        popupAllDiv.style.display = "flex"
        isPopupShowing = true
    }
})

function hidePop() {
    const bodyblur = document.getElementById("background-content")
    const popupAllDiv = document.getElementById("create-pop")
    if (verifyInputs()) {
        doNotSave = true
        askConfirmationAdditionalMenu()
        return
    } else {
        doNotSave = false
    }
    bodyblur.style.filter = "none"
    bodyblur.style.pointerEvents = "auto"
    popupAllDiv.style.display = "none"
    isPopupShowing = false
}

function verifyInputs() {
    const titulo = document.getElementById("title-set")
    const desc = document.getElementById("desc-set")

    let stateone = false
    let statetwo = false


    if (titulo.value != "") {
        stateone = true
        }
    if (desc.value != "") {
        statetwo = true
    }
    if (!stateone && !statetwo) {
        createButton.disabled = true
        return false
    } else {
        createButton.disabled = false
        return true
    }
}

function autoSetDate() {
    const date = document.getElementById("date-set")
    const dateget = new Date()

    const y = dateget.getFullYear()
    const mon = (dateget.getMonth()+1).toString().padStart(2, "0")
    const d = dateget.getDate().toString().padStart(2, "0")
    date.value = `${y}-${mon}-${d}`
}
function setHour() {
    const time = document.getElementById("time-set")
    const timeget = new Date()
    const h = timeget.getHours().toString().padStart(2, "0")
    const m = timeget.getMinutes().toString().padStart(2, "0")
    time.value = `${h}:${m}`
}

setInterval(verifyInputs, 1000)

closePopup.addEventListener("click", function() {
    hidePop()
})

saveOptY.addEventListener("click", function() {
    doNotSave = false
    clearInputs()
    hidePop()
    hideAdditionalMenu()
})
saveOptN.addEventListener("click", function() {
    doNotSave = false
    doNotSaveChc = 1
    hidePop()
    hideAdditionalMenu()
})

function clearInputs() {
    const titulo = document.getElementById("title-set")
    const desc = document.getElementById("desc-set")
    const date = document.getElementById("date-set")
    const time = document.getElementById("time-set")
    titulo.value = ""
    desc.value = ""
}

function askConfirmationAdditionalMenu() {
    const blockContent = document.getElementById("save-changes-new-popup")
    const titleContent = document.getElementById("normal-title-popup-div")
    blockContent.style.display = "flex"
    titleContent.style.display = "none"
}

function hideAdditionalMenu() {
    const blockContent = document.getElementById("save-changes-new-popup")
    const titleContent = document.getElementById("normal-title-popup-div")
    blockContent.style.display = "none"
    titleContent.style.display = "flex"
}

timeAddOpt.addEventListener("change", function(){
    if (this.checked) {
        alert("Essa função foi desativada temporariamente, tente mais tarde após uma atualização nova.")
        this.checked = false
        /*
        setHour()
        const timemenu = document.getElementById("time-set")
        timemenu.style.display = "block" */
    } else {
        const timemenu = document.getElementById("time-set")
        timemenu.value = ""
        timemenu.style.display = "none"
    }
    
})

createButton.addEventListener("click", callNewNote)

function callNewNote() {
    if (!validateData()) {
        console.error("Não foi possivel validar todos os dados presentes no formulario.")
        return
    }
    console.log("Dados validados com sucesso.")
    let hourneeded = needsTime()

    const titulo = document.getElementById("title-set")
    const desc = document.getElementById("desc-set")
    const date = document.getElementById("date-set")
    const pagelist = document.getElementById("today-list")
    let classTimer = checkIfDate(date.value)

    let textAppender = `    
    <div class="task-object">         
    <div class="left-side-tsk-obj">
        <b class="three-dotter-set">${titulo.value}</b>
        <i class="three-dotter-set">${desc.value}</i>
    </div>
    <div class="right-side-tsk-obj">
        <div class="rsto-txt">
            <b>${classTimer}</b>
            <i>${date.value}</i>
        </div>
        <img src="./components/res/icon/timer.svg" class="timer-ch-note" alt="Temporizador">
        <img src="./components/res/icon/trash.svg" alt="Lixeira" class="trash-ind-note">
    </div>
    </div>
    `
    pagelist.innerHTML = `${pagelist.innerHTML}\n${textAppender}`

    clearInputs()
    hidePop()
    updatePg()

    if (localStorage.getItem("todotasks-note-status") == 0) {
        localStorage.setItem("todotasks-note-status", 1)
        updatePg()
    }
}

function checkIfDate(dater) {
    const dt = new Date()
    let todayDay = dt.getDay()
    let todayMon = dt.getMonth()
    let todayY = dt.getFullYear()
    console.log(todayDay, todayMon, todayY)
    let dataAtualComparacao = new Date(todayY, todayMon, todayDay)

    /* Continuar desse ponto: Problema de conversão das datas -> erro NaN na linha 205 */

    const difer = dataAtualComparacao - dater
    const dayDiffer = difer / (100 * 60 * 60 * 24)
    console.log(dayDiffer) /* Erro NaN: Precisa calcularo numero exato de dias */

    if (todayDay) {
        return "Hoje"
    } else if (todayDay != "abobora") {
        const difference = Number(todayDay)
        const sameMon = Number(todayMon)

        /* Datas Anteriores */
        if (difference == 1) {
            return "Ontem"
        } else if (difference > 1 && difference <= 7) {
            return "Semana Passada"
        } else if (difference > 7) {
            return "Há mais de semanas atrás"
        }

        /* Datas Futuras */
        if (difference == -1) {
            return "Amanhã"
        } else if (difference > -1 && difference <= -7 && sameMon == 0) {
            return "Esta semana"
        } else if (difference > -7 && difference <= 30 && sameMon == 0) {
            return "Este Mês"
        }
    }
}

function validateData() {
    const titulo = document.getElementById("title-set")
    const desc = document.getElementById("desc-set")
    const date = document.getElementById("date-set")
    let titlec = false
    let deskc = false
    let datec = false

    if (titulo.value != "") {
        titlec = true
    }
    if (date.value != "" && desc.value != "") {
        datec = true
        deskc = true
    }
    if (titlec && deskc && datec) {
        return true
    } else {
        return false
    }
}

function needsTime() {
    const time = document.getElementById("time-set")
    let timec = false
    if (time.value != "") {
        timec = true
    }
    if (!timec) {
        return false
    } else {
        return true
    }
}