window.addEventListener('load', function (e) {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    if (document.querySelector('.lonline')) {

        gsap.to(".lonline__car", {
            scrollTrigger: {
                trigger: ".lonline",
                start: 'top 30%',
                end: '60% 30%',
                // markers: true,
                scrub: true,
            },
            motionPath: {
                path: [
                    {x: -1000, y: -400, rotation: -90}, {x: -400, y: -400, rotation: -45}, {x: 0, y: 0, rotation: 0},
                ]
            },
        });
    }

    if (document.querySelector('.lsteps')) {


        gsap.to(".lsteps__car", {
            scrollTrigger: {
                trigger: ".lsteps",
                start: '-10% top',
                end: '60% 20%',
                // markers: true,
                scrub: true,
            },
            motionPath: {
                autoRotate: true,
                path: [
                    {x: 0, y: 180}, {x: 0, y: 185}, {x: 0, y: 190}, {x: 850, y: 190}
                ]
            },

        });
    }

    if (document.querySelector('.ltarrifs')) {
        ScrollTrigger.create({
            trigger: ".ltarrifs",
            start: '20% center',
            end: 'center',
            // markers: true,
            onToggle: self => {
                if (self.isActive) {
                    $('.ltarrif__count-val').each(function () {
                        let val = $(this).text(),
                            line = $(this).next().find('.ltarrif__count-line'),
                            degree = Math.ceil(val / 56 * 180);

                        gsap.fromTo(line[0],
                            {
                                rotation: 0,
                            },
                            {
                                rotation: degree,
                                duration: 2
                            });

                        $(this).prop('Counter', 0).animate({
                            Counter: val
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
            },
        });
    }

    $('.lrevs__slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        prevArrow: ".lrevs__prev",
        nextArrow: ".lrevs__next",
        appendDots: ".lrevs__dots",
        autoplay: true,
        autoplaySpeed: 5000,
    });

});