'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global TweenMax:true TimelineMax:true Power3:true TimelineLite:true */
(function ($, window, undefined) {
    //eslint-disable-line
    'use strict';

    var logotype = $('.maiordom');
    var faceWrapper = $('.cube-wrapper');
    var face = $('.cube');
    var rootWidth = $(window).width();
    var rootHeight = $(window).height();

    var Utils = {
        isIE10: function isIE10() {
            if ($.browser.msie && parseInt($.browser.version, 10) === 10) {
                return true;
            }
        },
        has3dSupport: function has3dSupport() {
            var el = document.createElement('div');

            var props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];

            for (var i = 0; i < props.length; i++) {
                if (typeof el.style[props[i]] !== 'undefined') {
                    return true;
                }
            }

            return false;
        },
        getTransformPropNameByPrefix: function getTransformPropNameByPrefix() {
            var el = document.createElement('div');

            var props = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];

            for (var i = 0, ilen = props.length; i < ilen; i++) {
                if (typeof el.style[props[i]] !== 'undefined') {
                    return props[i];
                }
            }
        }
    };

    var transformPropName = Utils.getTransformPropNameByPrefix();

    var Logotype = function () {
        function Logotype() {
            _classCallCheck(this, Logotype);

            setTimeout(function () {
                this.init();
            }.bind(this), 250);
        }

        _createClass(Logotype, [{
            key: 'init',
            value: function init() {
                var $letter = logotype.show().find('.letter');
                var $lastChars = $letter.slice(5);
                var $buff = $();

                $buff[0] = $lastChars[2];
                $buff[1] = $lastChars[1];
                $buff[2] = $lastChars[0];
                $buff.length = 3;
                $lastChars = $buff;

                this.setFace();
                this.setLogotype($letter.slice(0, 5));
                this.setLogotype($lastChars);
            }
        }, {
            key: 'setFace',
            value: function setFace() {
                var itemsTimeline = [];

                faceWrapper.appendTo(logotype).show();

                if (!Utils.has3dSupport() || Utils.isIE10()) {
                    return;
                }

                faceWrapper.find('.cube__item').each(function (i, el) {
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
                            left: Math.random() * rootWidth - rootWidth / 2,
                            top: Math.random() * rootHeight - rootHeight / 2
                        },
                        ease: Power3.easeInOut
                    }));

                    itemsTimeline.push(timeline);
                });

                var timelineMax = new TimelineMax({
                    onComplete: function onComplete() {
                        face.addClass('cube_rotate');
                    }
                });

                timelineMax.add(itemsTimeline);
                timelineMax.play();
            }
        }, {
            key: 'setLogotype',
            value: function setLogotype($chars) {
                $chars.find('.pixel').each(function (i, el) {
                    var pixel = this;

                    TweenMax.to(pixel, 0.2, {
                        css: {
                            backgroundColor: '#111111'
                        },
                        repeat: -1,
                        repeatDelay: Math.random() * 40 + 3,
                        yoyo: true
                    });

                    var timeline = new TimelineMax({
                        delay: i * 0.1
                    });

                    timeline.add(TweenMax.from(pixel, 1, {
                        alpha: 0,
                        x: Math.random() * rootWidth - rootWidth / 2,
                        y: Math.random() * rootHeight - rootHeight / 2,
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
        }]);

        return Logotype;
    }();

    new Logotype();
})(jQuery, window, undefined); //eslint-disable-line

(function ($, window, undefined) {
    //eslint-disable-line
    'use strict';

    var columnWidth = 362;
    var gutterWidth = 15;

    var Portfolio = function () {
        function Portfolio() {
            _classCallCheck(this, Portfolio);

            this.body = $('body');
            this.portfolio = $('.port__list').addClass('port__list_visible');

            this.bindEvents();
            this.setPortfolioSize();
            this.setMasonry();
        }

        _createClass(Portfolio, [{
            key: 'bindEvents',
            value: function bindEvents() {
                $(window).on('resize', this.setPortfolioSize.bind(this));
            }
        }, {
            key: 'setMasonry',
            value: function setMasonry() {
                this.portfolio.masonry({
                    itemSelector: '.port__item',
                    isAnimated: true,
                    columnWidth: columnWidth,
                    gutterWidth: gutterWidth
                });
            }
        }, {
            key: 'setPortfolioSize',
            value: function setPortfolioSize() {
                var containerWidth = this.body.width();
                var cols = Math.floor((containerWidth + gutterWidth) / (columnWidth + gutterWidth));
                cols = Math.max(cols, 1);
                var clearedColsWidth = cols * (columnWidth + gutterWidth);
                var colsWidth = clearedColsWidth + gutterWidth * (cols - 2);

                this.portfolio.css({
                    width: colsWidth + 'px',
                    left: '50%',
                    'marginLeft': -(clearedColsWidth / 2) + 'px'
                });
            }
        }]);

        return Portfolio;
    }();

    new Portfolio();
})(jQuery, window, undefined); // eslint-disable-line