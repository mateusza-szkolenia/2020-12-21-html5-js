var fs = require('fs')

var data = fs.readFileSync("uczniowie02.txt")
var zawartoscpliku = data.toString()
var linie = zawartoscpliku.split("\n")
var rekordy = linie.map( l => l.trim().split(";") )
var uczniowie = rekordy.map( r => ({ 
    imie : r[0],
    nazwisko : r[1],
    oceny : r[2].split(" ")
}) )

for ( var u of uczniowie ){
    console.log(`${u.imie} ${u.nazwisko}: ${u.oceny}`)
}
