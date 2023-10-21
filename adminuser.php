<!DOCTYPE html>
<html lang="pr-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LoveBurger</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
    <a href="index.php">LoveBurger</a>
        <a href="index.php">Menu</a>
        <a href="about.html">About</a>
        <a href="cart.html">Cart<img src="imgs/shopping.png"></a>
        <div class="user2"><a href="singpage.html">Rodrigo<img src="imgs/user.png"></a></div>
    </header>
    <main class="admin-add2">
        <div class="header-admin-add2">
            <a class="pointer" href="admin.php">back</a>
            <p>Admin Stock</p>
        </div>
        <div class="admin-stock-btns">
            <div class="admin-stock" id="userID">
                <div class="btn-admin btn-admin-orange">ClientID</div>
            </div>

            <div class="admin-stock" id="userNickname">
                <div class="btn-admin btn-admin-orange">Name</div>
            </div>

            <div class="admin-stock" id="userEmail">
                <div class="btn-admin btn-admin-orange">E-mail</div>
            </div>

            <div class="admin-stock" id="userRequest">
                <div class="btn-admin btn-admin-orange">Requests</div>
            </div>
        </div>
    </main>
    <script src="createuser.js">
    </script>
    <?php
    include("connect.php");

    $consulta = "SELECT * FROM users" ;
    $con = $mysqli->query($consulta) or die ($mysqli->error);
    function user($teste){
        echo "<script>adduser($teste)</script>";
    }
    while($dado = $con->fetch_array()) {
        $id = $dado["UserID"];
        $nickname = $dado["Nickname"];
        $mail = $dado["Email"];
        $teste = "'$id','$nickname','$mail'";
        if (!Empty($id)){
            user($teste);
        }
    }
?>
</body>
</html>