var introText = $('h1');
var counter = 0;

function IntroSlider(){

     $(introText[counter]).fadeOut(2000 , function(){

            if(counter == introText.length - 1 ){
               counter = 0;
            }else{
             counter++;
            }

            $(introText[counter]).fadeIn(2000);

     });

}

var timer = setInterval(IntroSlider , 4000);


var gridSys, upgradTitle, upgradClue;

function animate(){

  upgradTitle = document.getElementById('h2');
  upgradTitle.style.paddingTop = '50px';
  upgradClue = document.getElementById('h3');
  upgradClue.style.paddingTop = '10px';
  upgradTitle.className = 'show';
  upgradClue.className = 'show';

  gridSys = document.getElementById('gridsystem');
  gridSys.className = 'open';

}

window.addEventListener('load', animate);


$('#save').on('click', function(){
      $('#confirm').fadeIn().fadeOut(2000 , function(){
           $('#confirmed').fadeIn().fadeOut(1500);

      });
});


var clone = document.getElementById('num1');
var armor = document.getElementById('num2');
var vision = document.getElementById('num3');
var accuracy = document.getElementById('num4');
var speed = document.getElementById('num5');
var flex = document.getElementById('num6');
var numcount = 1;
var numcount2 = 1;
var numcount3 = 1;
var numcount4 = 1;
var numcount5 = 1;
var numcount6 = 1;
var confirm = document.getElementById('confirm');
var confirmed = document.getElementById('confirmed');
var reached = document.getElementById('reached');
var saveBtn = document.getElementById('save');
var backBtn = document.getElementById('back');

function cloneUpgrader(){
      if( numcount <= 2 ){
        clone.innerHTML = [numcount];
         numcount++
      }else{
          reached.className = "done";
      }
}

function armorUpgrader(){
      if(numcount2 <= 5){
        armor.innerHTML = [numcount2];
         numcount2++;
      }else{
          reached.className = "done";
      }
}
function visionUpgrader(){
      if(numcount3 <= 5){
        vision.innerHTML = [numcount3];
         numcount3++;
      }else{
          reached.className = "done";
      }
}
function accuracyUpgrader(){
      if(numcount4 <= 3){
        accuracy.innerHTML = [numcount4];
         numcount4++;
      }else{
          reached.className = "done";
      }
}
function speedUpgrader(){
      if(numcount5 <= 10){
        speed.innerHTML = [numcount5];
         numcount5++;
      }else{
          reached.className = "done";
      }
}
function flexUpgrader(){
      if(numcount6 <= 5){
        flex.innerHTML = [numcount6];
         numcount6++;
      }else{
          reached.className = "done";
      }
}

function showsav(){
          saveBtn.className = 'showsave';
}

function hidesav(){
          saveBtn.className = '';
}

backBtn.onclick = function(){
          reached.className = "";
}

saveBtn.addEventListener('click', hidesav);

clone.addEventListener('click', cloneUpgrader);
armor.addEventListener('click', armorUpgrader);
vision.addEventListener('click', visionUpgrader);
accuracy.addEventListener('click', accuracyUpgrader);
speed.addEventListener('click', speedUpgrader);
flex.addEventListener('click', flexUpgrader);

clone.addEventListener('click', showsav);
armor.addEventListener('click', showsav);
vision.addEventListener('click', showsav);
accuracy.addEventListener('click', showsav);
speed.addEventListener('click', showsav);
flex.addEventListener('click', showsav);
