function checkQuiz(){

let score = 0;

let answers = {

q1:"12",
q2:"2",
q3:"0",
q4:"5",
q5:"50"

};

for(let q in answers){

let selected = document.querySelector(`input[name="${q}"]:checked`);

if(selected && selected.value === answers[q]){
score++;
}

}

let result = document.getElementById("result");

if(score >= 3){

document.getElementById("quizForm").style.display="none";

let videoSection = document.getElementById("videoSection");
videoSection.style.display="flex";

let video = document.getElementById("successVideo");

video.muted = false;   // unmute
video.play();

openFullscreen(video);

}else{

result.innerHTML =
"😅 You scored "+score+"/5. Try again and unlock the invitation! 🔐";

document.getElementById("retrySection").style.display="block";

}

}

function retryQuiz(){

location.reload();

}

function openFullscreen(video){

if(video.requestFullscreen){
video.requestFullscreen();
}
else if(video.webkitRequestFullscreen){
video.webkitRequestFullscreen();
}
else if(video.msRequestFullscreen){
video.msRequestFullscreen();
}

}

function retryQuiz(){
location.reload();
}

function openFullscreen(video){

if(video.requestFullscreen){
video.requestFullscreen();
}
else if(video.webkitRequestFullscreen){
video.webkitRequestFullscreen();
}
else if(video.msRequestFullscreen){
video.msRequestFullscreen();
}

}