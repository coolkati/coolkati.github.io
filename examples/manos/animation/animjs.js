gsap.registerPlugin(ScrollTrigger);

var tl1 = gsap.timeline({scrollTrigger: {
		trigger: '.manosIntro',
		endTrigger: '.introImg',
		toggleActions: 'play pause reverse resume',
		start: "top top",
   		end: "bottom top",
   		pin: true,
   		scrub: true //was 3
	}})
	tl1.to('.descManos', {opacity: 0, duration: 2})

var tl2 = gsap.timeline({scrollTrigger: {
		trigger: '.introImg',
		endTrigger: '.info1',
		toggleActions: 'play pause reverse resume',
		start: "top top",
   		end: "bottom top",
   		pin: ".introImg",
   		scrub: true //was 3
	}})
	tl2.from('.logoManos', {opacity: 0, duration: 2})
		.to('.logoManos', {zIndex: 3, scaleX: 1.2, scaleY: 1.2, duration: 2}, '<')
		.to('.logoManos', {zIndex: 1, scaleX: 1, scaleY: 1, duration: 2, yPercent: 15})
		.from('.villainManos', {opacity: 0, duration: 2}, '<');

gsap.utils.toArray('.comparisonSection').forEach(section => {
	var tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'center center',
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        		anticipatePin: 1
			},
			defaults: {ease: 'none'}
		});
	tl3.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	   .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});