<?php
include("connect.php");

function reback(){
    header("Location: http://localhost/loveburger/singpage.html");
    die();
}
if(isset($_POST['emailsignin']) && isset($_POST['passwordsignin'])){
    if(strlen($_POST['emailsignin']) == 0){
        reback();
    } elseif(strlen($_POST['passwordsignin']) == 0){
        reback();
    } else{

        $email = $mysqli->real_escape_string($_POST['emailsignin']);
        $senha = $mysqli->real_escape_string($_POST['passwordsignin']);

        $sql_code = "SELECT * FROM users WHERE Email = '$email' AND Password = '$senha'";
        $sql_query = $mysqli->query($sql_code) or die("Erro");
        $quantidade = $sql_query->num_rows;

        if ($quantidade == 1){
            $user = $sql_query->fetch_assoc();

            if(!isset($_SESSION )){
                session_start();
            }

            $_SESSION['user'] = $user['UserID'];
            $_SESSION['name'] = $user['Nickname'];
            $name = $_SESSION['name'];
            echo("Você está logado $name");
            header("Location: http://localhost/loveburger/index.php");
        } else{
            reback();
        }
        
    }
} else {
    reback();
}
?>