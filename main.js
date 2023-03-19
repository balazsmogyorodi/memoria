//window.addEventListener("load", init);
const kartyaHatat = "kepek/kartyahat.png";
const kartyaLapok = [
    "kepek/banjo-and-kazooie.png",
    "kepek/kirby.png",
    "kepek/link.png",
    "kepek/pac-man.png",
    "kepek/zero_suit_samus.png",
    "kepek/steve.png"
]
const pakli = [];
for (let index = 0; index < kartyaLapok.length; index++) {
    pakli.push(index)
    pakli.push(index)
}


pakli.sort(function () { return 0.5 - Math.random() });

let kivalasztot = [];

$(window).ready(function () {
    const lefedettLapok = $("#jatek");
    let tartalom = kartyak();
    lefedettLapok.append(tartalom)
    const lapForditas = $("#jatek img");
    lapForditas.on("click", forditas);





});


function kartyak() {
    let kiiras = "";
    for (let index = 0; index < pakli.length; index++) {
        kiiras += `<div class='kartya'> <img src="${kartyaHatat}" alt='memoria' class='kep' id="${index}"> </div>`;
    }
    console.log(kiiras);
    return kiiras;
}


function forditas() {
    const kep = $(this);
    console.log(kep);
    console.log(kep.attr("id"));
    const hanyadik = kep.attr("id");
    kivalasztot.push(hanyadik);
    ellenorzes(hanyadik);
    kep.attr("src", kartyaLapok[pakli[hanyadik]]);
}

function ellenorzes(hanyadik){
    if (kivalasztot.length == 2) {
        if (pakli[kivalasztot[0]] ==pakli[kivalasztot[1]]) {
           talalt();
        }
        else{ 
            nemtalalt();
        }

    }

function talalt(){
    console.log("Talált");

    kivalasztot = [];
}

function nemtalalt() {
    const kep1 = `#${kivalasztot[0]}`;
    const kep2 = `#${kivalasztot[1]}`;
    kep1.attr("src", kartyaHatat);
    kep2.attr("src", kartyaHatat);
    kivalasztot = [];
    console.log("Nem talált");
}


}





