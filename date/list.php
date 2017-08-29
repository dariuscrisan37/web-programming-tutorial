<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "web_dev";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM agenda";
$result = $conn->query($sql);

$contacte = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
//        echo "id: " . $row["id"]. " - Name: " . $row["first_name"]. " " . $row["last_name"].' phone: ' . $row["phone"]. "<br>";
        $contacte[] =array(
            "id" => $row ["id"],
            "firstName" => $row["first_name"],
            "lastName" => $row["last_name"],
            "phone" => $row["phone"]
        );
    }
} else {
    echo "0 results";
}
$conn->close();

echo json_encode($contacte, true);
?>