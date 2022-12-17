document.getElementById('background-color-picker').addEventListener("change", (event) => {
    if (event.target.value == "dark"){
        rootStyle.setProperty('--bg', "linear-gradient(45deg, #3B185F, #00005C)");
    }
    else{
        rootStyle.setProperty('--bg', "linear-gradient(45deg, #fdc5f5, #72ddf7)");
    }
}, false);

