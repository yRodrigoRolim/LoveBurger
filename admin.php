<?php
    if(!isset($_SESSION )){
        session_start();
        $name = $_SESSION['name'];
        $id = $_SESSION['user'];
    }
    if($name != "admin" && $id != 16){
        header("Location: http://localhost/loveburger/index.php");
        die();
    }
?>
<!DOCTYPE html>
<html lang="pr-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LoveBurger</title>
    <link rel="stylesheet" href="style.css">
    <script src="js.js"></script>
</head>
<body>
    <header>
    <a href="index.php">LoveBurger</a>
        <a href="index.php">Menu</a>
        <a href="about.html">About</a>
        <a href="cart.html">Cart<img src="imgs/shopping.png"></a>
        <div class="user2"><a href="singpage.html">Rodrigo<img src="imgs/user.png"></a></div>
    </header>
    <main class="admin">
        <div class="admin-commands">ADMIN COMMANDS</div>
        <div class="admin-card-commands"><a href="adminuser.php">ADMIN USER</a></div>
        <div class="admin-card-commands"><a href="adminstock.php">ADMIN STOCK</a></div>
        <div class="admin-card-commands"><a href="adminadd.html">ADMIN ADD STOCK</a></div>
    </main>
</body>
</html>