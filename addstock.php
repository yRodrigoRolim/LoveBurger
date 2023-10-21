<?php
include("connect.php");
if(isset($_FILES['imagemlanch'])){
    $arquivo = $_FILES['imagemlanch'];
    if($arquivo['size'] > 4194304){
        die("Seu arquivo é muito extenso");
    }
    if($arquivo['error']){
        die("ERRO");
        header('Location: http://localhost/loveburger/adminadd.html');  
    }
    $pasta = "imglanche/";
    $nomedoarquivo = $arquivo['name'];
    $novonomearquivo = uniqid();
    $extensao = strtolower(pathinfo($nomedoarquivo, PATHINFO_EXTENSION));
    if($extensao != "png" && $extensao != "jpg" && $extensao != "jpeg"){
        die("Arquivo inválido");
        header('Location: http://localhost/loveburger/adminadd.html');
    };
    $path = "$pasta$novonomearquivo.$extensao";
    $Deu_certo = move_uploaded_file($arquivo['tmp_name'], $path);
    if($Deu_certo){
        $NameSnack = $_POST['namestack'];
        $ValueSnack = $_POST['pricestack'];
        $StockSnack = $_POST['qntstack'];
        $sql = "INSERT INTO snack(NameSnack, ValueSnack, StockSnack, ImgSnack) VALUES ('$NameSnack','$ValueSnack','$StockSnack','$path');";

    if(mysqli_query($mysqli, $sql)){
        header('Location: http://localhost/loveburger/adminadd.html');
    }
    }

}
?>