onmessage = function(msg){
    var rozkaz = msg.data

    var operacja = rozkaz.operacja
    var ile = rozkaz.ile
    console.log("Worker otrzymał wiadomość 1:" + msg.data )

    if ( operacja == "start" ){
        console.log("Zaczynam liczenie")
        var wynik = policz( ile )
        postMessage( { "stan" : "koniec", "wynik" : wynik })
    }

}

function policz(N){
    var trafienia = [ 0, 0, 0, 0, 0, 0, 0 ]
    var wylosowane = losowy_uklad()
    for ( var i = 0; i < N; i++ ){
        var ile = ile_trafien( wylosowane, losowy_uklad() )
        trafienia[ile]++
        if ( i % 20000 == 0 ){
            postMessage( { "stan" : "postep", "postep" : i/N, "wynik" : trafienia.map( x => (i / x).toFixed(1) ) })
        }
    }
    return trafienia.map( x => (N / x).toFixed(1) )
}

function losowy_uklad(){
    return (new Array(49))
        .fill()
        .map( (a,b)=>b+1 )
        .map( x=>[ x, Math.random() ] )
        .sort( (a,b) => a[1] - b[1] )
        .map( x => x[0] )
        .slice(0,6)
        .sort( (a,b) => a - b )
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