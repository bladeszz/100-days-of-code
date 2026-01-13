var variable = document.querySelector(".jsbtn1");
variable.addEventListener("click", run);
function run(e) {
    console.log(e.type);
}

var variable2 = document.querySelector(".jsbtn2")
variable2.addEventListener("mouseover", run2)
function run2(e){
    console.log(e.type);
}


