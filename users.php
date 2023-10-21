<?php
include("connect.php");

$consulta = "SELECT * FROM users" ;
$con = $mysqli->query($consulta) or die ($mysqli->error);

while($dado = $con->fetch_array()){

}
?>