/* global TweenMax:true TimelineMax:true Power3:true TimelineLite:true */
(function($, window, undefined) { //eslint-disable-line
    'use strict';

    var transformPropName = getTransformPropNameByPrefix();
    var logotype = $('#maiordom');
    var faceWrapper = $('.cube-wrapper');
    var face = $('.cube');
    var rootWidth = $(window).width();
    var rootHeight = $(window).height();

    function isIE10() {
        if ($.browser.msie && parseInt($.browser.version, 10) === 10) {
            return true;
        }
    }

    function has3dSupport() {
        var el = document.createElement('div');

        var props = [
            'perspectiveProperty',
            'WebkitPerspective',
            'MozPerspective',
            'OPerspective',
            'msPerspective'
        ];

        for (var i = 0; i < props.length; i++) {
            if (typeof el.style[props[i]] !== 'undefined') {
                return true;
            }
        }

        return false;
    }

    function getTransformPropNameByPrefix() {
        var el = document.createElement('div');

        var props = [
            'transform',
            'WebkitTransform',
            'MozTransform',
            'OTransform',
            'msTransform'
        ];

        for (var i = 0, ilen = props.length; i < ilen; i++) {
            if (typeof el.style[props[i]] !== 'undefined') {
                return props[i];
            }
        }
    }

    function setFace() {
        var itemsTimeline = [];
        var x = 0;
        var y = 100;
        var z = 0;

        faceWrapper.appendTo(logotype).show();

        if (!has3dSupport() || isIE10()) {
            return;
        }

        faceWrapper.find('.cube-item').each(function(i, el) {
            var $el = $(this);

            TweenMax.to($el, 0.2, {
                repeat: -1,
                repeatDelay: Math.random() * 40 + 3,
                yoyo: true
            });

            var timeline = new TimelineMax({
                delay: i * 0.1 + 0.5
            });

            timeline.add(TweenMax.from($el, 1, {
                css: {
                    alpha: 0,
                    left: Math.random() * rootWidth - (rootWidth / 2),
                    top: Math.random() * rootHeight - (rootHeight / 2)
                },
                ease: Power3.easeInOut
            }));

            itemsTimeline.push(timeline);
        });

        var timelineMax = new TimelineMax({
            onComplete: function() {
                face[0].style[transformPropName] = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)';
            }
        });

        timelineMax.add(itemsTimeline);
        timelineMax.play();
    }

    function setLogotype($chars) {
        $chars.find('.pixel').each(function(i, el) {
            var $pixel = $(this);

            TweenMax.to($pixel, 0.2, {
                css: {
                    backgroundColor: '#111111'
                },
                repeat: -1,
                repeatDelay: Math.random() * 40 + 3,
                yoyo: true
            });

            var timeline = new TimelineLite({
                delay: i * 0.1
            });

            timeline.add(TweenMax.from($pixel, 1, {
                css: {
                    alpha: 0,
                    x: Math.random() * rootWidth - (rootWidth / 2),
                    y: Math.random() * rootHeight - (rootHeight / 2)
                },
                ease: Power3.easeInOut
            }));

            timeline.add(TweenMax.from($pixel, 0.8, {
                css: {
                    scale: Math.random() * 3,
                    rotation: Math.random() * 360 - 180
                }
            }), 0.8);

            timeline.play();
        });
    }

    setTimeout(function() {
        $('.head').animate({
            height: '135px'
        }, 1000);

        var $letter = logotype.show().find('.letter');
        var $lastChars = $letter.slice(5);
        var $buff = $();

        $buff[0] = $lastChars[2];
        $buff[1] = $lastChars[1];
        $buff[2] = $lastChars[0];
        $buff.length = 3;
        $lastChars = $buff;

        setFace();
        setLogotype($letter.slice(0, 5));
        setLogotype($lastChars);
    }, 1500);

})(jQuery, window, undefined); //eslint-disable-line
