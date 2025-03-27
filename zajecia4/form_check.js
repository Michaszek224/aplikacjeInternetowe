function isEmpty(inputField) {
    if (inputField.length == 0) {
        return true;
    }
    return false;
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

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        return false;
    }
}

function checkStringAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        return true;
    }
}

function checkEmailAndFocus(obj) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (checkEmail(str)) {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "Podaj właściwy e-mail";
        obj.focus();
        return false;
    }
}

function validate(formularz) {
    // checkString(formularz.elements["f_imie"].value, "Wpisz imię!");
    // checkString(formularz.elements["f_nazwisko"].value, "Wpisz nazwisko!");
    // checkString(formularz.elements["f_kod"].value, "Wpisz kod pocztowy!");
    // checkString(formularz.elements["f_ulica"].value, "Wpisz ulicę!");
    // checkString(formularz.elements["f_miasto"].value, "Wpisz miasto!");
    // checkEmail(formularz.elements["f_email"].value);
    checkStringAndFocus(formularz.elements["f_imie"], "Wpisz imię!");
    checkStringAndFocus(formularz.elements["f_nazwisko"], "Wpisz nazwisko!");
    checkStringAndFocus(formularz.elements["f_kod"], "Wpisz kod pocztowy!");
    checkStringAndFocus(formularz.elements["f_ulica"], "Wpisz ulicę!");
    checkStringAndFocus(formularz.elements["f_miasto"], "Wpisz miasto!");
    checkEmailAndFocus(formularz.elements["f_email"]);

}

console.log("form_check.js załadowany");
