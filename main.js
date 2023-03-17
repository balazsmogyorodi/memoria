//window.addEventListener("load", init);

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
const kivalasztot = [];
const memoriaKartyak = [];

$(window).ready(function () {
    kartyak();
    jatek.on('click')
});




function kartyak() {
    const Element = $('#jatek');
    let kiiras = "";
    list.sort(function(){return 0.5 - Math.random()});
        for (let index = 0; index < list.length; index++) {
            kiiras += `<div class='kartya'> <img src='kepek/kartyahat.png' alt='memoria' class='kep' id=${list[index].id}> </div>`;
        }
    Element.append(kiiras);
    console.log(Element);

}

function jatek() {




}


