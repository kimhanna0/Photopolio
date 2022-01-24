// best 슬라이더 영역 ***********
const bestSlider = document.querySelector("#best ul");
const sliderList = document.querySelectorAll("#best ul li");
const sliderCount = sliderList.length; // 전체 슬라이더(li) 갯수
const prve = document.querySelector("#but-paeg #prve");
const next = document.querySelector("#but-paeg #next");
let click = 0; 

// marginLeft 값을 바꿔주는 함수
function moveSlider(slidername, num, marginleft) {
  slidername.style.marginLeft = -num * marginleft + "vw";
}

// next 버튼을 클릭했을 때 발생 이벤트
// count 값이 6-3=3 보다 작을 경우에만 실행되고 count에 + 1
next.addEventListener("click", function() {
  if(click < sliderCount -3) {
    click++;
    moveSlider(bestSlider, click, 23);
    prve.style.background = "url(images/main/prev.png)"
  }
  // 활성, 비활성 이미지 변경
  if(click == 3) {
    next.style.background = "url(images/main/next-hover.png)"
  }
});
// prve 버튼을 클릭했을 때 발생 이벤트
// count 값이 0 보다 클 경우에만 실행되고 count에 - 1 
// => next를 클릭하면 count값은 증가하기 때문에 next버튼을 클릭 했을 때 활성화됨
prve.addEventListener("click", function() {
  if(click > 0) {
    click--;
    moveSlider(bestSlider, click, 23);
    next.style.background = "url(images/main/next.png)"
  }
  // 활성, 비활성 이미지 변경
  if(click == 0) {
    prve.style.background = "url(images/main/prev-hover.png)"
  }
});


// instagram *************
const instagram = document.querySelector('#instagram-wrap ul');
const reviewlist = document.querySelectorAll('#instagram-wrap ul li');
const reviewlistLength = reviewlist.length;
let count = 0; 

let times = setInterval(function() {
  if(count < reviewlistLength-4) {
    moveSlider(instagram, count, 12.1);
    count++;
  } else {
    count = 0;
  }
}, 3000);

