// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const container = document.querySelector('#container')
const userName = document.querySelector('#username')
const successMessage = document.querySelector('.success-message')
const failurMessage = document.querySelector('.failure-message')
const password1 = document.querySelector('#password')
const password2 = document.querySelector('#password-retype')
const matchMessage = document.querySelector('.match-message')
const mismatchMessage = document.querySelector('.mismatch-message')
const strongPwd = document.querySelector('.strong-password')
const joinBtn = document.querySelector('.join')
const roboMouth = document.querySelector('#roboMouth')
const roboTeeth = document.querySelectorAll('.roboTeeth')
let checkId = false;
let checkPw = false;
let checkMore = true;

userName.onkeyup = function check(){
  isMoreThan4Length(userName.value.length >= 4);
}


function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(value && /^[A-Za-z0-9][A-Za-z0-9]{3,9}$/.test(userName.value)){
    successMessage.classList.remove('hide')
    failurMessage.classList.add('hide')
    checkId = true;
    hideJoin();
  }
  else {
    failurMessage.classList.remove('hide')
    successMessage.classList.add('hide')
    checkId = false;
    hideJoin();
  }
}

let teethColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
let rainbow = 0;
password1.onkeyup = function(){
  if(!(strongPassword(password1.value))){
    strongPwd.classList.remove('hide');
    roboTeeth[rainbow].style.backgroundColor = teethColor[rainbow]
    rainbow++;
    if(rainbow === teethColor.length){
      rainbow = 0;
    }
  }
  else {
    roboMouth.classList.add('hide')
    // roboMouth.style.display = 'none';
    // for(let el of roboTeeth){
    //   el.classList.add('hide')
    // }
    strongPwd.classList.add('hide');
    password2.classList.remove('hide');
  }
}

password2.onkeyup = function() {
  isMatch(password1.value, password2.value);
}


function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 === password2 && password1.length > 0){
    matchMessage.classList.remove('hide')
    mismatchMessage.classList.add('hide')
    checkPw = true;
    hideJoin();
    return true;
  }
  else {
    matchMessage.classList.add('hide')
    mismatchMessage.classList.remove('hide')
    checkPw = false;
    hideJoin();
    return false;
  }
}

function hideJoin(){
  if(checkPw === true && checkId === true){
   joinBtn.classList.remove('hide')
  }
  else {
    joinBtn.classList.add('hide')
  }
}

joinBtn.addEventListener('click', () => {
  container.classList.add('aniBox')
  joinBtn.classList.add('aniBox2')
  password1.classList.add('aniBox')
  password2.classList.add('aniBox3')

  if(checkMore === true){
    setTimeout(makeDiv, 3000)
    function makeDiv(){
      let div = document.createElement('div')
      document.body.prepend(div);
      div.textContent = "가입을 축하합니다!"
      div.classList.add('lastMent')
      colorChange()
      return checkMore = false;
    }
  }
})

let colors = ['red', 'blue', 'green', 'pink'];
let count = 0;
function colorChange(){
  setInterval(() => {
    document.querySelector('.lastMent').style.color = colors[count]
    count++
    if(colors.length === count){
       count = 0;
    }
  }, 1000);
}