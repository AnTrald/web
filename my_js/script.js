const modal = document.getElementById("modal");
const btn_1 = document.getElementById("btn1");
const btn_2 = document.getElementById("btn2");
const btn_3 = document.getElementById("btn3");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");


btn_1.onclick = function() {
    modal.style.display = "block";
}

btn_2.onclick = function() {
    modal.style.display = "block";
}

btn_3.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Валидация формы и обработка отправки
form.onsubmit = function(event) {
    event.preventDefault();


    if (form.checkValidity()) {
        successMessage.style.display = "block";
        dom()
        setTimeout(() => {
            modal.style.display = "none";
            successMessage.style.display = "none";
            form.reset();
        }, 2000);
    } else {
        form.reportValidity();
    }
};

function dom() {
    myForm = document.getElementById("contactForm")
    myForm.addEventListener("submit", function (event) {
        event.preventDefault()
    })
    console.log(myForm.elements.name.value)
    let name = myForm.elements.name.value;
    let email = myForm.elements.email.value
    let phoneNumber = myForm.elements.phone.value
    let date = myForm.elements.date.value
    let comment = myForm.elements.comments.value
    if (name === "null") alert("Поле name - пустое")
    if (email === "null") alert("Поле email - пустое")
    if (comment === "null") alert("Поле comment - пустое")
    if (phoneNumber.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/) == null) alert("Поле number содержит не только цифры")

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            ) == null;
    };

    if (validateEmail(email)) alert("Поле email заполнено некорректно")
    formData = {
        "Имя": name,
        "E-mail": email,
        "Телефон": phoneNumber,
        "Дата": date,
        "Комментарий": comment,
        printData: function () {
            console.log(`Имя: ${name}`);
            console.log(`E-mail: ${email}`);
            console.log(`Телефон: ${phoneNumber}`);
            console.log(`Дата: ${date}`);
            console.log(`Комментарий: ${comment}`);
        }
    }

    formData.printData()
}



