mainDiv = document.getElementById("mainDiv");

document.onclick = () => {
    console.log("heyetdppopp");
}

document.addEventListener("keydown", function (e) {
    //console.log("fokarororo");
    if (e.key == "q") {
        console.log("q pressed");
        document.getElementById("thunderSound").play();
    }

    else
        console.log("q not pressed");
})