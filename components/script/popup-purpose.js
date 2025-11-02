const popupShowupBtn = document.getElementById("popup-add-note")
const closePopup = document.getElementById("close-new-popup")
const saveOptY = document.getElementById("save-option-yes")
const saveOptN = document.getElementById("save-option-no")

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
        const blockContent = document.getElementById("save-changes-new-popup")
        blockContent.style.display = "block"
        doNotSave = true
        return
    } else {
        doNotSave = false
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
            return false
        } else {
            return true
        }
    }

    bodyblur.style.filter = "none"
    bodyblur.style.pointerEvents = "auto"
    popupAllDiv.style.display = "none"

    isPopupShowing = false
}

closePopup.addEventListener("click", function() {
    hidePop()
})

saveOptY.addEventListener("click", function() {
    doNotSave = false
    clearInputs()
    hidePop()
})
saveOptN.addEventListener("click", function() {
    doNotSave = false
    doNotSaveChc = 1
    hidePop()
})

function clearInputs() {
    const titulo = document.getElementById("title-set")
    const desc = document.getElementById("desc-set")
    const date = document.getElementById("date-set")
    const time = document.getElementById("time-set")
    titulo.value = ""
    desc.value = ""
}