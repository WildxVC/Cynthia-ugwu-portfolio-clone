const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl1 = gsap.timeline()

    tl1.from("nav", {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "expo.inOut",
    })
        .to(".elem-holder h1", {
            y: 0,
            duration: 1,
            ease: "power4.inOut",
            stagger: 0.1
        })
        .to(".elem-holder h3", {
            y: 0,
            delay: -1,
            duration: 1,
            ease: "power4.inOut"
        })
        .to(".elem-holder p", {
            y: 0,
            delay: -1,
            duration: 1,
            ease: "power4.inOut"
        })
        .from(".landing-footer", {
            opacity: 0,
            duration: 0.5,
            ease: "expo.inOut"
        })

};

function circleMouseFollower() {
    var cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", function (dets) {
        console.log(dets);
        cursor.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    });
};

function hoverListAnimation() {
    document.querySelectorAll(".list-elem").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;

        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            });
        });

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
                duration: 0.5,
            });
        });
    })
};

circleMouseFollower();
firstPageAnimation();
hoverListAnimation();