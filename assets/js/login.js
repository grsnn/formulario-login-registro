const formLogin = document.querySelector('#formLogin')
let error = document.querySelector('#error')
let back = document.querySelector('.background')
let btn = document.querySelector('#btn')
let close = document.querySelector('#close')
let email = document.querySelector('#email')
let pass = document.querySelector('#pass')

let messageSuccess = document.querySelector('#messageSuccess')
let errors = ''

const expression = {
	emailL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const datas = ['gerson@gmail.com','hola1234']

let messageError = () =>{
    setTimeout(() => {
        errors = ''
        error.innerHTML = ''
        email.focus()
        error.classList.remove('active')
        back.classList.remove('active')
    }, 5000);
}

let messageText = [
    '<li>Todos los campos son requeridos !</li>',
    '<li>Correo electrónico invalido !</li>',
    '<li>Los datos ingresados son invalos !</li>'
]

formLogin.addEventListener('submit', (e) =>{
    e.preventDefault()
    back.classList.add('active')

    if(email.value == '' || pass.value == ''){
        errors = messageText[0]
    }else{
        if(!expression.emailL.test(email.value)){
            errors = messageText[1]
        }
    }
       
    if(errors == ''){
        if(email.value == datas[0] && pass.value == datas[1]){
            back.classList.add('active')
            btn.innerHTML = 'Espere...'
            setTimeout(() => {
                back.classList.remove('active')
                btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Registrarme'
                formLogin.reset()
                messageSuccess.classList.add('active')
            }, 5000);
        }else{
            error.innerHTML = messageText[2]
            error.classList.add('active')
            messageError()
        }
    }else{
        error.classList.add('active')
        error.innerHTML = errors
        messageError()
    }
})

close.addEventListener('click', () =>{
    messageSuccess.classList.remove('active')
})