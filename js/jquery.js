const spans = document.querySelectorAll("span")
const contents = document.querySelectorAll(".content1")
const Top1 = contents[0].offsetTop
const Top2 = contents[1].offsetTop
const Top3 = contents[2].offsetTop

spans[0].onclick = function(){
  window.scroll({top:Top1, behavior: 'smooth'})
}
spans[1].onclick = function(){
  window.scroll({top:Top2, behavior: 'smooth'})
}
spans[2].onclick = function(){
  window.scroll({top:Top3, behavior: 'smooth'})
}

let number = 0

function count()  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');

  // 현재 화면에 표시된 값
  number = parseInt(number) + 1;

  // 결과 출력
  resultElement.innerText = `[ 💖 Cheer Up! 💖 ]\n'${number}'`;
}

const yms = document.getElementById("yms")
const time = document.getElementById('time');

  
function Get_time() {
  var today = new Date(); 
  var year = today.getFullYear(); // 년도
  var month = today.getMonth() + 1;  // 월
  var date = today.getDate();  // 날짜
  var hours = today.getUTCHours(); // 시
  var minutes = today.getMinutes();  // 분
  var seconds = today.getSeconds();  // 초

  yms.innerText = `${year}/${month}/${date}`;
  time.innerText = `- ${hours}:${minutes}:${seconds} -`;
  console.log("ss")
  setTimeout(Get_time, 1000);
}