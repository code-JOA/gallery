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
)
  // bottom
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "a"
  );

// top-h
.to(
  "#top-h",
  {
    top: "80%",
  },
  "a"
);
