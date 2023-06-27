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
    /*Class*/
    menuitem.classList = "menu-item";
    imglanch.classList = "img-lanch";
    menuvalue.classList = "manu-values"
    valueproduct.classList = "value-product";
    menutype.classList = "menu-type";
    menuvaluenumber.classList = "menu-value-number";
    plus.classList = "plus";
    numbervalue.classList = "number-value";
    addacart.classList = "add-a-cart";
    /*Src*/
    imglanch.src = ImagemLanche;
    plus.src = "imgs/Plus.png";
    /*Inner HTML*/
    h2.innerHTML = NomeLanche;
    valueproduct.innerHTML = ValorLanche;
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