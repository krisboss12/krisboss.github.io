function sayThatWasEasy(){
var thatwaseasy=new Audio("sound.mp3");
thatwaseasy.play();
}

$("#easy").on("click",sayThatWasEasy);