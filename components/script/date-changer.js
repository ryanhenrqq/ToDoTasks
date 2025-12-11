const closeDateCh = document.getElementById("close-new-popup-date-ch")
closeDateCh.addEventListener("click", closeDateChanger)

function closeDateChanger() {
    const popupper = document.getElementById("date-change-pop")
    popupper.style.display = "none"
    const dateFromCh = document.getElementById("date-set-ch")
    dateFromCh.value = ""
}

document.getElementById("date-set-ch").addEventListener("change", () => {
    const listener = document.getElementById("date-set-ch")
    const saveDateCh = document.getElementById("button-date-ch-set")
    if (!listener.value) {
        saveDateCh.disabled = true
    } else {
        saveDateCh.disabled = false
    }
})

const saveDateCh = document.getElementById("button-date-ch-set")
saveDateCh.addEventListener("click", saveDateChanger)

function saveDateChanger() {
    alert("Função ainda não completa, tente mais tarde após uma atualização nova.")
    closeDateChanger()
}