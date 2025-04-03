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

function isEmailInvalid(str) {
    let emailRegex = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z]{2,}$/;
    return !emailRegex.test(str);
}

function checkFieldAndFocus(obj, msg, validator) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2);
    if (validator(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else {
        // W przypadku braku błędu czyścimy komunikat
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function validate(formularz) {
    let valid = true;
    valid = checkFieldAndFocus(formularz.elements["f_imie"], "Wpisz imię!", isWhiteSpaceOrEmpty) && valid;
    valid = checkFieldAndFocus(formularz.elements["f_nazwisko"], "Wpisz nazwisko!", isWhiteSpaceOrEmpty) && valid;
    valid = checkFieldAndFocus(formularz.elements["f_kod"], "Wpisz kod pocztowy!", isWhiteSpaceOrEmpty) && valid;
    valid = checkFieldAndFocus(formularz.elements["f_ulica"], "Wpisz ulicę!", isWhiteSpaceOrEmpty) && valid;
    valid = checkFieldAndFocus(formularz.elements["f_miasto"], "Wpisz miasto!", isWhiteSpaceOrEmpty) && valid;
    valid = checkFieldAndFocus(formularz.elements["f_email"], "Podaj właściwy e-mail!", isEmailInvalid) && valid;
    return valid;
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}

function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}


console.log("form_check.js załadowany");
