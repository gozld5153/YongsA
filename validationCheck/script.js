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
    userName.classList.remove('borderRed')
    userName.classList.add('borderGreen') 
    checkId = true;
    hideJoin();
  }
  else {  
    userName.classList.remove('borderGreen')
    userName.classList.add('borderRed')
    failurMessage.classList.remove('hide')
    successMessage.classList.add('hide')
    checkId = false;
    hideJoin();
  }
}


let teethColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
let saveNum = 0;
password1.onkeyup = function(){
  if(!(strongPassword(password1.value))){
    strongPwd.classList.remove('hide');
    password1.classList.add('borderRed')
    password1.classList.remove('borderGreen') 
    //password1의 값의 길이가 3이면 3칸만 칠해지고 1칸을 지우고 2칸
    if(saveNum === password1.value.length){
      roboTeeth[saveNum].style.backgroundColor = '#efefef'
    }

    for(let i = 0; i < password1.value.length; i++){
      if(password1.value.length >= 8){
        break;
      }
      roboTeeth[i].style.backgroundColor = teethColor[i]
      saveNum = i;
    }
  }
  else {
    roboMouth.classList.add('hide')
    // roboMouth.style.display = 'none';
    // for(let el of roboTeeth){
    //   el.classList.add('hide')
    // }
    password1.classList.remove('borderRed')
    password1.classList.add('borderGreen') 
    strongPwd.classList.add('hide');
    password2.classList.remove('hide');
  }
}

password2.onkeyup = function() {
  isMatch(password1.value, password2.value);
}


function isMatch (password1, passwordpara) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 === passwordpara && password1.length > 0){
    matchMessage.classList.remove('hide')
    mismatchMessage.classList.add('hide')
    password2.classList.add('borderGreen') 
    password2.classList.remove('borderRed')
    checkPw = true;
    hideJoin();
    return true;
  }
  else {
    password2.classList.remove('borderGreen') 
    password2.classList.add('borderRed')
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
  joinBtn.classList.add('aniBox')
  userName.classList.add('aniBox')
  password1.classList.add('aniBox')
  password2.classList.add('aniBox')

  if(checkMore === true){
    setTimeout(makeDiv, 3300)
    function makeDiv(){
      container.classList.add('hide')
      joinBtn.classList.add('hide')
      password1.classList.add('hide')
      password2.classList.add('hide')
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