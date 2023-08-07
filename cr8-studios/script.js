var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
    // markers: true,
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

// black circle
document
  .querySelector("#aboutme")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#aboutme").style.transform = `translate(${
      dets.clientX * 0.02
    }px, ${dets.clientY * 0.02}px)`;
    document.querySelector("#aboutme").style.backgroundColor = "blue";
    document.querySelector("#aboutme").style.cursor = "pointer";
  });

document.querySelector("#aboutme").addEventListener("mouseleave", function () {
  document.querySelector("#aboutme").style.transform = `translate(0px, 0px)`;
  document.querySelector("#aboutme").style.cursor = "pointer";
  document.querySelector("#aboutme").style.backgroundColor = "#000";
});

// original circle
// const text = document.getElementById("text3");
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
// const ele = document.querySelectorAll("span");
// for (var i = 1; i < ele.length; i++) {
//   ele[i].style.transform = "rotate(" + i * 16.5 + "deg)";
// }

// 2nd working rotating circle
// const text = document.getElementById("text3");
// const chars = text.textContent.split("");

// text.innerHTML = chars.map((char) => `<span>${char}</span>`).join("");

// const spans = document.querySelectorAll("#text3 span");
// spans.forEach((span, i) => {
//   span.style.transform = `rotate(${(i + 1) * 16.5}deg)`;
// });

// rotating circle 2nd code

// const textElements = document.querySelectorAll("#text3");

// textElements.forEach((text) => {
//   const chars = text.innerText.trim().split("");
//   const totalChars = chars.length;

//   text.innerHTML = chars
//     .map(
//       (char, i) =>
//         `<span style="transform:rotate(${
//           (360 / totalChars) * i
//         }deg) translateX(100px)">${char}</span>`
//     )
//     .join("");
// });

//
// Projects

window.addEventListener("mousemove", function (chahcha) {
  document.querySelector("#slidephoto").style.top = `${chahcha.clientY}px`;
  document.querySelector("#slidephoto").style.left = `${chahcha.clientX}px`;
  document.querySelector("#slidephoto").style.transform = `translate(${
    -chahcha.clientX * 0.2
  }px, ${-chahcha.clientY * 0.45}px)`;
});

document.querySelector("#chainn").addEventListener("mousemove", function () {
  document.querySelector("#slidephotos").style.marginTop = "0%";
  document.querySelector("#chainn").style.color = "rgb(177, 177, 177)";
});

document.querySelector("#chainn").addEventListener("mouseleave", function () {
  document.querySelector("#chainn").style.color = "initial";
});

document.querySelector("#aty").addEventListener("mousemove", function () {
  document.querySelector("#slidephotos").style.marginTop = "-120%";
  document.querySelector("#aty").style.color = "rgb(177, 177, 177)";
});

document.querySelector("#aty").addEventListener("mouseleave", function () {
  document.querySelector("#aty").style.color = "initial";
});

document.querySelector("#mic").addEventListener("mousemove", function () {
  document.querySelector("#slidephotos").style.marginTop = "-240%";
  document.querySelector("#mic").style.color = "rgb(177, 177, 177)";
});

document.querySelector("#mic").addEventListener("mouseleave", function () {
  document.querySelector("#mic").style.color = "initial";
});

document.querySelector("#tapso").addEventListener("mousemove", function () {
  document.querySelector("#slidephotos").style.marginTop = "-360%";
  document.querySelector("#tapso").style.color = "rgb(177, 177, 177)";
});

document.querySelector("#tapso").addEventListener("mouseleave", function () {
  document.querySelector("#tapso").style.color = "initial";
});

document.querySelector("#eff").addEventListener("mousemove", function () {
  document.querySelector("#slidephoto").style.display = "initial";
  document.querySelector("#slidephoto").style.opacity = 1;
});

document.querySelector("#eff").addEventListener("mouseleave", function () {
  document.querySelector("#slidephoto").style.display = "none";
  document.querySelector("#slidephoto").style.opacity = 0;
});

document.querySelector("#btnsm").addEventListener("mousemove", function () {
  document.querySelector("#btnsm").style.backgroundColor = "blue";
  document.querySelector("#btnsm").style.cursor = "pointer";
  document.querySelector("#btnsm h1").style.color = "white";
});

document.querySelector("#btnsm").addEventListener("mouseleave", function () {
  document.querySelector("#btnsm").style.backgroundColor = "initial";
  document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)";
});

// section
// const span = document.querySelector(".hover-btn2");
// const overlay = document.querySelector(".overlay");

// window.addEventListener("mousemove", (e) => {
//   const { clientX, clientY } = e;
//   const x = Math.round((clientX / window.innerWidth) * 100);
//   const y = Math.round((clientY / window.innerHeight) * 100);

//   gsap.to(overlay, {
//     "--x": `${x}%`,
//     "--y": `${y}%`,
//     duration: 0.3,
//     ease: "sine.out",
//   });
// });

// span.addEventListener("click", () => {
//   overlay.classList.toggle("is-open");
// });

function setupHoverEffect() {
  const span = document.querySelector(".hover-btn2");
  const overlay = document.querySelector(".overlay");

  if (span && overlay) {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(overlay, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
      });
    });

    span.addEventListener("click", () => {
      overlay.classList.toggle("is-open");
    });
  }
}

// Call the setupHoverEffect function to enable the mouse interaction all over the website
setupHoverEffect();
