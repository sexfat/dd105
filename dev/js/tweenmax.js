console.log('ok');
var controller = new ScrollMagic.Controller();



TweenMax.to('.box1', 2, {
    // x: 800,
    width: '100%',
    // perspective:500,
    ease: Quad.easeOut,
    // autoAlpha: 0,
    // opacity: 0
    // rotation : 360,
    // transformOrigin : 'right bottom' ,//定位點

    // scale: 2
    // scaleX: 2
    // repeat : -1,
    // yoyo: true,
    // repeatDelay:1 
    // ease: SlowMo.ease.config(0.7, 0.7, false)
    // ease: Bounce.easeOut,
    // ease: Elastic.easeOut
    // ease: Power4.easeOut
});

TweenMax.fromTo('.box2', 3, {
    x: 300
}, {
    x: 700,
    ease: Elastic.easeOut
});



function animation() {
    TweenMax.staggerTo('.box3', 1, {
        x: 50,
        opacity: 1,
        ease: Bounce.easeOut,
    }, 0.3);
}




var tl = new TimelineMax({
    repeat: 1,
    yoyo: true
});

tl.to('.box4', 1, {
    x: 100
}).to('.box4', 1, {
    y: 100
}).to('.box5', 1, {
    x: 200
});


TweenMax.to('.circle', 1, {
    rotation: 360,
    repeat: -1,
    ease: Power0.easeNone,
})






TweenMax.to('.box-wide', 1.4, {
    rotationY: 360,
    repeat: -1,
    // ease : Power0.easeNone,
    transformOrigin: 'center 100% -200', //定位點
    transformPerspective: 600,
});


// function goalert() {
//     alert();
// }


TweenMax.to('.bezier', 2, {
    bezier: {
        values: [{
                x: 0,
                y: 0
            },
            {
                x: 600,
                y: 600
            },
            {
                x: 300,
                y: 400
            }, {
                x: 200,
                y: 100
            }

        ],
        autoRotate: false
    },
    ease: Elastic.easeOut

});


//scrollmagic

var scroll01 = TweenMax.to('.scroll01', 1, {
    x: 200,
    y: 200
});


new ScrollMagic.Scene({
    triggerElement: '#trigger01',
}).setTween(scroll01)
.addIndicators()
.addTo(controller);