var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
    markers: true,
  },
});

// top
tl.to(
  "#top",
  {
    top: "-50%",
  },
  "a"
);
// bottom
tl.to(
  "#bottom",
  {
    bottom: "-50%",
  },
  "a"
);

// top-h
tl.to(
  "#top-h",
  {
    top: "80%",
  },
  "a"
);
// bottom
tl.to(
  "#bottom-h",
  {
    bottom: "-80%",
  },
  "a"
);

// content
tl.to(
  "#content",
  {
    marginTop: "0%",
  },
  "a"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers:true,
    start: "75% 50%",
    end: "100% 50%",
    scrub: 5,
    duration: 1,
    pin: true,
  },
});
tl2.to(".img", {
  width: "100vw",
  height: "100vh",
});

//
var circle = document.querySelector("#circle");
var frame = document.querySelector(".part1");

const lerp = (x, y, a) => x * (1 - a) + y * a;

// window.addEventListener("mousemove", function (dets) {
//   circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
// });

window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
  });
});

frame.addEventListener("mousemove", function (dets) {
  var dims = frame.getBoundingClientRect();

  var xstart = dims.x;
  var xend = dims.x + dims.width;

  //   gsap.utils.clamp(xstart, xend);
  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

  gsap.to(circle, {
    scale: 8,
  });

  gsap.to(".frame span", {
    color: "#fff",
    duration: 0.2,
    y: "-5vw",
  });

  gsap.to(".frame span", {
    x: lerp(-50, 50, zeroone),
    duration: 0.3,
  });
});

frame.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
  });

  gsap.to(".frame span", {
    color: "#111",
    duration: 0.4,
    y: 0,
  });

  gsap.to(".frame span", {
    x: 0,
    duration: 0.3,
  });
});
