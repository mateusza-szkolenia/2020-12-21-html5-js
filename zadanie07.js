var konto = 100.0
var zaklady = []
var zwycieska_kombinacja = []

function losowy_uklad(){
    var kule = (new Array(18)).fill().map( (a,b)=>b+1 )

    var wylosowane = kule
        .map( x=>[ x, Math.random() ] )
        .sort( (a,b) => a[1] - b[1] )
        .map( x => x[0] )
        .slice(0,3)
        .sort( (a,b) => a - b )

    return wylosowane
}

function ile_trafien( zestaw_a, zestaw_b ){
    var trafienia = 0
    for ( var a of zestaw_a ){
        for ( var b of zestaw_b ){
            if ( a == b ){
                trafienia++
            }
        }
    }
    return trafienia
}

function wygrana( liczba_trafien ){
    return [ 0, 10.0, 1000.00, 10000.00 ][liczba_trafien]
}

function losowanie(){
    zwycieska_kombinacja = losowy_uklad()
    console.log( "Wylosowano: ", zwycieska_kombinacja )
    for ( var zaklad of zaklady ){
        var ile = ile_trafien( zaklad, zwycieska_kombinacja )
        var nagr = wygrana( ile )
        konto += nagr
        console.log("Sprawdzam zaklad: ", zaklad, ile, nagr )
    }
    zaklady = []
}

function obstaw_zaklad( zaklad ){
    zaklady.push( zaklad )
    konto -= 3.0
}
