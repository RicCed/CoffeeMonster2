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

// function size() {
//   if(document.getElementById("small").classList.contains("")
// }
