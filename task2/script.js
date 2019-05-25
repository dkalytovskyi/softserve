let uEmail = document.myForm.uEmail;
        let uPassword = document.myForm.uPassword;
        let uPassword2 = document.myForm.uPassword2;

        let uEmailOutput = document.getElementById("emailValid");
        let uPasswordOutput = document.getElementById("passwordValid");
        let uPassword2Output = document.getElementById("password2Valid");

        const firstEmailCheck = () => {
            if (uEmail.value.length==0) uEmailOutput.innerHTML = "This field must not be empty";
        }

        const firstPasswordCheck = () => {
            if (uPassword.value.length==0) uPasswordOutput.innerHTML = "This field must not be empty";
        }

        const firstPassword2Check = () => {
            if (uPassword2.value.length==0) uPassword2Output.innerHTML = "This field must not be empty";
        }
        
        const checkEmail = () => {
            if (uEmail.value.length==0) {
                uEmailOutput.innerHTML = "This field must not be empty";
            } else if (uEmail.value.search(/@/)==-1){
                uEmailOutput.innerHTML = "There is no '@' in the field";
            } else if (uEmail.value.search("\\.")==-1){
                uEmailOutput.innerHTML = "There is no '.' in the field";
            } else {
                uEmailOutput.innerHTML = "OK";
            }
        }

        const checkPassword = () => {
            if (uPassword.value.length==0) {
                uPasswordOutput.innerHTML = "This field must not be empty";
            } else if (uPassword.value.length<=8) {
                uPasswordOutput.innerHTML = "Your password must consist of at least 8 characters";
            } else if (uPassword.value.search(/[A-Z]/g)==-1){
                uPasswordOutput.innerHTML = "Your password must contain at least one upper-case symbol";
            } else if (uPassword.value.search(/[0-9]/g)==-1){
                uPasswordOutput.innerHTML = "Your password must contain at least one number";
            } else {
                uPasswordOutput.innerHTML = "OK";
            }
        }

        const checkPassword2 = () => {
            if (uPassword2.value.length==0) {
                uPassword2Output.innerHTML = "This field must not be empty";
            } else if (uPassword2.value != uPassword.value) {
                uPassword2Output.innerHTML = "Your passwords do not match";
            } else {
                uPassword2Output.innerHTML = "OK";
            }
        }