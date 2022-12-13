/ ------------- / / MENU / / ------------- /;
"use strict"

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
    document.getElementById("menu-choice").classList.add("hidden");
  } else if (
    document.getElementById("personalize").classList.contains("hidden") !== true
  ) {
    document.getElementById("personalize").classList.add("hidden");
    document.getElementById("brewed").classList.remove("hidden");
    document.getElementById("brewed").classList.add("visible");
  }
}

function personalize() {
  if (document.getElementById("personalize").classList.contains("hidden")) {
    document.getElementById("personalize").classList.remove("hidden");
    document.getElementById("brewed").classList.remove("visible");
    document.getElementById("brewed").classList.add("hidden");
  }
}

function smallsize() {
  document.getElementById("small").classList.add("size-active");
  if (document.getElementById("medium").classList.contains("size-active")) {
    document.getElementById("medium").classList.remove("size-active");
  }
  if (document.getElementById("large").classList.contains("size-active")) {
    document.getElementById("large").classList.remove("size-active");
  }
  if (
    document.getElementById("coffee-monster").classList.contains("size-active")
  ) {
    document.getElementById("coffee-monster").classList.remove("size-active");
  }
}

function mediumsize() {
  document.getElementById("medium").classList.add("size-active");
  if (document.getElementById("small").classList.contains("size-active")) {
    document.getElementById("small").classList.remove("size-active");
  } else if (
    document.getElementById("large").classList.contains("size-active")
  ) {
    document.getElementById("large").classList.remove("size-active");
  } else if (
    document.getElementById("coffee-monster").classList.contains("size-active")
  ) {
    document.getElementById("coffee-monster").classList.remove("size-active");
  }
}

function largesize() {
  document.getElementById("large").classList.add("size-active");
  if (document.getElementById("medium").classList.contains("size-active")) {
    document.getElementById("medium").classList.remove("size-active");
  } else if (
    document.getElementById("small").classList.contains("size-active")
  ) {
    document.getElementById("small").classList.remove("size-active");
  } else if (
    document.getElementById("coffee-monster").classList.contains("size-active")
  ) {
    document.getElementById("coffee-monster").classList.remove("size-active");
  }
}

function monstersize() {
  document.getElementById("coffee-monster").classList.add("size-active");
  if (document.getElementById("medium").classList.contains("size-active")) {
    document.getElementById("medium").classList.remove("size-active");
  } else if (
    document.getElementById("large").classList.contains("size-active")
  ) {
    document.getElementById("large").classList.remove("size-active");
  } else if (
    document.getElementById("small").classList.contains("size-active")
  ) {
    document.getElementById("small").classList.remove("size-active");
  }
}

function flavourextra() {
  document.getElementById("flavours").classList.add("drawing");
  document.getElementById("flavour-choice").classList.remove("hidden");
  if (document.getElementById("menu-choice").classList.contains("hidden")) {
    document.getElementById("menu-choice").classList.remove("hidden");
  }
  if (document.getElementById("sweeteners").classList.contains("drawing")) {
    document.getElementById("sweeteners").classList.remove("drawing");
  }
  if (document.getElementById("toppings").classList.contains("drawing")) {
    document.getElementById("toppings").classList.remove("drawing");
  }
  if (document.getElementById("milk").classList.contains("drawing")) {
    document.getElementById("milk").classList.remove("drawing");
  }
  if (
    !document.getElementById("sweetener-choice").classList.contains("hidden")
  ) {
    document.getElementById("sweetener-choice").classList.add("hidden");
  }
  if (!document.getElementById("topping-choice").classList.contains("hidden")) {
    document.getElementById("topping-choice").classList.add("hidden");
  }
  if (!document.getElementById("milk-choice").classList.contains("hidden")) {
    document.getElementById("milk-choice").classList.add("hidden");
  }
}

function sweetenerextra() {
  document.getElementById("sweeteners").classList.add("drawing");
  document.getElementById("sweetener-choice").classList.remove("hidden");
  if (document.getElementById("menu-choice").classList.contains("hidden")) {
    document.getElementById("menu-choice").classList.remove("hidden");
  }
  if (document.getElementById("flavours").classList.contains("drawing")) {
    document.getElementById("flavours").classList.remove("drawing");
  }
  if (document.getElementById("toppings").classList.contains("drawing")) {
    document.getElementById("toppings").classList.remove("drawing");
  }
  if (document.getElementById("milk").classList.contains("drawing")) {
    document.getElementById("milk").classList.remove("drawing");
  }
  if (!document.getElementById("flavour-choice").classList.contains("hidden")) {
    document.getElementById("flavour-choice").classList.add("hidden");
  }
  if (!document.getElementById("topping-choice").classList.contains("hidden")) {
    document.getElementById("topping-choice").classList.add("hidden");
  }
  if (!document.getElementById("milk-choice").classList.contains("hidden")) {
    document.getElementById("milk-choice").classList.add("hidden");
  }
}

function toppingextra() {
  document.getElementById("toppings").classList.add("drawing");
  document.getElementById("topping-choice").classList.remove("hidden");
  if (document.getElementById("menu-choice").classList.contains("hidden")) {
    document.getElementById("menu-choice").classList.remove("hidden");
  }
  if (document.getElementById("sweeteners").classList.contains("drawing")) {
    document.getElementById("sweeteners").classList.remove("drawing");
  }
  if (document.getElementById("flavours").classList.contains("drawing")) {
    document.getElementById("flavours").classList.remove("drawing");
  }
  if (document.getElementById("milk").classList.contains("drawing")) {
    document.getElementById("milk").classList.remove("drawing");
  }
  if (
    !document.getElementById("sweetener-choice").classList.contains("hidden")
  ) {
    document.getElementById("sweetener-choice").classList.add("hidden");
  }
  if (!document.getElementById("flavour-choice").classList.contains("hidden")) {
    document.getElementById("flavour-choice").classList.add("hidden");
  }
  if (!document.getElementById("milk-choice").classList.contains("hidden")) {
    document.getElementById("milk-choice").classList.add("hidden");
  }
}

function milkextra() {
  document.getElementById("milk").classList.add("drawing");
  document.getElementById("milk-choice").classList.remove("hidden");
  if (document.getElementById("menu-choice").classList.contains("hidden")) {
    document.getElementById("menu-choice").classList.remove("hidden");
  }
  if (document.getElementById("sweeteners").classList.contains("drawing")) {
    document.getElementById("sweeteners").classList.remove("drawing");
  }
  if (document.getElementById("toppings").classList.contains("drawing")) {
    document.getElementById("toppings").classList.remove("drawing");
  }
  if (document.getElementById("flavours").classList.contains("drawing")) {
    document.getElementById("flavours").classList.remove("drawing");
  }
  if (
    !document.getElementById("sweetener-choice").classList.contains("hidden")
  ) {
    document.getElementById("sweetener-choice").classList.add("hidden");
  }
  if (!document.getElementById("flavour-choice").classList.contains("hidden")) {
    document.getElementById("flavour-choice").classList.add("hidden");
  }
  if (!document.getElementById("topping-choice").classList.contains("hidden")) {
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