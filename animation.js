// jshint esversion:6
var eeee =  document.querySelector("#card").clientWidth;
var sw = document.body.clientWidth;
var gap = document.querySelectorAll(".triGap");
var num = 0;
var protectSwitch = true;
var triSwicth = false;
console.log(gap);
var rect = document.querySelector(".L6").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

function ranDom(){
  var n = Math.random();
  n = n * 2;
  n = Math.floor(n);
  return n;
}

function B (){
  gap.forEach(function(x){
    var num = ranDom();
    if (num == 1 ){
      x.classList.add("triGapBlack");
    } else {
      x.classList.remove("triGapBlack");

    }
    console.log("yes");
  });
}

if (protectSwitch === true){
  document.querySelector('#card').onclick =function(){
    triSwicth = !triSwicth;
    eeee =  document.querySelector("#card").clientWidth;
  if (triSwicth === true){
      num = ranDom();
      return eS.play();
  } else {
      return eS.reverse();
  }

  };
} else {
  console.log('anime is runing');
}



// document.querySelector('.tri').onclick =function(){
// eeee =  document.querySelector("#card").clientWidth;
//   return eS.reverse();
// };

  var eS = anime.timeline({
    // targets: '.tri',
    loop: 1,
    // easing: 'easeInOutSine',
    easing: 'easeOutElastic(1, .8)',
    autoplay: false,
    update: function(){
      protectSwitch = false;
    }
  })
  .add({
    targets: '.tri',
    background: 'rgb(0, 0, 0)',
    translateX: eeee * 0.5 - (88+24),
    width: '20px',
  })
  .add
  ({
    targets: '.tri',
    width: '176px',
    borderRadius: '0%',
  })
  .add({
    targets: '.triGap',
    background: 'rgb(255, 255, 255)',
    easing:'easeInQuad',
    width: function(){ if(ranDom() > 0) return 20;},
    height: function(){ if(ranDom() > 0) return 20;},
    duration: 200,
    // function(){ if(ranDom() == 0) return 20; },
    complete:function(){
        protectSwitch = true;
      }
  });
