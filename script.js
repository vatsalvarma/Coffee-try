// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Navbar Blur Effect on Scroll
ScrollTrigger.create({
    start: 'top -50',
    end: 99999,
    toggleClass: {className: 'navbar-scrolled', targets: '.navbar'}
});

// Adding scrolled class dynamically via CSS is better:
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.4)';
        nav.style.backdropFilter = 'blur(16px)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.5)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.borderBottom = 'none';
    }
});

// Hero Animations
const tl = gsap.timeline();

tl.from(".navbar", { y: -50, opacity: 0, duration: 1, ease: "power3.out" })
  .from(".hero-title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
  .from(".hero-btn", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
  .from(".hero-icons .icon-glass", { 
      y: 20, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.1, 
      ease: "back.out(1.5)" 
  }, "-=0.4")
  .from(".hero-cup", { 
      scale: 0.8, 
      opacity: 0, 
      rotation: -10, 
      duration: 1.2, 
      ease: "power3.out" 
  }, "-=1");

// Continuous floating animation for hero cup
gsap.to(".hero-cup", {
    y: -25,
    rotation: 3,
    yoyo: true,
    repeat: -1,
    duration: 3.5,
    ease: "sine.inOut"
});

// Menu Section Animations
gsap.from(".coffee-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".menu",
        start: "top 75%",
    }
});

gsap.from(".menu-text", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".menu",
        start: "top 75%",
    }
});

// Feature Section
gsap.from(".feature-text", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".feature",
        start: "top 75%",
    }
});

gsap.from(".feature-cup", {
    scale: 0.8,
    opacity: 0,
    rotation: -15,
    duration: 1.2,
    ease: "back.out(1.2)",
    scrollTrigger: {
        trigger: ".feature",
        start: "top 75%",
    }
});

gsap.from(".floating-badge", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: ".feature",
        start: "top 75%",
    }
});

// Floating badge subtle hover animation
gsap.to(".floating-badge", {
    y: "-=15",
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: "sine.inOut"
});

// Beans Parallax
const beans = gsap.utils.toArray('.bean');
beans.forEach((bean, i) => {
    // Parallax on scroll
    gsap.to(bean, {
        y: (i + 1) * -40,
        rotation: (i + 1) * 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".feature",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });
    
    // Continuous subtle floating
    gsap.to(bean, {
        x: "+=10",
        y: "+=15",
        rotation: "+=10",
        duration: 3 + Math.random() * 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: Math.random()
    });
});

// App Section
gsap.from(".phone-mockup", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".app-section",
        start: "top 75%",
    }
});

gsap.from(".app-text", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".app-section",
        start: "top 75%",
    }
});

// CTA Section
gsap.from(".cta-content", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".cta",
        start: "top 85%",
    }
});
