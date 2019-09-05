// jshint esversion:6
var eeee = document.querySelector("#card").clientWidth;
var sw = document.body.clientWidth;
var gap = document.querySelectorAll(".triGap");
var num = 0;
var loopFinish = 0;
var loopFinishReverse = 0;
var switchBar = true;


var rect = document.querySelector(".L6").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

function ranDom() {
  var n = Math.random();
  n = n * 2;
  n = Math.floor(n);
  return n;
}


document.querySelector("#card").onclick = function(){
  console.log('use this '+switchBar);
  change(switchBar);
  switchBar = !switchBar;

};

function change(x){
  switch(x){
    case(false):
    eS.reverse();
    break;

    default:
    eS.play();
  }
}

// Code if to warp the onclick will have problem !!!! don't delete it until you note it!!
// if (loopSwich === 'true'){
//   document.querySelector("#card").onclick = function(){
// console.log(loopSwich+" is true");
//  loopSwich = !loopSwich;
//   };
// } else {
//   document.querySelector("#card").onclick = function(){
//     console.log(loopSwich+" is false");
//  loopSwich = !loopSwich;
//   };
// }


var eS = anime.timeline({
    // targets: '.tri',
    loop: 1,
    // easing: 'easeInOutSine',
    easing: 'easeOutElastic(1, .8)',
    autoplay: false,
  })
  .add({
    targets: '.tri',
    background: 'rgb(0, 0, 0)',
    translateX: eeee * 0.5 - (88 + 24),
    width: '20px',
    loopComplete: function(){
      loopFinish = loopFinish + 1;
      loopFinishReverse +=1;
    },
  })
  .add({
    targets: '.tri',
    width: '176px',
    borderRadius: '0%',
    loopComplete:  function(){
      loopFinish = loopFinish + 1;
      loopFinishReverse +=1;
    },
  })
  .add({
    targets: '.triGap',
    background: 'rgb(255, 255, 255)',
    easing: 'easeInQuad',
    width: function() {
      if (ranDom() > 0) return 20;
    },
    height: function() {
      if (ranDom() > 0) return 20;
    },
    duration: 200,
    loopComplete:  function(){
      loopFinish = loopFinish + 1;
      loopFinishReverse +=1;
      console.log('loopFinish is: '+loopFinish);


    },

  });
// document.querySelector("#card").onclick = eS.play;
