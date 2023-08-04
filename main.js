let btn = document.querySelector(".btn");
let robot = document.querySelector(".robot");
let play = document.getElementById("play");

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

function playMusic(){
    let audio = new Audio("files/effect.mp3");
    audio.play()
}
play.addEventListener("click" , playMusic)