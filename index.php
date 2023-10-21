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
    <?php
        $name = "Sign In/Up";
    if(!isset($_SESSION)){
        session_start();
        if(!empty($_SESSION)){
        $name = $_SESSION['name'];
        $id = $_SESSION['user'];
        }
    }
    ?>
    <header>
    <a href="index.php">LoveBurger</a>
        <a href="index.php">Menu</a>
        <a href="about.html">About</a>
        <a href="cart.html">Cart<img src="imgs/shopping.png"></a>
        <?php if($name == "admin" && $id == "16"){echo('<a href="admin.php">Admin</a>');}?>
        <div class="user2"><a href="singpage.html"><?php echo($name);?><img src="imgs/user.png"></a></div>
    </header>
    <main id="main-menu" class="index-main">
        <div class="top-text">
            <h1 onclick="lanches('Combo','22.00U$','imgs/pngegg (1).png')">Menu</h1>
            <p>Discover all the options on our traditional snack menu and devour with love!</p>
        </div>
        <div class="menu" id="menu">
        <?php
    include("connect.php");
    $consulta2 = "SELECT * FROM snack" ;
    $con = $mysqli->query($consulta2) or die ($mysqli->error);
    function user($teste){
        echo "<script>lanches($teste);</script>";
    }
    while($dado = $con->fetch_array()) {
        $snackid = $dado["SnackID"];
        $snackname = $dado["NameSnack"];
        $snackprice = $dado["ValueSnack"];
        $snackstock = $dado["StockSnack"];
        $snackimg = $dado["ImgSnack"];
        $teste = "'$snackname','$snackprice','$snackimg'";
        if (!Empty($snackid)){
            user($teste);
        }
    }
?>

                </div>
            </div>
        </div>
    </main>

</body>
</html>