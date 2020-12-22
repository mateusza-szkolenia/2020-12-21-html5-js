
function wyswietl_uczniow( uczniowie, elem ){
    var t = document.createElement("table")
    
    dopisz_naglowki( uczniowie[0], t )
    for ( var u of uczniowie ){
        dopisz_ucznia( u, t )
    }
    elem.append(t)
}

function dopisz_ucznia( uczen, elem ){
    var w = document.createElement("tr")
    var ki = document.createElement("td")
    var kn = document.createElement("td")
    var ko = document.createElement("td")

    ki.innerText = uczen.imie
    kn.innerText = uczen.nazwisko
    ko.innerText = uczen.oceny

    w.append(ki, kn, ko)
    elem.append(w)
}

function dopisz_naglowki( obiekt, elem ){
    var w = document.createElement("tr")
    for ( var k in obiekt ){
        var nagl = document.createElement("th")
        nagl.innerText = k
        w.append(nagl)
    }
    elem.append(w)
}
