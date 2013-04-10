$(function () {
    function logotype() {
        var maxX, maxY, tl, _this = this;

        maxX = window.innerWidth;
        maxY = $( window ).height();

        $( '#maiordom' ).show().find( '.letter .pixel' ).each( function ( i, el ) {
            var scaleTween, subTl, $el = $( this );

            TweenMax.to( $el, 0.2, {
                css: {
                    backgroundColor: "#111111"
                },
                repeat: -1,
                repeatDelay: Math.random() * 40 + 3,
                yoyo: true
            });

            subTl = new TimelineLite( {
                delay: i * 0.1
            });

            subTl.add( TweenMax.from( $el, 1, {
                css: {
                    alpha: 0,
                    x: Math.random() * maxX - ( maxX / 2 ),
                    y: Math.random() * maxY - ( maxY / 2 )
                },
                ease: Power3.easeInOut
            }));

            subTl.add( TweenMax.from( $el, 0.8, {
                css: {
                    scale: Math.random() * 3,
                    rotation: Math.random() * 360 - 180
                }
            }), 0.8 );

            subTl.play();
        });
    }

    setTimeout( function() {
        $( '.port-wrapper' ).animate( { paddingTop: '85px' }, 1000 );
        logotype();
    }, 1500 );
});