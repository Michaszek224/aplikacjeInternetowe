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

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
}

function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}

function swapRows(b) {
    // Pobieramy tabelkę – zakładamy, że przycisk znajduje się bezpośrednio za tabelą.
    let tab = prevNode(b.previousSibling);
    // Pierwszy element w tabeli to <tbody> (przyjmujemy, że tabela ma <tbody>)
    let tBody = nextNode(tab.firstChild);
    // Pobieramy ostatni wiersz
    let lastNode = prevNode(tBody.lastChild);
    // Usuwamy ostatni wiersz
    tBody.removeChild(lastNode);
    // Pobieramy pierwszy wiersz
    let firstNode = nextNode(tBody.firstChild);
    // Wstawiamy usunięty wiersz przed pierwszym
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}

document.addEventListener("DOMContentLoaded", function() {
    alterRows(1, document.getElementsByTagName("tr")[0]);
});

console.log("form_check.js załadowany");
