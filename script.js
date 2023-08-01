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
