const inputs = document.querySelectorAll('input, textarea');
const enviar = document.querySelector('[name="enviar"]');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
        verificaCamposVacios();
    })
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
}

function verificaCamposVacios() {
    let campoNombre = document.querySelector("[name='nombre']");
    let campoEmail = document.querySelector("[name='email']");
    let campoAsunto = document.querySelector("[name='asunto']");
    let campoMensaje = document.querySelector("[name='mensaje']");

    if (campoNombre.value != ''&& campoEmail.value != '' && campoAsunto.value != ''&& campoMensaje.value != '') {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }

}

const validadores = {
    nombre:input => verificaNombre(input),
    email:input => verificaEmail(input),
    asunto:input => verificaAsunto(input),
    mensaje:input => verificaMensaje(input)
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]

const mensagensDeErro = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacío.',
        customError: 'El campo puede contener hasta 50 caracteres.',
    },
    email: {
        valueMissing: 'El e-mail es obligatorio.',
        customError: 'Campo inválido',
    },
    asunto: {
        valueMissing: 'El campo asunto es obligatorio.',
        customError: 'El campo puede contener hasta 50 caracteres',
    },
    mensaje: {
        valueMissing: 'El campo mensaje es obligatorio',
        customError: 'El mensaje puede contener como máximo 300 caracteres',
    }
}

function mostraMensajeDeErro(tipoDeInput, input) {
    let mensaje = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensaje = mensajeDeErro[tipoDeInput][erro];
        }
    })
    
    return mensaje;
}

function verificaNombre(input) {
    let mensaje = '';
    if (input.value.length >= 50){
        mensaje = 'El campo puede contener hasta 50 caracteres.';
    }
    if (!input.value.length){
        mensaje = 'Este campo es obligatorio';
    }

    input.setCustomValidity(mensaje);
}

function verificaEmail(input) {
    let mensaje = '';
    let mailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (!mailRegex.test(input.value)){
        mensaje = 'Formato de e-mail inválido';
    }
    if (!input.value.length){
        mensaje = 'Este campo es obligatorio';
    }

    input.setCustomValidity(mensaje);
    
}

function verificaAsunto(input) {
    let mensaje = ''
    if (input.value.length >= 50){
        mensaje = 'El campo puede contener hasta 50 caracteres';
    }

    if (!input.value.length) {
        mensaje = 'Este campo es obligatorio';
    }

    input.setCustomValidity(mensaje)
}

function verificaMensaje(input) {
    let mensaje = '';

    if (input.value.length >= 300){
        mensaje = 'Este campo permite hasta 300 caracteres';
    }

    if (!input.value.length) {
        mensaje = 'Este campo es obligatorio';
    }

    input.setCustomValidity(mensaje);
}