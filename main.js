//window.addEventListener("load", init);
const kartyaHatat = "kepek/kartyahat.png";
const list = [
    { kep: "kepek/banjo-and-kazooie.png", id: "1" },
    { kep: "kepek/banjo-and-kazooie.png",id: "1" },
    { kep: "kepek/kirby.png", id: "2" },
    { kep: "kepek/kirby.png", id: "2" },
    { kep: "kepek/link.png" , id: "3"},
    { kep: "kepek/link.png" , id: "3"},
    { kep: "kepek/pac-man.png" , id: "4"},
    { kep: "kepek/pac-man.png" , id: "4"},
    { kep: "kepek/zero_suit_samus.png", id: "5" },
    { kep: "kepek/zero_suit_samus.png" , id: "5"},
    { kep: "kepek/steve.png" , id: "6"},
    { kep: "kepek/steve.png" , id: "6"}];
    list.sort(function(){return 0.5 - Math.random()});
    list.sort(function(){return 0.5 - Math.random()});

const kivalasztot = [];
const memoriaKartyak = [];

$(window).ready(function () {
    const lefedettLapok = $("#jatek");
    let tartalom = kartyak();
    lefedettLapok.append(tartalom)
    const lapForditas = $("#jatek img");
    lapForditas.on("click", forditas);



   
   
});


function kartyak() {
    let kiiras = "";
        for (let index = 0; index < list.length; index++) {
            kiiras += `<div class='kartya'> <img src="${kartyaHatat}" alt='memoria' class='kep' id="${list[index].id}"> </div>`;
        }
    console.log(kiiras);
    return kiiras;
}


function forditas() {
    const aktkep = event.target;
    console.log(aktkep.id)



}





