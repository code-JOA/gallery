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
  top: "-100%"
//   bottom: "-100%",
  dowm: "-50%",

});
