function isEmpty(inputField) {
    if (inputField.length == 0) {
        return true;
    }
    return false;
}

function validate(formularz){
    if(isEmpty(formularz.elements["f_imie"].value)){
        alert("Podaj imie!");
        return false;
    }
    return true;
}

console.log("form_check.js załadowany");
