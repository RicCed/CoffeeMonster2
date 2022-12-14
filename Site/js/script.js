"use strict"
let count = 0;
let array = [];

function brewedcoffee() {
  if (document.getElementById("brewed").classList.contains("hidden")) {
    document.getElementById("brewed").classList.remove("hidden");
    document.getElementById("brewed").classList.add("visible");
    document.getElementById("default").classList.add("hidden");
    document.getElementById("default").classList.remove("visible");
    document.getElementById("go-back").classList.add("visible");
    document.getElementById("go-back").classList.remove("hidden");
  }
}

function goback() {
  if (document.getElementById("brewed").classList.contains("visible")) {
    document.getElementById("brewed").classList.remove("visible");
    document.getElementById("brewed").classList.add("hidden");
    document.getElementById("default").classList.remove("hidden");
    document.getElementById("default").classList.add("visible");
    document.getElementById("go-back").classList.add("hidden");
    document.getElementById("go-back").classList.remove("visible");
  } else if (
    document.getElementById("menu-choice").classList.contains("hidden") !== true
  ) {
    document.getElementById("scroll-down").classList.remove("visible");
  } else if (
    document.getElementById("personalize").classList.contains("hidden") !== true
  ) {
    document.getElementById("personalize").classList.add("hidden");
    document.getElementById("brewed").classList.remove("hidden");
    document.getElementById("brewed").classList.add("visible");
    document.getElementById("menu-choice").classList.add("hidden");
    document.getElementById("scroll-down").classList.add("hidden");
  }
}

function personalize() {
  if (document.getElementById("personalize").classList.contains("hidden")) {
    document.getElementById("personalize").classList.remove("hidden");
    document.getElementById("brewed").classList.remove("visible");
    document.getElementById("brewed").classList.add("hidden");
    document.getElementById("scroll-down").classList.add("visible");
    document.getElementById("scroll-down").classList.remove("hidden");
  }
}

function extra(id, id2) {
  document.getElementById(id).classList.add("drawing");
  document.getElementById(id2).classList.remove("hidden");
  document.getElementById("menu-choice").classList.remove("hidden");
  if(id=="flavours"){
    document.getElementById("sweeteners").classList.remove("drawing");
    document.getElementById("toppings").classList.remove("drawing");
    document.getElementById("milk").classList.remove("drawing");
    document.getElementById("sweetener-choice").classList.add("hidden");
    document.getElementById("topping-choice").classList.add("hidden");
    document.getElementById("milk-choice").classList.add("hidden");
  }
  else if(id=="sweeteners"){
    document.getElementById("flavours").classList.remove("drawing");
    document.getElementById("toppings").classList.remove("drawing");
    document.getElementById("milk").classList.remove("drawing");
    document.getElementById("flavour-choice").classList.add("hidden");
    document.getElementById("topping-choice").classList.add("hidden");
    document.getElementById("milk-choice").classList.add("hidden");
  }
  else if(id=="toppings"){
    document.getElementById("flavours").classList.remove("drawing");
    document.getElementById("sweeteners").classList.remove("drawing");
    document.getElementById("milk").classList.remove("drawing");
    document.getElementById("flavour-choice").classList.add("hidden");
    document.getElementById("sweetener-choice").classList.add("hidden");
    document.getElementById("milk-choice").classList.add("hidden");
  }
  else{
    document.getElementById("flavours").classList.remove("drawing");
    document.getElementById("sweeteners").classList.remove("drawing");
    document.getElementById("toppings").classList.remove("drawing");
    document.getElementById("flavour-choice").classList.add("hidden");
    document.getElementById("sweetener-choice").classList.add("hidden");
    document.getElementById("topping-choice").classList.add("hidden");
  }
}

function readmore(){
  let tekst = document.getElementById("tekst");
  tekst.innerHTML += "You should avoid this habit as it could damage your stomach lining, cause indigestion and heartburn if drank on an empty stomach.<br> So, to enjoy this drink in the morning we recommend having your caffeine fix with a hearty breakfast.</p>";
  document.getElementById("readmore").classList.add("hidden");
}

