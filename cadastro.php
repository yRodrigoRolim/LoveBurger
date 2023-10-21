<?php
function cadastro(){
    include("connect.php");
    $email = $_POST["emailsignup"];
    $senha = $_POST["passwordsignup"];
    $nickname = $_POST["nicknamesignup"];
    
    $sql = "INSERT INTO users(Email, password, Nickname) VALUES ('$email','$senha','$nickname');";

    if(mysqli_query($mysqli, $sql)){
        echo("Usuário cadastrado");
        header('Location: http://localhost/loveburger/singpage.html');
        die();
    }
}
cadastro();
?>