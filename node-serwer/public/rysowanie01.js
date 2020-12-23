function rysuj(){
    var canv = document.querySelector("#cnv")
    console.log(canv)
    var ctx = canv.getContext("2d")
    ctx.lineWidth = 20
    ctx.strokeStyle = "#181"
    ctx.moveTo( 0, 0)
    ctx.lineTo( 100, 100 )
    ctx.stroke()
}

window.onload = rysuj