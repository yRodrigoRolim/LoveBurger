<?php
$hostname = "localhost";
$usuario = "root";
$senha = "";
$bancodedados = "loveburger";

$mysqli = mysqli_connect($hostname, $usuario, $senha, $bancodedados);
if(!$mysqli){
    die("Houve um erro".mysqli_connect_error());
}
?>