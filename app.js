const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;

    inputs.forEach((input) => {
    const parent = input.parentElement;

    if (!input.value) {
        input.style.border = "1px solid red";
        parent.querySelector("small").innerText = "This field is required";
        validator = false;
    } else if (monthInp.value > 12) {
        monthInp.style.border = "1px solid red";
        monthInp.parentElement.querySelector("small").innerText = "Invalid month";
        validator = false;
    } else if (dayInp.value > 31) {
        dayInp.style.border = "1px solid red";
        dayInp.parentElement.querySelector("small").innerText = "Invalid day";
        validator = false;
    } else {
        input.style.border = "1px solid green";
        parent.querySelector("small").innerText = "";
        validator = true;
    }
    });

    return validator;
}

function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
    if (dayInp.value > day) {
        day = day + months[month - 2];
        month = month - 1;
    }
    if (monthInp.value > month) {
        month = month + 12;
        year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerText = d;
    monthOtp.innerText = m;
    yearOtp.innerText = y;
    }
}

form.addEventListener("submit", handleSubmit);
