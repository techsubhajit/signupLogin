let name1 = document.querySelector('#loginName');
let email = document.querySelector('#loginEmail');
let date = document.querySelector('#loginDate');
let submit = document.querySelector('#submit');
let form = document.querySelector('#loginForm');

form.addEventListener('submit', loginForm)

const arr = [];
let id = 0;

function loginForm(e) {
    e.preventDefault();
    let nameValue = name1.value;
    let emailValue = email.value;
    let dateValue = date.value;

    if (window.localStorage.getItem("users")) {
        JSON.parse(window.localStorage.getItem("users")).map((value) => {
            arr.push(value);
            id = value.id;
            console.log(id);
        });
    }

    var obj = { nameValue, emailValue, dateValue };
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    setTimeout(()=>{
        alert("Form Fillup Sucessfully")
        form.reset();
    },1000);
}













