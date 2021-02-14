let password = document.querySelector('#password');
let pdiv = document.querySelector('#pdiv');
let bad = "Bad";
let few = "Few";






password.addEventListener('input', function (event) { // при изменении поля (потеря фокуса)
    if (password.value.length <= 4) {
        pdiv.innerText = bad;

    }
    else if (password.value.length < 8) {
        pdiv.innerText = few;

    }
    else {
        pdiv.innerText = "Good";
    }
});






let randomdiv = document.querySelector('#randomdiv');
let innum = document.querySelector('#number')

button.addEventListener('click', function (event) {

    let num = Math.ceil(Math.random() * 5);

    if (innum.value == num) {
        randomdiv.innerText = "good " + num;
    }
    else {
        randomdiv.innerText = "bad " + num;
    }





})





