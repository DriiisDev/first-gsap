
// using import syntax
import gsap from "../node_modules/gsap/index.js";

// gsap.from('header', {duration: 0.6, ease:"power2.out", y: -60});
// gsap.from('.hero-content', {duration: 0.6, ease:"power2.out", opacity:0, x: -60, delay: 1});
// gsap.from('.hero-illustration', {duration: 0.6, ease:"power2.out", opacity:0, delay:1});

let tl = gsap.timeline({delay:1});
tl.from('header', {duration: 0.6, ease:"power2.out", y: -60});
tl.from('.hero-content', {duration: 0.6, ease:"power2.out", x:-60, opacity: 0});
tl.from('.hero-illustration', {duration: 0.6, ease:"power2.out", opacity: 0});

gsap.to("#red-car",{
    duration:8,
    x: 1960,
    y: 439,
    ease: "none",
    repeat: 5,
    repeatDelay: 2,
})

gsap.to("#blue-car",{
    duration:16,
    x: 612,
    y: 210,
    ease: "none",
    repeat:5,
    repeatDelay: 1,
})

gsap.to("#yellow-car",{
    duration:7,
    x: 884,
    y: 1114,
    ease: "none",
    repeat:4,
    repeatDelay: 1,
})