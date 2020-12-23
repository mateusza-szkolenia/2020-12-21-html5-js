var fs = require('fs')

var data = fs.readFileSync("uczniowie04.json")
var uczniowie = JSON.parse( data.toString() )

for ( var u of uczniowie ){
    console.log(`${u.imie} ${u.nazwisko}: ${u.oceny}`)
}
