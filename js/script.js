let darkMode = localStorage.getItem("darkMode")
let toggle = document.querySelector(".toggle")
let toggleBtn = document.querySelector(".toggle .btn")

// function add dark to body and set darkmode to enabled
const enableDarkMode = () => {
    document.body.classList.add("dark")
    localStorage.setItem("darkMode","enabled")
}
// function remove dark to body and set darkmode to null

const diableDarkMode = () => {
    document.body.classList.remove("dark")
    localStorage.setItem("darkMode",null)
}

// when page reload if darkMode enabled then trigger enable function
if (darkMode === "enabled") {
    enableDarkMode();
    toggleBtn.classList.add("dark")
}else {
    toggleBtn.classList.remove("dark")
}

// when click
toggle.addEventListener("click", function () {
    // update darkMode
    darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled") {
        toggleBtn.classList.add("dark")
    } else {
        toggleBtn.classList.remove("dark")
    }
    // if dark mode not equal to enabled then enable
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    } else {
        diableDarkMode();
        console.log(darkMode);
    }
    

})