function readmore2(){
  let tekst2 = document.getElementById("tekst2");
  tekst2.innerHTML += "You should avoid this habit as it could damage your stomach lining, cause indigestion and heartburn if drank on an empty stomach.<br> So, to enjoy this drink in the morning we recommend having your caffeine fix with a hearty breakfast.</p>";
  document.getElementById("readmore2").classList.add("hidden");
}

function flavour(id) {
  if(!document.getElementById(id).classList.contains("drawing")) {
  document.getElementById(id).classList.add("drawing");
  array[count] = id;
  count++;
  cup(count);
  } else {
  document.getElementById(id).classList.remove("drawing");
  array.pop();
  count--;
  cup(count);
  }
}

function cup(_number) {
  if (document.getElementById("small").classList.contains("size-active")) {
    if (_number == 0) {
    document.getElementById('cup').src="images/cups/Cups_Small - None.svg";
  } else if(_number == 1) {
    document.getElementById('cup').src="images/cups/Cups_Small - 1.svg";
  } else if(_number == 2) {
    document.getElementById('cup').src="images/cups/Cups_Small - 2.svg";
  } else if(_number == 3) {
    document.getElementById('cup').src="images/cups/Cups_Small - 3.svg"
  } else if(_number == 4) {
    document.getElementById('cup').src="images/cups/Cups_Small - 4.svg";
  } else if(_number == 5) {
    document.getElementById('cup').src="images/cups/Cups_Small - 5.svg";
  } else {
    document.getElementById('cup').src="images/cups/Cups_Small - 6.svg";
    }
  }
  if (document.getElementById("medium").classList.contains("size-active")) {
    if (_number == 0) {
    document.getElementById('cup').src="images/cups/Cups_Medium - None.svg";
  } else if(_number == 1) {
    document.getElementById('cup').src="images/cups/Cups_Medium - 1.svg";
  } else if(_number == 2) {
    document.getElementById('cup').src="images/cups/Cups_Medium - 2.svg";
  } else if(_number == 3) {
    document.getElementById('cup').src="images/cups/Cups_Medium - 3.svg"
  } else if(_number == 4) {
    document.getElementById('cup').src="images/cups/Cups_Medium - 4.svg";
  } else if(_number == 5) {
    document.getElementById('cup').src="images/cups/Cups_Medium - 5.svg";
  } else {
    document.getElementById('cup').src="images/cups/Cups_Medium - 6.svg";
    }
  }
  if (document.getElementById("large").classList.contains("size-active")) {
    if (_number == 0) {
    document.getElementById('cup').src="images/cups/Cups_Large - None.svg";
  } else if(_number == 1) {
    document.getElementById('cup').src="images/cups/Cups_Large - 1.svg";
  } else if(_number == 2) {
    document.getElementById('cup').src="images/cups/Cups_Large - 2.svg";
  } else if(_number == 3) {
    document.getElementById('cup').src="images/cups/Cups_Large - 3.svg"
  } else if(_number == 4) {
    document.getElementById('cup').src="images/cups/Cups_Large - 4.svg";
  } else if(_number == 5) {
    document.getElementById('cup').src="images/cups/Cups_Large - 5.svg";
  } else {
    document.getElementById('cup').src="images/cups/Cups_Large - 6.svg";
    }
  }
  if (document.getElementById("coffee-monster").classList.contains("size-active")) {
    if (_number == 0) {
    document.getElementById('cup').src="images/cups/Cups_Monster - None.svg";
  } else if(_number == 1) {
    document.getElementById('cup').src="images/cups/Cups_Monster - 1.svg";
  } else if(_number == 2) {
    document.getElementById('cup').src="images/cups/Cups_Monster - 2.svg";
  } else if(_number == 3) {
    document.getElementById('cup').src="images/cups/Cups_Monster - 3.svg"
  } else if(_number == 4) {
    document.getElementById('cup').src="images/cups/Cups_Monster - 4.svg";
  } else if(_number == 5) {
    document.getElementById('cup').src="images/cups/Cups_Monster - 5.svg";
  } else {
    document.getElementById('cup').src="images/cups/Cups_Monster - 6.svg";
    }
  }
}

