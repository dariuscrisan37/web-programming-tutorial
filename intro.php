Hello

<?php

$nume = gethostname() . " : " . get_current_user();

echo $nume;
echo "<br>";
$a = 4 + 7;

echo $a;


function add ($a, $b) {
    return $a + $b;
}
$r = add(2, 3);
echo "<br>";
echo $r;

?>

<?php

echo $r;

?>

<h1>Tabla inmultirii</h1>

<table>
    <?php $numar=31;
    for($i = 1; $i <= 10; $i++) {
        $r=$i*$numar;
        echo "<tr><td>$i</td><td>* $numar =  </td><td>$r</td></tr>";
    }
    ?>
</table>
