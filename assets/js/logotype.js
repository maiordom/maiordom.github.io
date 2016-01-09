/* global TweenMax:true TimelineMax:true Power3:true TimelineLite:true */
(function($, window, undefined) { //eslint-disable-line
    'use strict';

    const logotype = $('.maiordom');
    const faceWrapper = $('.cube-wrapper');
    const face = $('.cube');
    const rootWidth = $(window).width();
    const rootHeight = $(window).height();

    const Utils = {
        isIE10() {
            if ($.browser.msie && parseInt($.browser.version, 10) === 10) {
                return true;
            }
        },

        has3dSupport() {
            let el = document.createElement('div');

            let props = [
                'perspectiveProperty',
                'WebkitPerspective',
                'MozPerspective',
                'OPerspective',
                'msPerspective'
            ];

            for (let i = 0; i < props.length; i++) {
                if (typeof el.style[props[i]] !== 'undefined') {
                    return true;
                }
            }

            return false;
        },

        getTransformPropNameByPrefix() {
            let el = document.createElement('div');

            let props = [
                'transform',
                'WebkitTransform',
                'MozTransform',
                'OTransform',
                'msTransform'
            ];

            for (let i = 0, ilen = props.length; i < ilen; i++) {
                if (typeof el.style[props[i]] !== 'undefined') {
                    return props[i];
                }
            }
        }
    };

    const transformPropName = Utils.getTransformPropNameByPrefix();

    class Logotype {
        constructor() {
            setTimeout(function() {
                this.init();
            }.bind(this), 250);
        }

        init() {
            let $letter = logotype.show().find('.letter');
            let $lastChars = $letter.slice(5);
            let $buff = $();

            $buff[0] = $lastChars[2];
            $buff[1] = $lastChars[1];
            $buff[2] = $lastChars[0];
            $buff.length = 3;
            $lastChars = $buff;

            this.setFace();
            this.setLogotype($letter.slice(0, 5));
            this.setLogotype($lastChars);
        }

        setFace() {
            let itemsTimeline = [];

            faceWrapper.appendTo(logotype).show();

            if (!Utils.has3dSupport() || Utils.isIE10()) {
                return;
            }

            faceWrapper.find('.cube__item').each(function(i, el) {
                let $el = $(this);

                TweenMax.to($el, 0.2, {
                    repeat: -1,
                    repeatDelay: Math.random() * 40 + 3,
                    yoyo: true
                });

                let timeline = new TimelineMax({
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

            let timelineMax = new TimelineMax({
                onComplete: function() {
                    face.addClass('cube_rotate');
                }
            });

            timelineMax.add(itemsTimeline);
            timelineMax.play();
        }

        setLogotype($chars) {
            $chars.find('.pixel').each(function(i, el) {
                let pixel = this;

                TweenMax.to(pixel, 0.2, {
                    css: {
                        backgroundColor: '#111111'
                    },
                    repeat: -1,
                    repeatDelay: Math.random() * 40 + 3,
                    yoyo: true
                });

                let timeline = new TimelineMax({
                    delay: i * 0.1
                });

                timeline.add(TweenMax.from(pixel, 1, {
                    alpha: 0,
                    x: Math.random() * rootWidth - (rootWidth / 2),
                    y: Math.random() * rootHeight - (rootHeight / 2),
                    transformOrigin: 'left top',
                    ease: Power3.easeInOut
                }));

                timeline.add(TweenMax.from(pixel, 0.8, {
                    scale: Math.random() * 3,
                    rotation: Math.random() * 360 - 180
                }), 0.8);

                timeline.play();
            });
        }
    }

    new Logotype();

})(jQuery, window, undefined); //eslint-disable-line
