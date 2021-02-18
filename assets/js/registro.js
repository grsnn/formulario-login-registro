const form = document.querySelector('#form')
const messageAlert = document.querySelector('#message')
let messageSuccess = document.querySelector('#messageSuccess')
let back = document.querySelector('.background')
let btn = document.querySelector('#btn')
let close = document.querySelector('#close')

let message = ''

let name = document.querySelector('#name')
let email = document.querySelector('#email')
let pass = document.querySelector('#pass')
let cpass = document.querySelector('#cpass')


const expression = {
    nameC: /^[a-zA-Z\s]{1,40}$/,
    emailC: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{6,16}$/
}

let messageShow = [
    '<li>Todos los campos son requeridos !</li>',
    '<li>Correo electrónico invalido !</li>',
    '<li>Nombre invalido !</li>',
    '<li>Las contraseñas ingresadas no coinciden !</li>',
    '<li>La contraseña ingresada es muy corta !</li>'
]

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    back.classList.add('active')
    if(name.value == '' || email.value == '' || pass.value == '' || cpass.value == ''){
        message = messageShow[0]
    }else{
        if(!expression.password.test(pass.value)){
            message = messageShow[4]
        }
        if(pass.value !== cpass.value){
            message = messageShow[3]
        }
        if(!expression.emailC.test(email.value)){
            message = messageShow[1]
        }
        if(!expression.nameC.test(name.value)){
            message = messageShow[2]
        }
    }
    
       
    if(message == ''){
        back.classList.add('active')
        btn.innerHTML = 'Espere...'
        setTimeout(() => {
            back.classList.remove('active')
            btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Registrarme'
            form.reset()
            messageSuccess.classList.add('active')
        }, 5000);
    }else{
        messageAlert.classList.add('active')
        messageAlert.innerHTML = message
        setTimeout(() => {
        messageAlert.classList.remove('active')
        messageAlert.innerHTML = ''
        message = ''
        back.classList.remove('active')
    }, 5000);
    }
})

close.addEventListener('click', () =>{
    messageSuccess.classList.remove('active')
})
