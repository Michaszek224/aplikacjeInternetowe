function isEmpty(inputField) {
    if (inputField.length == 0) {
        return true;
    }
    return false;
}

function validate(formularz) {
    checkString(formularz.elements["f_imie"].value, "Wpisz imię!");
    checkString(formularz.elements["f_nazwisko"].value, "Wpisz nazwisko!");
    checkString(formularz.elements["f_kod"].value, "Wpisz kod pocztowy!");
    checkString(formularz.elements["f_ulica"].value, "Wpisz ulicę!");
    checkString(formularz.elements["f_miasto"].value, "Wpisz miasto!");
}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function checkString(ciagZnakow, wiadomosc) {
    if (isWhiteSpaceOrEmpty(ciagZnakow)) {
        alert(wiadomosc);
        return false;
    }
    return true;
}

console.log("form_check.js załadowany");
