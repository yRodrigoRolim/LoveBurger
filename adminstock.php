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
    <main class="admin-add">
        <div class="admin-add-content">
            <div class="header-admin-add">
                <a class="pointer" href="admin.php">back</a>
                <p onclick="adminstock()">Admin Stock</p>
            </div>

            <div class="content-admin-stock" id="content-admin-stock">
                <div class="card-admin-stock">
                </div>
            </div>
        </div>
    </main>
    
    <?php
    include("connect.php");
    $consulta2 = "SELECT * FROM snack" ;
    $con = $mysqli->query($consulta2) or die ($mysqli->error);
    function user($teste){
        echo "<script>adminstock($teste);</script>";
    }
    while($dado = $con->fetch_array()) {
        $snackid = $dado["SnackID"];
        $snackname = $dado["NameSnack"];
        $snackprice = $dado["ValueSnack"];
        $snackstock = $dado["StockSnack"];
        $snackimg = $dado["ImgSnack"];
        $teste = "'$snackname','$snackprice','$snackstock','$snackid','$snackimg'";
        if (!Empty($snackid)){
            user($teste);
        }
    }
?>
</body>
</html>