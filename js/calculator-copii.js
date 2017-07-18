function tatiCatFacAdunareaNumerelor (a, b){
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    }
    else {
        max = b;
        min = a;
    }
    console.info("numarul cel mai mare este " + max);
    console.info("vom numara " + min + " degete");

    //min = min - 1;
    //min -= 1;
    //min += -1;
    //min -- "daca scadem doar cate 1";
    /*la for ;; sunt spatii intre 3 procedee,
    cel din mijloc repeta,
    cel din spate decide procedeul;
    cel din fata e procedeul de pornire;*/


    for(min-- ;min >= 0; min-- ){
       // aici vrem sa numaram
        max++;
        console.info ("avem " + max + " degetele");
        console.info("au ramas " + min + " degetele");
        console.info("Avem " + max + " degetele si au mai ramas de numarat " + min + " degetele")
    }

    return max;
}

var rezultat;

console.info(rezultat);

var rezultat = tatiCatFacAdunareaNumerelor(3, 5);
console.info(rezultat);
rezultat = tatiCatFacAdunareaNumerelor(7, 2);
console.info(rezultat);

//wrong var names
/*
var 1v;
var %odd;
var ^sss;
var r^x

to use _ and 123 after the name without space..
*/

