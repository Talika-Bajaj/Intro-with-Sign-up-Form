fname.addEventListener("focus", () => {
    document.querySelector('.fName').classList.add('active');
    document.getElementById('fname').style.borderColor = 'hsl(249, 10%, 26%)';
});
fname.addEventListener("focusout", () => {
    document.getElementById('fname').style.borderColor = 'hsl(246, 25%, 77%)';
    if (fname.value === "") {
        document.querySelector('.fName').classList.remove('active');
    }
});


lname.addEventListener("focus", () => {
    document.querySelector('.lName').classList.add('active');
    document.getElementById('lname').style.borderColor = 'hsl(249, 10%, 26%)';
});
lname.addEventListener("focusout", () => {
    document.getElementById('lname').style.borderColor = 'hsl(246, 25%, 77%)';
    if (lname.value === "") {
        document.querySelector('.lName').classList.remove('active');
    }
});


email.addEventListener("focus", () => {
    document.querySelector('.email').classList.add('active');
    document.getElementById('email').style.borderColor = 'hsl(249, 10%, 26%)';
});
email.addEventListener("focusout", () => {
    document.getElementById('email').style.borderColor = 'hsl(246, 25%, 77%)';
    if (email.value === "") {
        document.querySelector('.email').classList.remove('active');
    }
});


pwd.addEventListener("focus", () => {
    document.getElementById('pwd').style.borderColor = 'hsl(249, 10%, 26%)';
    document.querySelector('.pass').classList.add('active');
});
pwd.addEventListener("focusout", () => {
    document.getElementById('pwd').style.borderColor = 'hsl(246, 25%, 77%)';
    if (pwd.value === "") {
        document.querySelector('.pass').classList.remove('active');
    }
});


function validateEmail() {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === "") {
        document.getElementById('error-em').style.display = 'block';
        document.getElementById('error-email').style.display = 'block';
        document.getElementById('email').style.borderColor = 'hsl(0, 100%, 74%)';
    } else if (email.value.match(format)) {
        document.getElementById('email').value = '';
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('pwd').value = '';
        document.getElementById('error-msg').style.display = 'none';
        offFocus();
    } else {
        document.getElementById('error-msg').style.display = 'block';
        document.getElementById('email').style.borderColor = 'hsl(0, 100%, 74%)';
    }
}

const trialBtn = document.getElementById('trial-btn');

trialBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.getElementsByClassName('inputs');
    const errors = document.getElementsByClassName('error');
    const errorIcons = document.getElementsByClassName('error-icon');
    // const errorMsg = document.getElementById('error-msg');

    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        // console.log(element);
        if (element.value === '') {
            errors[index].style.display = 'block';
            errorIcons[index].style.display = 'block';
            element.style.borderColor = 'hsl(0, 100%, 74%)';

        } else {
            errors[index].style.display = 'none';
            errorIcons[index].style.display = 'none';
            element.style.borderColor = 'hsl(246, 25%, 77%)';
        }
    }

    validateEmail();
})


function offFocus() {
    const labels = document.getElementsByClassName('all-labels');
    const inputs = document.getElementsByClassName('inputs');
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        // const input = inputs[index];
        console.log(element.value);
        if (element.value == '') {
            labels[index].classList.remove('active');
            console.log('empty')
        } else {
            labels[index].classList.add('active');
        }
    }
}

const togglePassword = document.getElementById('toggle-password');
const passField = document.getElementById('pwd');
togglePassword.addEventListener('click', () => {
    const type = passField.getAttribute('type') === 'password' ? 'text' : 'password';
    passField.setAttribute('type', type);
})

function myFunction(x) {
    x.classList.toggle("bi-eye-slash-fill");
}