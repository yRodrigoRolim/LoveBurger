    function adduser(userphpid,usernicknamephp,useremailphp){
    var userID = document.getElementById("userID");
    var userNickname = document.getElementById("userNickname");
    var userEmail = document.getElementById("userEmail");
    var userRequest = document.getElementById("userRequest");
    var userIDdiv = document.createElement("div");
    var userNicknamediv = document.createElement("div");
    var userEmaildiv = document.createElement("div");
    var userRequestdiv = document.createElement("div");

    /*Criando div*/
    userID.appendChild(userIDdiv);
    userNickname.appendChild(userNicknamediv);
    userEmail.appendChild(userEmaildiv);
    userRequest.appendChild(userRequestdiv);

    /*CLASS*/
    userIDdiv.classList.add("btn-admin");
    userNicknamediv.classList.add("btn-admin");
    userEmaildiv.classList = "btn-admin smallletter";
    userRequestdiv.classList.add("btn-admin");

    /*Conteudo*/
    userIDdiv.innerHTML = userphpid;
    userNicknamediv.innerHTML = usernicknamephp;
    userEmaildiv.innerHTML= useremailphp;
    userRequestdiv.innerHTML= "0";
    }