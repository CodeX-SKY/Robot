let btn = document.querySelector(".btn");
let robot = document.querySelector(".robot");

btn.addEventListener("click" , function(){
    if(robot.classList.contains("hide")){
        robot.classList.remove("hide");
        alert("Show");
        console.log("Show");
    } else {
        robot.classList.add("hide");
        alert("Hide");
        console.log("Hide");
    }
})