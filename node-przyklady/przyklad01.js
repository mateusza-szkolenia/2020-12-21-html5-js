var uczniowie1 = [
    {
      "imie": "Daniel",
      "nazwisko": "T.",
      "oceny": "6 5 6 6 5 4 5"
    },
    {
      "imie": "Maksymilian",
      "nazwisko": "E.",
      "oceny": "4 3 4 4 3 4 4"
    },
    {
      "imie": "Agnieszka",
      "nazwisko": "E.",
      "oceny": "2 4 4 4 4 2 3"
    }
]

for ( u of uczniowie1 ){
    console.log(`${u.imie} ${u.nazwisko}: ${u.oceny.split(" ")}`)
}
