function rysuj(){
    var canv = document.querySelector("#cnv")
    var ctx = canv.getContext("2d")

    rysuj_bazy( ctx, Gra.bazy )

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

function rysuj_bazy( ctx, bazy ){
    for ( const baza of bazy ){
        rysuj_baze(ctx, baza)
    }
}

window.onload = rysuj