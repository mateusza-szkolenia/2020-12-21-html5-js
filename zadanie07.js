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