function snacks(id) {
  document.getElementById(id).classList.add("size-active");
  if (id == "cookie") {
    document.getElementById('waffle').classList.remove("size-active");
    document.getElementById("cheesecake").classList.remove("size-active");
    document.getElementById("almondSnack").classList.remove("size-active");
    document.getElementById("monsterSnack").classList.remove("size-active");
  }
  else if(id == 'waffle'){
    document.getElementById('cookie').classList.remove("size-active");
    document.getElementById("cheesecake").classList.remove("size-active");
    document.getElementById("almondSnack").classList.remove("size-active");
    document.getElementById("monsterSnack").classList.remove("size-active");
  }
  else if(id == 'cheesecake'){
    document.getElementById('waffle').classList.remove("size-active");
    document.getElementById("cookie").classList.remove("size-active");
    document.getElementById("almondSnack").classList.remove("size-active");
    document.getElementById("monsterSnack").classList.remove("size-active");
  }
  else if(id == 'almondSnack'){
    document.getElementById('waffle').classList.remove("size-active");
    document.getElementById("cheesecake").classList.remove("size-active");
    document.getElementById("cookie").classList.remove("size-active");
    document.getElementById("monsterSnack").classList.remove("size-active");
  }
  else{
    document.getElementById('waffle').classList.remove("size-active");
    document.getElementById("cheesecake").classList.remove("size-active");
    document.getElementById("almondSnack").classList.remove("size-active");
    document.getElementById("cookie").classList.remove("size-active");
  }
  
}

function size(id) {
  console.log(array.length);
  document.getElementById(id).classList.add("size-active");
  if (id == "small") {
    if (array.length == 0) {
    document.getElementById('cup').src="images/cups/Cups_Small - None.svg";
    } else if (array.length == 1) {
      document.getElementById('cup').src="images/cups/Cups_Small - 1.svg";
    } else if (array.length == 2) {
      document.getElementById('cup').src="images/cups/Cups_Small - 2.svg";
    } else if (array.length == 3) {
      document.getElementById('cup').src="images/cups/Cups_Small - 3.svg";
    } else if (array.length == 4) {
      document.getElementById('cup').src="images/cups/Cups_Small - 4.svg";
    } else if (array.length == 5) {
      document.getElementById('cup').src="images/cups/Cups_Small - 5.svg";
    } else {
      document.getElementById('cup').src="images/cups/Cups_Small - 6.svg";
    }
    document.getElementById('medium').classList.remove("size-active");
    document.getElementById("large").classList.remove("size-active");
    document.getElementById("coffee-monster").classList.remove("size-active");
  } 
  if (id == "medium") {
    if (array.length == 0) {
    document.getElementById('cup').src="images/cups/Cups_Medium - None.svg";
    } else if (array.length == 1) {
      document.getElementById('cup').src="images/cups/Cups_Medium - 1.svg";
    } else if (array.length == 2) {
      document.getElementById('cup').src="images/cups/Cups_Medium - 2.svg";
    } else if (array.length == 3) {
      document.getElementById('cup').src="images/cups/Cups_Medium - 3.svg";
    } else if (array.length == 4) {
      document.getElementById('cup').src="images/cups/Cups_Medium - 4.svg";
    } else if (array.length == 5) {
      document.getElementById('cup').src="images/cups/Cups_Medium - 5.svg";
    } else {
      document.getElementById('cup').src="images/cups/Cups_Medium - 6.svg";
    }
    document.getElementById('small').classList.remove("size-active");
    document.getElementById("large").classList.remove("size-active");
    document.getElementById("coffee-monster").classList.remove("size-active");
  } if (id == "large") {
    if (array.length == 0) {
    document.getElementById('cup').src="images/cups/Cups_Large - None.svg";
    } else if (array.length == 1) {
      document.getElementById('cup').src="images/cups/Cups_Large - 1.svg";
    } else if (array.length == 2) {
      document.getElementById('cup').src="images/cups/Cups_Large - 2.svg";
    } else if (array.length == 3) {
      document.getElementById('cup').src="images/cups/Cups_Large - 3.svg";
    } else if (array.length == 4) {
      document.getElementById('cup').src="images/cups/Cups_Large - 4.svg";
    } else if (array.length == 5) {
      document.getElementById('cup').src="images/cups/Cups_Large - 5.svg";
    } else {
      document.getElementById('cup').src="images/cups/Cups_Large - 6.svg";
    }
    document.getElementById('medium').classList.remove("size-active");
    document.getElementById("small").classList.remove("size-active");
    document.getElementById("coffee-monster").classList.remove("size-active");
  } if (id == "coffee-monster") {
    if (array.length == 0) {
    document.getElementById('cup').src="images/cups/Cups_Monster - None.svg";
    } else if (array.length == 1) {
      document.getElementById('cup').src="images/cups/Cups_Monster - 1.svg";
    } else if (array.length == 2) {
      document.getElementById('cup').src="images/cups/Cups_Monster - 2.svg";
    } else if (array.length == 3) {
      document.getElementById('cup').src="images/cups/Cups_Monster - 3.svg";
    } else if (array.length == 4) {
      document.getElementById('cup').src="images/cups/Cups_Monster - 4.svg";
    } else if (array.length == 5) {
      document.getElementById('cup').src="images/cups/Cups_Monster - 5.svg";
    } else {
      document.getElementById('cup').src="images/cups/Cups_Monster - 6.svg";
    }
    document.getElementById('medium').classList.remove("size-active");
    document.getElementById("large").classList.remove("size-active");
    document.getElementById("small").classList.remove("size-active");
  }
}

