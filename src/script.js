const $circOne = document.querySelector(".one");
const $circTwo = document.querySelector(".two");

const tl = new TimelineMax({
  onComplete: () => {
    tl.play(4);
  }
})

.to($circTwo, 2, {
  rotation: 360,
  repeat: 1.25,
  transformOrigin: "15px 140px",
  ease: Linear.easeNone
})

.to($circTwo, 1, {
  rotation: 90,
  delay: -0.5,
  width: "200px",
  height: "200px",
  ease: Power2.easeOut
})

.to($circTwo, 1, {
  delay: -1,
  x: 45,
  y: -85
})

.to($circOne, 1, {
  delay: -1,
  rotation: 0,
  x: -125,
  y: -10,
  width: "30px",
  height: "30px",
  transformOrigin: "140px 15px",
  ease: Power2.easeOut
})

.to($circOne, 4, {
  delay: -1,
  rotation: 810,
  ease: Linear.easeNone
});