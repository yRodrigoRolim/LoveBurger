function lanches(NomeLanche, ValorLanche, ImagemLanche){
    /*Variaveis variaveis*/

    /*Var*/
    var reference = document.getElementById("menu");
    var menuitem = document.createElement("div");
    var imglanch = document.createElement("img");
    var h2 = document.createElement("h2");
    var menuvalue = document.createElement("div");
    var valueproduct = document.createElement("p");
    var menutype = document.createElement("div");
    var menuvaluenumber = document.createElement("div");
    var plus = document.createElement("img");
    var numbervalue = document.createElement("div");
    var pnoclass = document.createElement("p");
    var addacart = document.createElement("p");
    var btn = document.createElement("button");
    /*Class*/
    menuitem.classList = "menu-item";
    imglanch.classList = "img-lanch";
    menuvalue.classList = "manu-values"
    valueproduct.classList = "value-product";
    menutype.classList = "menu-type";
    menuvaluenumber.classList = "menu-value-number";
    plus.classList = "plus";
    btn.classList = "plus";
    numbervalue.classList = "number-value";
    addacart.classList = "add-a-cart";
    /*Src*/
    imglanch.src = ImagemLanche;
    plus.src = "imgs/Plus.png";
    /*Inner HTML*/
    h2.innerHTML = NomeLanche;
    valueproduct.innerHTML = ValorLanche + "U$";
    pnoclass.innerHTML = "0";
    addacart.innerHTML = "ADD A CART"
    /*Append*/
    reference.appendChild(menuitem);
    menuitem.appendChild(imglanch);
    menuitem.appendChild(h2);
    menuitem.appendChild(menuvalue);
    menuvalue.appendChild(valueproduct);
    menuvalue.appendChild(menutype);
    menutype.appendChild(menuvaluenumber);
    menutype.appendChild(addacart);
    menuvaluenumber.appendChild(plus);
    menuvaluenumber.appendChild(btn);
    menuvaluenumber.appendChild(numbervalue);
    numbervalue.appendChild(pnoclass);
}

function cart(){
    /*Var variavel*/
    var imagemLanche = "imgs/pngegg.png";
    var NomeLanche = "French Fries";
    var ValorLanche = "21.75U$";
    /*Var*/
    var reference = document.getElementById("cart-main");
    var itemcart = document.createElement("div");
    var cartinfo = document.createElement("div");
    var img = document.createElement("img");
    var iteminfocart = document.createElement("div");
    var namelanch = document.createElement("p");
    var colorgreen = document.createElement("p");
    var iteminfoqnt = document.createElement("div")
    var pnoclass = document.createElement("p");
    var input = document.createElement("input");
    var iteminfocart2 = document.createElement("div");
    var cartvalue = document.createElement("p");
    var colorgreen2 = document.createElement("p");
    var colorred = document.createElement("p");

    /*Class*/
    itemcart.classList = "item-cart";
    iteminfocart.classList = "item-info-cart";
    cartinfo.classList = "cart-infos"
    namelanch.classList = "name-lanch";
    colorgreen.classList = "color-green";
    iteminfoqnt.classList = "item-info-qnt";
    iteminfocart2.classList = "item-info-cart";
    cartvalue.classList = "cart-value";
    colorgreen2.classList = "color-green";
    colorred.classList = "color-red pointer";
    /*input*/
    input.type = "number";
    input.max = "9";
    input.maxLength = "1";
    input.value = "1";
    /*Src*/
    img.src = imagemLanche;
    /*Inner HTML*/
    namelanch.innerHTML = NomeLanche;
    colorgreen.innerHTML = "STOCK ON"
    pnoclass.innerHTML = "Qnt: "
    cartvalue.innerHTML = ValorLanche;
    colorgreen2.innerHTML = "3x without interest on the card"
    colorred.innerHTML = "REMOVE FROM YOUR CART";
    /*Append*/
    reference.appendChild(itemcart);
    itemcart.appendChild(img);
    itemcart.appendChild(cartinfo);
    cartinfo.appendChild(iteminfocart);
    iteminfocart.appendChild(namelanch);
    iteminfocart.appendChild(colorgreen);
    iteminfocart.appendChild(iteminfoqnt);
    iteminfoqnt.appendChild(pnoclass);
    iteminfoqnt.appendChild(input);
    cartinfo.appendChild(iteminfocart2);
    iteminfocart2.appendChild(cartvalue);
    iteminfocart2.appendChild(colorgreen2);
    iteminfocart2.appendChild(colorred);
    console.log(itemcart);
}