// MEMBER FORM

let nameTxt;
let emailTxt;
let streetnameTxt;
let streetnrTxt;
let postcodeTxt;
let phoneTxt;
let usernameTxt;
let passwordTxt;
let credit1Txt;
let credit2Txt;
let credit3Txt;
let credit4Txt;
let expireMTxt;
let expireYTxt;
let selectedExpireM;
let selectedExpireY;
let cvcTxt;

let everythingRight = true;

function controlConditionsName(){
    if(nameTxt.length < 2 && nameTxt.length > 30){
      document.getElementById("name_error").innerHTML="Has to be at least 2 characters long!";
      everythingRight = false;
    }
    else{
      document.getElementById("name_error").innerHTML = "";
    }
  }

  function controlConditionsEmail(){
    let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/
    if(regExp.test(emailTxt) == false){
      document.getElementById("email_error").innerHTML="Has to be at least 2 characters long!";
      everythingRight = false;
    }
    else{
      document.getElementById("email_error").innerHTML = "";
    }
  }

  function controlConditionsStreetName(){
    if(streetnameTxt.length < 2 && streetnameTxt.length > 30){
      document.getElementById("streetname_error").innerHTML="Has to be at least 2 characters long!";
      everythingRight = false;
    }
    else{
      document.getElementById("streetname_error").innerHTML = "";
    }
  }

  function controlConditionsStreetNr(){
    if (streetnrTxt.search(/^\d/) == -1) {
    document.getElementById("streetnr1_error").innerHTML = "*";
    document.getElementById("streetnr2_error").innerHTML = "*Street Number: Incorrect number";
    everythingRight = false;
  }
    else{
      document.getElementById("streetnr1_error").innerHTML = "";
      document.getElementById("streetnr2_error").innerHTML = "";
    }
  }

  function controlConditionsPostcode(){
    if (postcodeTxt.search(/^[1-9]\d{3}/) == -1 || postcodeTxt.length !== 4) {
    document.getElementById("postcode1_error").innerHTML = "*";
    document.getElementById("postcode2_error").innerHTML = "*Postcode: Incorrect postcode";
    everythingRight = false;
  }
    else{
      document.getElementById("postcode1_error").innerHTML = "";
      document.getElementById("postcode2_error").innerHTML = "";
    }
  }

  function controlConditionsPhone(){
    if (phoneTxt.search(/^[0]\d{9}$/) == -1 || phoneTxt.length !== 10) {
    document.getElementById("phone_error").innerHTML = "Incorrect phone number!";
    everythingRight = false;
  }
    else{
      document.getElementById("phone_error").innerHTML = "";
    }
  }

  function controlConditionsUsername(){
    if(usernameTxt.length < 2 && usernameTxt.length > 15){
      document.getElementById("username_error").innerHTML="Has to be at least 2 characters long!";
      everythingRight = false;
    }
    else{
      document.getElementById("username_error").innerHTML = "";
    }
  }

  function controlConditionsPassword(){
    if(passwordTxt.length < 7){
      document.getElementById("password_error").innerHTML = "At least 7 characters!";
      everythingRight = false;
    }
    else if(passwordTxt.length > 20){
      document.getElementById("password_error").innerHTML = "Maximum 20 characters!";
      everythingRight = false;
    }
    else if(passwordTxt.search(/\d/) == -1){
      document.getElementById("password_error").innerHTML = "At least 1 number";
      everythingRight = false;
    }
    else if(passwordTxt.search(/[a-zA-Z]/) == -1){
      document.getElementById("password_error").innerHTML = "At least 1 letter";
      everythingRight = false;
    }
    else{
      document.getElementById("password_error").innerHTML = "";
    }
  }

  function controlConditionsCredit1(){
    if (credit1Txt.search(/^\d{4}/) == -1 || credit1Txt.length !== 4) {
    document.getElementById("cardNo_error").innerHTML = "Incorrect credit card number!";
    everythingRight = false;
  }
    else{
      document.getElementById("cardNo_error").innerHTML = "";
    }
  }

  function controlConditionsCredit2(){
    if (credit2Txt.search(/^\d{4}/) == -1 || credit2Txt.length !== 4) {
    document.getElementById("cardNo_error").innerHTML = "Incorrect credit card number!";
    everythingRight = false;
  }
    else{
      document.getElementById("cardNo_error").innerHTML = "";
    }
  }

  function controlConditionsCredit3(){
    if (credit3Txt.search(/^\d{4}/) == -1 || credit3Txt.length !== 4) {
    document.getElementById("cardNo_error").innerHTML = "Incorrect credit card number!";
    everythingRight = false;
  }
    else{
      document.getElementById("cardNo_error").innerHTML = "";
    }
  }

  function controlConditionsCredit4(){
    if (credit4Txt.search(/^\d{4}/) == -1 || credit4Txt.length !== 4) {
    document.getElementById("cardNo_error").innerHTML = "Incorrect credit card number!";
    everythingRight = false;
  }
    else{
      document.getElementById("cardNo_error").innerHTML = "";
    }
  }

  function controlConditionsCvc(){
    if (cvcTxt.search(/^\d{3}/) == -1 || cvcTxt.length !== 3) {
      document.getElementById("cvc1_error").innerHTML = "*";
    document.getElementById("cvc2_error").innerHTML = "*CVC: Incorrect CVC number!";
    everythingRight = false;
  }
    else{
      document.getElementById("cvc1_error").innerHTML = "";
      document.getElementById("cvc2_error").innerHTML = "";
    }
  }

