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

class Bomba {
    constructor(x,y){
        this.x=x
        this.y=y
        this.czas_eksplozji = (new Date()).getTime()/1000
        this.moc = 100
    }
    promien(){
        return this.czas()*100
    }

    czas(){
        return ((new Date()).getTime()/1000) - this.czas_eksplozji
    }

    moc_chwilowa(){
        var dt = this.czas()
        return this.moc/dt/dt
    }
}

var Gra = {
    bazy: (new Array(10))
        .fill()
        .map( x => new Baza( Math.random() * 800, Math.random() * 600 ) ),
    bomby: [],
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
        Gra.celownik.przesun( wsp.x, wsp.y )
    }
    Gra.cnv.onclick = function(e){
        if ( Gra.bomby.length >= 3 ){
            return true
        }
        var wsp = getMousePos( Gra.cnv, e )
        var bomba = new Bomba(wsp.x, wsp.y)
        Gra.bomby.push(bomba)
    }
    krok_gry()
}

function wczytaj_obrazek( nazwa, plik ){
    Gra.obrazki[nazwa] = new Image()
    Gra.obrazki[nazwa].src = plik
}

function krok_gry(){
    rysuj()

    Gra.bomby = Gra.bomby.filter( b => b.czas() < 3 )
    Gra.bazy = Gra.bazy.filter( b => b.stan > 0 )

    for ( const bo of Gra.bomby ){
        var pr = bo.promien()
        var moc = bo.moc_chwilowa()
        for ( const ba of Gra.bazy ){
            if ( odleglosc( bo, ba ) < pr ){
                ba.stan -= moc/10
            }
        }
    }

    window.requestAnimationFrame( krok_gry )
}
function rysuj(){
    //Gra.ctx.fillStyle = "#ffffff"
    Gra.ctx.clearRect(0,0,800,600)
    //Gra.ctx.fill()
    rysuj_bomby()
    rysuj_bazy()
    rysuj_celownik()
}

function rysuj_celownik(){
    Gra.ctx.drawImage( Gra.obrazki["celownik"], Gra.celownik.x-64, Gra.celownik.y-64)
}

function rysuj_baze( ctx, baza ){
    const rozm = 10
    if ( baza.stan > 50 ){
        var R = (100 - baza.stan)*2
        var G = 100
    }
    else {
        var R = 100
        var G = (baza.stan - 50 )*2
    }
    ctx.beginPath()
    ctx.rect( baza.x - rozm/2, baza.y - rozm/2, rozm, rozm );
    ctx.fillStyle = `rgb( ${R}%, ${G}%, 0% )`
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

function rysuj_bomby(){
    for ( const bomba of Gra.bomby ){
        rysuj_bombe(Gra.ctx, bomba)
    }
}

function odleglosc( a, b ){
    return Math.sqrt( (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y) )
}

function rysuj_bombe(ctx, bomba){
    ctx.beginPath()
    ctx.fillStyle = `rgba(255, 0, 0, ${bomba.moc_chwilowa()/100})`
    ctx.arc( bomba.x, bomba.y, bomba.promien(), 0, 2*Math.PI )
    ctx.fill()
}

window.onload = inicjacja