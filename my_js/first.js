function showMessage(msg) {
    console.log(msg)
}
function logCurrentTime() {
    const today = new Date();
    showMessage(
        (today.getHours() < 10 ? "0" : "") + today.getHours() + ":"
        + (today.getMinutes() < 10 ? "0" : "") + today.getMinutes() + ":"
        + (today.getSeconds() < 10 ? "0" : "") + today.getSeconds());
}
showMessage("Скрипт запущен!");

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

function toggleVisibility(className) {
    document.querySelectorAll(`.${className}`).forEach(
        a => a.style.display = (a.style.display === 'none' ? 'initial' : 'none')
        // a => a.style.display = 'none'
    );
}

function replaceUtmParams(element) {
    const urlParams = new URLSearchParams(window.location.search);
    const utm_term = urlParams.get('utm_term');
    if (utm_term !== null) {
        element.innerHTML = utm_term;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility('content');
    replaceUtmParams(document.querySelector('h2'));
    logCurrentTime();
});
