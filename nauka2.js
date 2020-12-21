var aaa = document.querySelector("#hej")
aaa.innerText = "Halo halo"

var pory_roku = document.querySelectorAll("#poryroku li");

for(var i = 0; i < pory_roku.length; i++){
    if ( i > 1 ){
        pory_roku[i].classList.add("wazne");
    }
    pory_roku[i].classList.add("duze")
}
