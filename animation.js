// jshint esversion:6

var sw = document.body.clientWidth;
var hCardWidth = document.querySelector("#HCard").clientWidth;
var gap = document.querySelectorAll(".triGap");
var switchBar = true;
var rect = document.querySelector(".L6").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);


function ranDom() {
  var n = Math.random();
  n = n * 2;
  n = Math.floor(n);
  // console.log("the random number is " + n);
  return n;
}


document.querySelector("#HCard").onclick = function () {
  console.log('use this ' + switchBar);
  change(switchBar);
  switchBar = !switchBar;

};

function change(x) {
  switch (x) {
    case (false):
      eS.reverse();
      break;

    default:
      eS.play();
  }
}

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
    translateX: hCardWidth * 0.5 - (88 + 24),
    width: '20px',
    loopComplete: function () {
    },
  })
  .add({
    targets: '.tri',
    width: '176px',
    borderRadius: '0%',
    loopComplete: function () {
    },
  })
  .add({
    targets: '.triGap',
    background: 'rgb(255, 255, 255)',
    easing: 'easeInQuad',
    width: function (el, i, l) {
      var x = ranDom();
      console.log(x);
      if (x == 0)
        return 20;
    },
    height: function (el, i, l) {
      return 20;
    },
    duration: 200,
    loopComplete: function () {
    },

  });
