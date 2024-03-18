const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function videoConAnimation() {
  const videoCon = document.querySelector("#vid-container");
  const playBtn = document.querySelector(".play-hover");

  videoCon.addEventListener('mouseenter', () => {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1
    });
  });
  videoCon.addEventListener('mouseleave', () => {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0
    });
  });
  videoCon.addEventListener('mousemove', (dets) => {
    gsap.to(playBtn, {
      left: dets.x - 50,
      top: dets.y - 60
    });
  });
}
videoConAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3
  });
  gsap.from("#page1 #vid-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadingAnimation();
