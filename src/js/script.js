
// Pegar todos os inputs
// faço um loop neles para checar cada um deles.
//



let checkValidator = (input) => {
    let dataRules = input.getAttribute('data-rules');
    if (dataRules !== null) {
        let dataDetails = dataRules.split('|');

        for (let i = 0; i < dataDetails.length; i++) {
            let rDetails = dataDetails[i].split('=');
            switch (rDetails[0]) {
                case 'email':
                    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!regex.test(input.value)) {
                        return 'Email Inválido';
                    }
                    break;
                case 'required':
                    if (input.value.length === 0) {
                        return 'O campo está vazio';
                    }
                    break;
                case 'min':
                    if (input.value.length <= rDetails[1]) {
                        return `Este campo deve ter no mínimo ${rDetails[1]} caracteres`;
                    }
                    break;
                case 'password':
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
                    if (!passwordRegex.test(input)) {
                        return `A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial`
                    }
                    break;
            }
        }

    }
    return true;
}
let showError = (input, error) => {
    input.style.border = '1px solid red';
    document.querySelector('.div-error').style.display = 'flex';
    console.log(error)

}

let showCorrect = (input) => {
    input.style.border = '1px solid green';
}

let handleSubmit = (event) => {
    event.preventDefault()
    let validatorForm = true;

    let inputs = document.querySelectorAll('input');


    inputs.forEach((input) => {
        let check = checkValidator(input);

        if (check === true) {
            showCorrect(input)
        }

        if (check !== true) {
            validatorForm = false;
            showError(input, check)
        }
    });



    if (validatorForm) {
        form.submit()
    }

}







let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit)