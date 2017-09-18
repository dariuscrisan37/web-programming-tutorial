<html>
<head>
    <meta http-equiv="refresh" content="5;url=../contacte.html" />
</head>
<body>

<?php
$contentString = file_get_contents("contacte.json");
$contacte = json_decode($contentString, true);

$newPerson = array(
    "id" => 5,
    "firstName" => $_GET["firstName"],
    "lastName" => $_GET["lastName"],
    "phone" => $_GET["phone"]
);

$contacte[] = $newPerson;

$contentString = json_encode($contacte, true);
file_put_contents ("contacte.json", $contentString);
?>


contact added...

</body>
</html>