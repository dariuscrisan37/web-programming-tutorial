<html>
<head>
    <meta http-equiv="refresh" content="0;url=../contacte.html" />
</head>
<body>

<?php
$contentString = file_get_contents("contacte.json");
$contacte = json_decode($contentString, true);

function getNextId(){
    $idString = file_get_contents("last.contact.id");
    $id = intval($idString);
    $id++;
    file_put_contents("last.contact.id", $id);
    return $id;
}

//$last_item    = end($contacte);
//$last_contact_id = $last_item['id'];

$id = getNextId ();

$newPerson = array(
    'id' => $id,
    "firstName" => $_GET["firstName"],
    "lastName" => $_GET["lastName"],
    "phone" => $_GET["phone"],
);

$contacte[] = $newPerson;  //add new person into array

$contentString = json_encode($contacte);
file_put_contents("contacte.json", $contentString);

?>

contact added...
</body>
</html>