function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoScroll();

function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");
  var page5 = document.querySelector("#page5");
  var cursor2 = document.querySelector("#cursor2");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

  page5.addEventListener("mousemove", function (dets) {
    gsap.to(cursor2, {
      x: dets.x,
      y: dets.y - 160,
    });
  });

  page5.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    });
  });

  page5.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.from("#page2 .elem h1, #page2-top", {
    y: 120,
    duration: 2.5,
    stagger: 0.25,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      markers: false,
      scrub: 2,
    },
  });
}
page2Animation();

function page3Animation() {
  gsap.from("#page3-top h4, #page3-top h2", {
    y: 120,
    duration: 2.5,
    stagger: 0.25,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      markers: false,
      scrub: 2,
    },
  });
}
page3Animation();

function page4Animation() {
  gsap.from("#page4 .elem h1, #page4-top", {
    y: 120,
    duration: 2.5,
    stagger: 0.25,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      markers: false,
      scrub: 2,
    },
  });
}
page4Animation();

function page6Animation() {
  gsap.from("#page6 .elem h1, #page6-top", {
    y: 120,
    duration: 2.5,
    stagger: 0.25,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      markers: false,
      scrub: 2,
    },
  });
}
page6Animation();

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
  });
}
sliderAnimation();

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loaderAnimation();

function page7Animation() {
  gsap.from("#page7-bottom h4, #page7-bottom h2", {
    y: 120,
    duration: 2.5,
    stagger: 0.25,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      markers: false,
      scrub: 2,
    },
  });
}
page7Animation();

function footerAnimation() {
  gsap.from("#footer h1 span ,#footer-top,#footer-middle", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    delay: 2,
    scrollTrigger: {
      trigger: "#footer",
      scroller: "#main",
      start: "top 5%",
      end: "top 2%",
      markers: false,
      scrub: 2,
    },
  });
}
footerAnimation();
