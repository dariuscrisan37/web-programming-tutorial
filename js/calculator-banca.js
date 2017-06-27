

// primul script
console.info("salut");

function getinfo(name) {
    var msg = "Salut " + name;
    return msg;
}
var mesaj = getinfo("Alex");
console.info(mesaj);

function adunaNumerele(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " +b);
    var rezultat = a + b;
    rezultat = rezultat * 0.9;
    return rezultat;
}
var calculat = adunaNumerele(2, 3);
console.info(calculat);




/*function suma(a, b) {
 console.info("Primul numar este " +a);
 console.info("Dragul tatei, luam 6 degetele si vom aduga cate un deget");
 suma = a + 1;

 console.info("")
 }*//**
 * Created by Alex on 6/20/2017.
 */
