window.addEventListener('load', function (e) {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    if (document.querySelector('.lonline') && window.innerWidth > 1200) {

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

    if (document.querySelector('.lsteps__items')) {

        let path = [
                {x: 0, y: 180},
                {x: 0, y: 185},
                {x: 0, y: 190},
                {x: 310, y: 190},
                {x: 310, y: 195},
                {x: 310, y: 660},
            ],
            start = '-50% top';


        if (window.innerWidth < 1200) {
            path = [
                {x: 0, y: 180},
                {x: 0, y: 970},
                {x: 0, y: 975},
                {x: 10, y: 975},
                {x: 310, y: 975},
                {x: 310, y: 980},
                {x: 310, y: 1500},
            ];
            start = 'top top';
        }

        if (window.innerWidth < 768) {
            path = [
                {x: 0, y: 180},
                {x: 0, y: 1900},
            ];
            start = 'top top';
        }


        gsap.to(".lsteps__car", {
            scrollTrigger: {
                trigger: ".lsteps__items",
                start: start,
                end: 'bottom 20%',
                // markers: true,
                scrub: true,
            },
            motionPath: {
                autoRotate: true,
                path: path
            },
        });
    }

    if (document.querySelector('.ltarrifs') && window.innerWidth>=768) {

        $('.ltarrif').each(function (i) {
            ScrollTrigger.create({
                trigger: this,
                start: '-30% center',
                end: 'center',
                toggleClass: "active",
                // markers: true,
                onToggle: self => {
                    if (self.isActive) {
                        let valObj = $(self.trigger).find('.ltarrif__count-val'),
                            val = valObj.text(),
                            line = $(this).find('.ltarrif__count-line'),
                            degree = Math.ceil(val / 56 * 180);

                        gsap.fromTo(line[0],
                            {
                                rotation: 0,
                            },
                            {
                                rotation: degree,
                                duration: 2
                            });

                        $(valObj).prop('Counter', 0).animate({
                            Counter: val
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function (now) {
                                $(valObj).text(Math.ceil(now));
                            }
                        });

                    }
                },
            });
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

    if  (window.innerWidth<768){
        $('.ltarrifs__list').slick({
            arrows: false,
            dots: false,
            speed: 300,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
        });
    }

});