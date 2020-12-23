function Baza( x, y ){
    this.x = x
    this.y = y
    this.stan = 100
    this.opiszSie = function(){
        console.log(`Baza: ${this.x} ${this.y} ${this.stan}`)
    }
}

class Celownik {
    constructor(){
        this.x = 0
        this.y = 0
    }
    przesun( x, y ){
        this.x = x
        this.y = y
    }
}

var Gra = {
    bazy: (new Array(10))
        .fill()
        .map( x => new Baza( Math.random() * 800, Math.random() * 600 ) ),
    celownik: new Celownik(),
    obrazki : {},
    cnv : null,
    ctx : null
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function inicjacja(){
    Gra.cnv = document.querySelector("#cnv")
    Gra.ctx = cnv.getContext("2d")
    wczytaj_obrazek("celownik", "celownik.png")

    Gra.cnv.onmousemove = function(e){
        var wsp = getMousePos( Gra.cnv, e )
        Gra.celownik.przesun( wsp.x - 64 , wsp.y - 64 )
    }
    krok_gry()
}

function wczytaj_obrazek( nazwa, plik ){
    Gra.obrazki[nazwa] = new Image()
    Gra.obrazki[nazwa].src = plik
}

function krok_gry(){
    rysuj()
    window.requestAnimationFrame( krok_gry )
}
function rysuj(){
    //Gra.ctx.fillStyle = "#ffffff"
    Gra.ctx.clearRect(0,0,800,600)
    //Gra.ctx.fill()
    rysuj_bazy( Gra.ctx, Gra.bazy )
    rysuj_celownik( Gra.ctx, Gra.celownik )
}

function rysuj_celownik(){
    Gra.ctx.drawImage( Gra.obrazki["celownik"], Gra.celownik.x, Gra.celownik.y )
}

function rysuj_baze( ctx, baza ){
    const rozm = 10
    ctx.rect( baza.x - rozm/2, baza.y - rozm/2, rozm, rozm );
    ctx.fillStyle = "#00ff00"
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = "#111"
    ctx.stroke()
}

function rysuj_bazy(){
    for ( const baza of Gra.bazy ){
        rysuj_baze(Gra.ctx, baza)
    }
}

window.onload = inicjacja