function send(){
  nameTxt = document.getElementById("Name").value;
  emailTxt = document.getElementById("email").value;
  streetnameTxt = document.getElementById("streetname").value;
  streetnrTxt = document.getElementById("streetnr").value;
  postcodeTxt = document.getElementById("postcode").value;
  phoneTxt = document.getElementById("phone").value;
  usernameTxt = document.getElementById("username").value;
  passwordTxt = document.getElementById("password").value;
  credit1Txt = document.getElementById("creditCard1").value;
  credit2Txt = document.getElementById("creditCard2").value;
  credit3Txt = document.getElementById("creditCard3").value;
  credit4Txt = document.getElementById("creditCard4").value;
  selectedExpireM = document.getElementById("expireMM").selectedIndex;
  expireMTxt = document.getElementById("expireMM").value;
  selectedExpireY = document.getElementById("expireYY").selectedIndex;
  expireYTxt = document.getElementById("expireYY").value;
  cvcTxt = document.getElementById("cvc").value;
  everythingRight = true;

  if (nameTxt.length == 0) {
    document.getElementById("name_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsName();
  }


if (emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsEmail();
  }

  if (streetnameTxt.length == 0) {
    document.getElementById("streetname_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsStreetName();
  }

  if (streetnrTxt.length == 0) {
    document.getElementById("streetnr1_error").innerHTML = "*";
    document.getElementById("streetnr2_error").innerHTML = "*Street Number: Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsStreetNr();
  }

  if (postcodeTxt.length == 0) {
    document.getElementById("postcode1_error").innerHTML = "*";
    document.getElementById("postcode2_error").innerHTML = "*Postcode: Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsPostcode();
  }

  if (phoneTxt.length == 0) {
    document.getElementById("phone_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsPhone();
  }

  if (usernameTxt.length == 0) {
    document.getElementById("username_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsUsername();
  }

  if (passwordTxt.length == 0) {
    document.getElementById("password_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsPassword();
  }

  if (credit1Txt.length == 0) {
    document.getElementById("cardNo_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsCredit1();
  }

  if (credit2Txt.length == 0) {
    document.getElementById("cardNo_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsCredit2();
  }

  if (credit3Txt.length == 0) {
    document.getElementById("cardNo_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsCredit3();
  }

  if (credit4Txt.length == 0) {
    document.getElementById("cardNo_error").innerHTML = "Fill in please";
    everythingRight = false;
  }
  else{
    controlConditionsCredit4();
  }

  if (selectedExpireM == 0) {
    document.getElementById("expireM1_error").innerHTML = "*";
    document.getElementById("expireM2_error").innerHTML = "*Month: Choose an option please";
    everythingRight = false;
  }
  else{
    document.getElementById("expireM1_error").innerHTML = "";
    document.getElementById("expireM2_error").innerHTML = "";
  }

 if (selectedExpireY == 0) {
    document.getElementById("expireY1_error").innerHTML = "*";
    document.getElementById("expireY2_error").innerHTML = "*Year: Choose an option please";
    everythingRight = false;
  }
  else{
    document.getElementById("expireY1_error").innerHTML = "";
    document.getElementById("expireY2_error").innerHTML = "";
  }
  

  if (cvcTxt.length == 0) {
    document.getElementById("cvc1_error").innerHTML = "*";
    document.getElementById("cvc2_error").innerHTML = "*CVC: Incorrect CVC";
    everythingRight = false;
  }
  else{
    controlConditionsCvc();
  }

  if(everythingRight){
    let link = "mailto:" + encodeURIComponent("cedric.flipkens@gmail.com;")
          + encodeURIComponent(document.getElementById('email').value)
          + "?cc=" + encodeURIComponent("cedric.flipkens2@gmail.com")
          + "&subject=" + encodeURIComponent("Coffeeshop sign up")
          + "&body="
          + "Name: "
          + encodeURIComponent(nameTxt)
          + encodeURIComponent("\r\n\n")
          + "Address: "
          + encodeURIComponent(`${streetnameTxt} ${streetnrTxt} ${postcodeTxt}`)
          + encodeURIComponent("\r\n\n")
          + 'Phone number: '
          + encodeURIComponent(phoneTxt)
          + encodeURIComponent("\r\n\n")
          + 'Username: '
          + encodeURIComponent(usernameTxt)
          + encodeURIComponent("\r\n\n")
          + 'Password: '
          + encodeURIComponent(passwordTxt)
          + encodeURIComponent("\r\n\n")
          + 'Credit Card Number: '
          + encodeURIComponent(`${credit1Txt} ${credit2Txt} ${credit3Txt} ${credit4Txt}`)
          + encodeURIComponent("\r\n\n")
          + 'Expire Date: '
          + encodeURIComponent(`${expireMTxt}/${expireYTxt}`)
          + encodeURIComponent("\r\n\n")
          + 'CVC: '
          + encodeURIComponent(cvcTxt)
          + encodeURIComponent("\r\n\n")
          window.location.href = link;
  }
}


