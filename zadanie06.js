
function wyswietl_uczniow( uczniowie, elem ){
    var t = document.createElement("table")
    
    /*
    var porownaj_in = function( a, b ){
        var in1 = a.nazwisko + " " + a.imie
        var in2 = b.nazwisko + " " + b.imie
        return in1.localeCompare(in2)
    }

    uczniowie.sort( porownaj_in )
    */

    uczniowie.sort( (a,b) => (`${a.nazwisko} ${a.imie}`).localeCompare(`${b.nazwisko} ${b.imie}`) )

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
    var ksr = document.createElement("td")

    ki.innerText = uczen.imie
    kn.innerText = uczen.nazwisko
    ko.innerText = uczen.oceny
    var oceny = uczen.oceny.split(" ").map(x=>parseInt(x))
    var srednia = oceny.reduce( (a,b)=>a+b )/oceny.length
    ksr.innerText = srednia.toFixed(2)

    w.append(ki, kn, ko, ksr)
    elem.append(w)
}

function dopisz_naglowki( obiekt, elem ){
    var w = document.createElement("tr")
    for ( var k in obiekt ){
        var nagl = document.createElement("th")
        nagl.innerText = k
        w.append(nagl)
    }
    var nagl = document.createElement("th")
    nagl.innerText = "średnia"
    w.append(nagl)

    elem.append(w)
}

function wyswietl_prymusa( uczniowie, elem ){
    var t = document.createElement("table")
    
    var prymus = znajdz_prymusa( uczniowie )
    dopisz_ucznia( prymus, t )

    elem.append(t)
}

function srednia_ucznia( uczen ){
    return ( x => x.reduce((a,b) => a+b)/x.length )( uczen.oceny.split(" ").map(x=>parseInt(x)) )
}

function znajdz_prymusa( uczniowie ){
    var prymus = null
    var srednia_max = 0.0

    for ( var u of uczniowie ){
        if ( srednia_ucznia(u) > srednia_max ){
            prymus = u
            srednia_max = srednia_ucznia(u)
        }
    }
    return prymus
}