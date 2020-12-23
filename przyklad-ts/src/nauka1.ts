console.log("Cześć")

function srednia( liczby : number[] ) : number {
    var suma : number = 0;
    for ( const liczba of liczby ){
        suma += liczba
    }
    return suma/liczby.length;
}

function suma_liczba( a : number, b : number ) : number {
    return a + b;
}

console.log( suma_liczba(4, 6))
console.log( srednia( [2,4,5,"Asd",1999] ))
console.log( srednia( [2,4,5,111,123] ))

