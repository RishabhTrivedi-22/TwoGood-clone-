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


function cursorAnimation() {
  document.addEventListener('mousemove', (dets) => {
    gsap.to("#cursor", {
      top: dets.y,
      left: dets.x
    });
  });
  
  // * Cursor animation for product-1 =>
  document.querySelector("#product1").addEventListener('mouseenter', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
      duration: 1,
      backgroundColor: '#f7f2ec'
    });
  });
  document.querySelector("#product1").addEventListener('mouseleave', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)"
    });
  });
  
  // * Cursor animation for product-2 =>
  document.querySelector("#product2").addEventListener('mouseenter', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
      duration: 1,
      backgroundColor: '#ececec'
    });
  });
  document.querySelector("#product2").addEventListener('mouseleave', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)"
    });
  });
  
  // * Cursor animation for product-3 =>
  document.querySelector("#product3").addEventListener('mouseenter', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
      duration: 1,
      backgroundColor: '#ede6e6'
    });
  });
  document.querySelector("#product3").addEventListener('mouseleave', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)"
    });
  });
  
  // * Cursor animation for product-4 =>
  document.querySelector("#product4").addEventListener('mouseenter', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
      duration: 1,
      backgroundColor: '#d6e0e0'
    });
  });
  document.querySelector("#product4").addEventListener('mouseleave', () => {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(0)"
    });
  });
}
cursorAnimation()