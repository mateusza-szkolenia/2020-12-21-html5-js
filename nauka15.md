# wyciąganie informacji ze strony

1. Wejdź na https://www.wp.pl
2. Uruchom konsolę
3. Wpisz lub wklej:

```
[ ... document.querySelectorAll("aside.wc57lf-0 div.pcfpmu-2 a ") ]
    .map( x => x.innerText )
    .filter( x => x.search("USA") != -1 )
    .join("\n")
```
