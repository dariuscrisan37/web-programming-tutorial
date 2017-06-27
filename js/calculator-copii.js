function CatFacAdunareaNumerelor(a, b) {
    console.info("primul numar este " + a);
    console.info("al dolea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    }
    console.info("numarul cel mai mare este " +max);
    console.info("vom numara " + min + " degetele");

    for(min-- ;min >= 0; min--) {
        // aici vrem sa numaram
        max++;
        console.info("avem " + max + " degetele, au ramas " + min + " degetele");
    }

    return a + b;
}   var rezultat;
rezultat = CatFacAdunareaNumerelor(3, 5);
console.info(rezultat);

var rezultat = CatFacAdunareaNumerelor(7, 2);
console.info(rezultat);


/**
 * Created by Alex on 6/20/2017.
 */
