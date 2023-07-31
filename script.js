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

tl.to("#top", {
  top: "-50%",
}).tl.to("#bottom", {
  bottom: "-50%",
});
