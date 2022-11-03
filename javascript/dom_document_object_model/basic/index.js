// DOM
//console.log(document)

// Individual
const title = window.document.getElementById("page-title");
console.log(title);

title.classList.add("purple");

// Multiple
let titles1 = document.getElementsByTagName("h1")
titles1 = Array.from(titles1)
//console.log(titles1)

for (x of titles1){
    x.style.color = "grey"
}

let titles2 = document.getElementsByClassName("purple")
let titles3 = document.querySelector(".purple")
