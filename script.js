 // Register ScrollTrigger plugin for GSAP
        gsap.registerPlugin(ScrollTrigger);
        // Create a timeline for coordinated entrance animations
        const loadTl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

        // Animate logo with spin and scale effect
        loadTl.from(".header img.logo", {
            x: -500,
            y: -500,
            opacity: 0,
            scale: 0.3,
            rotation: 720,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)"
        }, 0);

        // Animate header h1 elements with alternating side entrances
        gsap.utils.toArray(".header h1").forEach((h1, index) => {
            loadTl.from(h1, {
                x: index % 2 === 0 ? -800 : 800,
                opacity: 0,
                scale: 0.5,
                rotation: index % 2 === 0 ? -45 : 45,
                duration: 0.8,
                ease: "back.out(1.5)"
            }, 0.2 + index * 0.2);
        });

        // Animate header paragraph with zoom-in effect
        loadTl.from(".header p", {
            y: 600,
            opacity: 0,
            scale: 0.8,
            rotation: 10,
            duration: 1,
            ease: "power3.out"
        }, 0.6);

        // Animate dhamaka button with pop-in effect
        loadTl.from(".header .dhamaka-button", {
            x: -600,
            y: 400,
            opacity: 0,
            scale: 0,
            rotation: -360,
            duration: 1.2,
            ease: "elastic.out(1, 0.4)"
        }, 0.8);

        // Animate additional image with slide-in and flip effect
        loadTl.from(".header img.additional-image", {
            x: 1000,
            opacity: 0,
            scale: 0.5,
            rotationY: 90,
            duration: 1.2,
            ease: "power4.out"
        }, 0.9);

        // Animate header background color pulse
        loadTl.fromTo(".header", {
            backgroundColor: "#cc0000"
        }, {
            backgroundColor: "#ff4d4d",
            duration: 2,
            ease: "sine.inOut"
        }, 0);

        // Animate features section title on scroll
        gsap.from(".features h2", {
            y: -100,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".features h2",
                start: "top 80%"
            }
        });

        // Animate features section description on scroll
        gsap.from(".features p", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".features p",
                start: "top 80%"
            }
        });

        // Animate feature items with staggered entrance
        gsap.utils.toArray(".feature-item").forEach((item, index) => {
            gsap.from(item, {
                x: index % 2 === 0 ? -200 : 200,
                y: 100,
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    once: true
                }
            });
        });

        // Animate connection section title on scroll
        gsap.from(".connection h2", {
            x: -200,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".connection h2",
                start: "top 80%"
            }
        });

        // Animate connection section description on scroll
        gsap.from(".connection p", {
            x: -150,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".connection p",
                start: "top 80%"
            }
        });

        // Animate connection section image on scroll
        gsap.from(".connection-image img", {
            x: -300,
            opacity: 0,
            rotation: -15,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".connection-image",
                start: "top 80%"
            }
        });

        // Animate connection feature boxes with staggered entrance
        gsap.utils.toArray(".connection .feature-box").forEach((box, index) => {
            gsap.from(box, {
                x: 200,
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: "back.out(1.2)",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: box,
                    start: "top 85%"
                }
            });
        });

        // Animate install section title on scroll
        gsap.from(".install h2", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".install h2",
                start: "top 80%"
            }
        });

        // Animate install section description on scroll
        gsap.from(".install p", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".install p",
                start: "top 80%"
            }
        });

        // Animate install steps with staggered entrance
        gsap.utils.toArray(".step").forEach((step, index) => {
            gsap.from(step, {
                y: 150,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%"
                }
            });
        });

        // Animate reason section title on scroll
        gsap.from(".reason-content h2", {
            x: -200,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".reason-content h2",
                start: "top 80%"
            }
        });

        // Animate reason section description on scroll
        gsap.from(".reason-content p", {
            x: -150,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".reason-content p",
                start: "top 80%"
            }
        });

        // Animate reason section button on scroll
        gsap.from(".reason-content .dhamaka-button", {
            scale: 0,
            opacity: 0,
            rotation: -360,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".reason-content .dhamaka-button",
                start: "top 80%"
            }
        });

        // Animate reason section images with staggered entrance
        gsap.utils.toArray(".reason-images img").forEach((img, index) => {
            gsap.from(img, {
                x: 300,
                opacity: 0,
                rotation: 20,
                duration: 1.2,
                ease: "power3.out",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%"
                }
            });
        });

        // Animate testimonials section title on scroll
        gsap.from(".testimonials h2", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".testimonials h2",
                start: "top 80%"
            }
        });

        // Animate testimonials with staggered entrance
        gsap.utils.toArray(".testimonial").forEach((item, index) => {
            gsap.from(item, {
                x: index % 2 === 0 ? -200 : 200,
                y: 100,
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                delay: index * 0.15,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    once: true
                }
            });
        });

        // Animate footer section title on scroll
        gsap.from(".footer-content h2", {
            x: -200,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".footer-content h2",
                start: "top 80%"
            }
        });

        // Animate footer section description on scroll
        gsap.from(".footer-content p", {
            x: -150,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".footer-content p",
                start: "top 80%"
            }
        });

        // Animate footer buttons with staggered entrance
        gsap.utils.toArray(".footer-button").forEach((button, index) => {
            gsap.from(button, {
                x: 300,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "back.out(1.5)",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: ".footer-buttons",
                    start: "top 85%"
                }
            });
        });

        // Animate footer images with staggered entrance
        gsap.utils.toArray(".footer-images img").forEach((img, index) => {
            gsap.from(img, {
                x: 400,
                opacity: 0,
                rotation: 15,
                duration: 1.2,
                ease: "power3.out",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: img,
                    start: "top 85%"
                }
            });
        });

        // Parallax effect for header background
        gsap.to(".header", {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".header",
                scrub: true,
                start: "top top",
                end: "bottom top"
            }
        });