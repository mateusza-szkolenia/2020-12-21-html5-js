onmessage = function(msg){
    console.log("Worker otrzymał wiadomość 1:" + msg.data )
    postMessage( [1,3,5,6,78,89] )
}