function tradecardsingup(){
    /*Animations*/
    var rightcard = document.getElementById("right-card");
    rightcard.classList.remove("animate1");
    
    var card = document.getElementById("card");
    card.classList.add("animate2");

    /*DisplayNone*/
    var signup = document.getElementById("SignUp");
    var signin = document.getElementById("SignIn");

    signup.classList.add("displaynone");
    signin.classList.remove("displaynone");

}
function tradecardsingin(){
    var card = document.getElementById("card");
    card.classList.remove("animate2back");

    var rightcard = document.getElementById("right-card");
    rightcard.classList.add("animate1back");

    var signup = document.getElementById("SignUp");
    var signin = document.getElementById("SignIn");

    signin.classList.add("displaynone")
    signup.classList.remove("displaynone");
}

function animations(){
    var rightcard = document.getElementById("right-card");
    rightcard.classList.remove("animate1back")
    rightcard.classList.add("animate1");
    setTimeout(tradecardsingup, 1200);
}

function animations2(){
    var card = document.getElementById("card");
    card.classList.add("animate2back");
    setTimeout(tradecardsingin, 1200);
}

function adminstock(snackname,snackprice,snackstock,snackid,snackimg){
    /*VARIAVEIS*/
    var cardref = document.getElementById("content-admin-stock");
    var card = document.createElement("div");
    var stockimg = document.createElement("div");
    var stockimgimg = document.createElement("img");
    var bdadminstockinfo = document.createElement("div");
    var stockform = document.createElement("form");
    var inputname = document.createElement("input");
    var inputprice = document.createElement("input");
    var inputstock = document.createElement("input");
    var inputid = document.createElement("input");
    var inputupdate = document.createElement("input");
    var inputdelete = document.createElement("input");

    /*Apeend childs*/
    cardref.appendChild(card);
    card.appendChild(stockimg);
    stockimg.appendChild(stockimgimg); /*AAAAAA*/
    card.appendChild(bdadminstockinfo);
    bdadminstockinfo.appendChild(stockform);
    stockform.appendChild(inputname);
    stockform.appendChild(inputprice);
    stockform.appendChild(inputstock);
    stockform.appendChild(inputid);
    stockform.appendChild(inputupdate);
    stockform.appendChild(inputdelete);

    /*CLASS*/
    card.classList = "card-admin-stock";
    stockimg.classList = "admin-stock-img";
    bdadminstockinfo.classList = "bd-admin-stock-info";
    inputupdate.classList = "admin-update pointer";
    inputdelete.classList = "admin-delete pointer";

    /*input*/
    inputname.type = "text";
    inputprice.type = "number";
    inputstock.type = "number";
    inputid.type = "text";
    inputupdate.type = "submit";
    inputdelete.type = "submit";
    

    /*input*/
    inputname.value = snackname;
    inputprice.value = snackprice;
    inputstock.value = snackstock;
    inputid.value = snackid;
    inputupdate.value = "UPDATE";
    inputdelete.value = "DELETE";

    /*stockimgimg*/
    stockimgimg.src = snackimg;
    inputid.disabled = true;
}

function adduser2(){
    /*VAR*/
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
    userEmaildiv.classList.add("btn-admin");
    userRequestdiv.classList.add("btn-admin");

    /*Conteudo*/
    userIDdiv.innerHTML = "userphpid";
    userNicknamediv.innerHTML = "usernicknamephp";
    userEmaildiv.innerHTML= "useremailphp";
    userRequestdiv.innerHTML= "0";
}

