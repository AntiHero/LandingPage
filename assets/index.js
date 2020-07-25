
$(window).on("load", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

const skipBtn = document.querySelector('.skip');

let delay = 8000;

const tween1 = TweenMax.to(".loading-screen", 3, {
  delay: 3.9,
  top: "-110%",
  ease: Expo.easeInOut,
});

const tween2 =  TweenMax.from(".contact", 3, {
  delay: 5.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween3 = TweenMax.from(".bottom-text", 3, {
  delay: 5.7,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween4 = TweenMax.from(".copyright", 3, {
  delay: 5.9,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween5 = TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    delay: 5.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  0.1
);

const tween6 = TweenMax.from(".menu", 3, {
  delay: 5.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween7 = TweenMax.from(".p1", 3, {
  delay: 6,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween8 = TweenMax.from(".p2", 3, {
  delay: 6.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween9 = TweenMax.from(".slide-wrapper", 3, {
  delay: 6.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});

const tween10 = TweenMax.from("#one", 3, {
  delay: 6.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});



let t1 = new TimelineMax();

t1.from(".ringOne", 3, {
  delay: 0.4,
  opacity: 0,
  y: 300,
  ease: Expo.easeInOut,
})
  .from(
    ".ringTwo",
    3,
    {
      delay: 0.4,
      opacity: 0,
      y: 300,
      ease: Expo.easeInOut,
    },
    "-=6"
  )
  .to(".ringOne", 3, {
    delay: 0.4,
    x: "15vw",
    ease: Expo.easeInOut,
  })
  .to(
    ".ringTwo",
    3,
    {
      delay: 0.9,
      x: "15vw",
      ease: Expo.easeInOut,
    },
    "-=6"
  );

let textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

$(textWrapper.firstChild).addClass("red");

let t2 = anime.timeline({ loop: false });
t2.add({
  targets: ".letter",
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 750,
  easing: "easeOutExpo",
  delay: function (el, i) {
    return delay + 50 * i;
  },
  complete: function () {
    $("body").css("overflow-y", "visible");
    $('.skip').attr('disabled', true);
  },
});


const controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "200%",
  },
});

const slides = document.querySelectorAll("section.panel");

for (let i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
    .setPin(slides[i], { pushFollowers: false })
    .addTo(controller);
}


$('.skip').on('click', function() {
  tween1.totalProgress(1);
  tween2.totalProgress(1);
  tween3.totalProgress(1);
  tween4.totalProgress(1);
  tween5.totalProgress(1);
  tween6.totalProgress(1);
  tween7.totalProgress(1);
  tween8.totalProgress(1);
  tween9.totalProgress(1);
  tween10.totalProgress(1);
  t1.totalProgress(1);
  anime.speed = 500;
});