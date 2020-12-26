setInterval(changeTitle, 2000);
var opcio = 0;
function changeTitle()
{
    var txtTitle = ["☃️", "⛄"]
    document.title = txtTitle[opcio] + "       Bon Nadal!🎅     " + txtTitle[opcio];
   (opcio == 1) ? (opcio = 0) : (opcio = 1);
}
window.onload = function(){
    dayToChrist();
    initWack();
}

function dayToChrist(){
    var myDate=new Date(); 
    var xmas=Date.parse("Dec 25, "+myDate.getFullYear()) 
    var today=Date.parse(myDate) 

    var daysToChristmas=Math.round((xmas-today)/(1000*60*60*24)) 

    var textField = document.getElementById('days');

    if (daysToChristmas==0) 
    textField.innerHTML = ("Es nadal!");

    if (daysToChristmas<0) 
    textField.innerHTML = ("El nadal va ser fa "+-1*(daysToChristmas)+" dies");

    if (daysToChristmas>0) 
    textField.innerHTML = (daysToChristmas+" dies per al Nadal!");
}

//WhackAmole

var scoreBoard = document.querySelector('.score');
var holes;
var moles;
let lastHole;
    let timeUp = false;
    let score = 0;
function initWack(){
     holes = document.querySelectorAll('.hole');
     moles = document.querySelectorAll('.mole');
     scoreBoard = document.querySelector('.score');
    
    moles.forEach(mole => mole.addEventListener('click', bonk));
}


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(300, 1200);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000)
}

function bonk(e) {
  if(!e.isTrusted) return; // cheater!
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}
