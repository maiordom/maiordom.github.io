$(function() {
    'use strict';

    var transformPropName = getTransformPropNameByPrefix(),
        logotype    = $( '#maiordom' ),
        faceWrapper = $( '.cube-wrapper' ),
        face        = $( '.cube' ),
        root        = $( window ),
        rootWidth   = root.width(),
        rootHeight  = root.height();

    function isIE10() {
        if ( $.browser.msie && parseInt( $.browser.version ) === 10 ) {
            return true;
        }
    }

    function has3dSupport() {
        var props = 'perspectiveProperty WebkitPerspective MozPerspective OPerspective msPerspective'.split( ' ' ),
            el = document.createElement( 'div' );

        for ( var i = 0, ilen = props.length; i < ilen; i++ ) {
            if ( typeof el.style[ props[ i ] ] !== 'undefined' ) {
                return true;
            }
        }

        return false;
    }

    function getTransformPropNameByPrefix() {
        var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split( ' ' ),
            el = document.createElement( 'div' );

        for ( var i = 0, ilen = props.length; i < ilen; i++ ) {
            if ( typeof el.style[ props[ i ] ] !== 'undefined' ) {
                return props[ i ];
            }
        }
    }

    function mtRand( min, max ) {
        min = parseInt( min, 10 ),
        max = parseInt( max, 10 );

        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    function setFace() {
        var maxX, maxY, subTl, $el, tl, subTlArr = [],
            x = 0,
            y = 100,
            z = 0;

        maxX = rootWidth;
        maxY = rootHeight;

        faceWrapper.appendTo( logotype ).show();

        if ( !has3dSupport() || isIE10() ) {
            return;
        }

        faceWrapper.find( '.cube-item' ).each( function( i, el ) {
            $el = $( this );

            TweenMax.to( $el, 0.2, {
                repeat: -1,
                repeatDelay: Math.random() * 40 + 3,
                yoyo: true
            });

            subTl = new TimelineMax({
                delay: i * 0.1 + 0.5
            });

            subTl.add( TweenMax.from( $el, 1, {
                css: {
                    alpha: 0,
                    left: Math.random() * maxX - ( maxX / 2 ),
                    top: Math.random() * maxY - ( maxY / 2 )
                },
                ease: Power3.easeInOut
            }));

            subTlArr.push( subTl );
        });

        tl = new TimelineMax({
            onComplete: function() {
                face[ 0 ].style[ transformPropName ] = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)';     
            }
        });

        tl.add( subTlArr );
        tl.play();
    }

    function setLogotype( $chars ) {
        var maxX, maxY, subTl, $pixel;

        maxX = rootWidth;
        maxY = rootHeight;

        $chars.find( '.pixel' ).each( function( i, el ) {
            $pixel = $( this );

            TweenMax.to( $pixel, 0.2, {
                css: {
                    backgroundColor: '#111111'
                },
                repeat: -1,
                repeatDelay: Math.random() * 40 + 3,
                yoyo: true
            });

            subTl = new TimelineLite( {
                delay: i * 0.1
            });

            subTl.add( TweenMax.from( $pixel, 1, {
                css: {
                    alpha: 0,
                    x: Math.random() * maxX - ( maxX / 2 ),
                    y: Math.random() * maxY - ( maxY / 2 )
                },
                ease: Power3.easeInOut
            }));

            subTl.add( TweenMax.from( $pixel, 0.8, {
                css: {
                    scale: Math.random() * 3,
                    rotation: Math.random() * 360 - 180
                }
            }), 0.8 );

            subTl.play();
        });
    }

    setTimeout( function() {
        $( '.head' ).animate( { height: '135px' }, 1000 );
        var $letter = logotype.show().find( '.letter' ),
            $lastChars = $letter.slice( 5 ),
            $buff = $();

        $buff[ 0 ] = $lastChars[ 2 ];
        $buff[ 1 ] = $lastChars[ 1 ];
        $buff[ 2 ] = $lastChars[ 0 ];
        $buff.length = 3;
        $lastChars = $buff;

        setFace();
        setLogotype( $letter.slice( 0, 5 ) );
        setLogotype( $lastChars );
    }, 1500 );
});