// yearcontrol 영역 마우스 오버이벤트
const yearcontrol = document.getElementById("year-control");
const year_control_hover = document.getElementById("year-control__hover");
const yearBt = document.querySelectorAll(".yearBt");
const year_line = document.getElementById("year-control__line");

function yearconMouseOver() {
  year_control_hover.classList.add("year-add");
}
function yearconMouseOut() {
  year_control_hover.classList.remove("year-add");
}
yearcontrol.addEventListener("mouseover", yearconMouseOver);
yearcontrol.addEventListener("mouseout", yearconMouseOut);

// video버튼 클릭시 비디오 영상 나옴
const video__playBt = document.getElementById("historycon-video__button");
const video_Area = document.getElementById("History-video__play");
const video__closeBt = document.querySelector("#History-video__play>div>button");
function videoPlay() {
  video_Area.style.display = "flex";
}

function videoClose() {
  video_Area.style.display = "none";
}
video__playBt.addEventListener("click", videoPlay);
video__closeBt.addEventListener("click", videoClose);
