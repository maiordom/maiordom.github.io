'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function ($, window, undefined) {
    'use strict';

    var DBItem;

    var Type;

    var GitHub = {
        src: 'assets/img/github_icon.png',
        width: 30,
        height: 30
    };

    var Single = {
        className: 'port_pet',
        width: 320,
        height: 320
    };
    var Double = {
        className: 'port_pet port_col2',
        width: 695,
        height: 320
    };

    var DB = [{
        type: 'single',
        title: 'Sindel',
        gitHub: {
            link: 'https://github.com/maiordom/sindel'
        },
        demo: {
            link: 'http://sati.16mb.com/sindel/',
            src: 'assets/img/git.sindel.png'
        }
    }, {
        type: 'double',
        title: 'Yahiko - Content Slider',
        gitHub: {
            link: 'https://github.com/maiordom/yahiko'
        },
        demo: {
            link: 'http://sati.16mb.com/yahiko/',
            src: 'assets/img/git.yahiko.png'
        }
    }, {
        type: 'single',
        title: 'iSlider',
        gitHub: {
            link: 'https://github.com/maiordom/islider'
        },
        demo: {
            link: 'http://sati.16mb.com/islider/',
            src: 'assets/img/git.islider.png'
        }
    }, {
        type: 'double',
        title: 'Chess Engine',
        gitHub: {
            link: 'https://github.com/maiordom/chess'
        },
        demo: {
            link: 'http://sati.16mb.com/chess/',
            src: 'assets/img/git.chess.jpg'
        }
    }, {
        type: 'single',
        title: 'Dark Menu',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/task17'
        },
        demo: {
            link: 'http://codepen.io/maiordom/pen/LwIkD',
            src: 'assets/img/dark-menu.jpg'
        }
    }, {
        type: 'double',
        title: 'Am',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/am'
        },
        demo: {
            link: 'http://sati.16mb.com/am/',
            src: 'assets/img/git.am.png'
        }
    }, {
        type: 'single',
        title: 'Counter',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/counter'
        },
        demo: {
            link: 'http://sati.16mb.com/counter/',
            src: 'assets/img/counter.jpg'
        }
    }, {
        type: 'double',
        title: 'Buttons Menu',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/dark-hor-menu'
        },
        demo: {
            link: 'http://codepen.io/maiordom/pen/jEghi',
            src: 'assets/img/dark-hor-menu.jpg'
        }
    }, {
        type: 'single',
        title: 'Table Sorter',
        gitHub: {
            link: 'https://github.com/maiordom/tablse-sorter'
        },
        demo: {
            link: 'http://sati.16mb.com/table-sorter/',
            src: 'assets/img/git.table-sorter.png'
        }
    }, {
        type: 'double',
        title: 'Clock',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/clock'
        },
        demo: {
            link: 'http://codepen.io/maiordom/full/Cqipw',
            src: 'assets/img/clock.jpg'
        }
    }, {
        type: 'single',
        title: 'Cube3d',
        gitHub: {
            link: 'https://github.com/maiordom/cube3d'
        },
        demo: {
            link: 'http://sati.16mb.com/cube3d/cube.html',
            src: 'assets/img/cube3d.png'
        }
    }, {
        type: 'double',
        title: 'Milena',
        gitHub: {
            link: 'https://github.com/maiordom/milena'
        },
        demo: {
            link: 'http://sati.16mb.com/milena/',
            src: 'assets/img/git.milena.png',
            height: 320
        }
    }, {
        type: 'single',
        title: 'Konan',
        gitHub: {
            link: 'https://github.com/maiordom/konan'
        },
        demo: {
            link: 'http://sati.16mb.com/konan/',
            src: 'assets/img/konan.png'
        }
    }, {
        type: 'double',
        title: 'Zero',
        gitHub: {
            link: 'https://github.com/maiordom/zero'
        },
        demo: {
            link: 'http://sati.16mb.com/zero/',
            src: 'assets/img/git.zero.jpg'
        }
    }, {
        type: 'single',
        title: 'Polygon',
        gitHub: {
            link: 'https://github.com/maiordom/gmaps-polygon'
        },
        demo: {
            link: 'http://sati.16mb.com/polygon/',
            src: 'assets/img/git.gmaps-polygon.png'
        }
    }, {
        type: 'double',
        title: 'd3Try',
        gitHub: {
            link: 'https://github.com/maiordom/d3try'
        },
        demo: {
            link: 'http://sati.16mb.com/d3try/step4/',
            src: 'assets/img/git.d3try.jpg'
        }
    }, {
        type: 'single',
        title: 'Kitana',
        gitHub: {
            link: 'https://github.com/maiordom/kitana'
        },
        demo: {
            link: 'https://github.com/maiordom/kitana',
            src: 'assets/img/git.kitana.png'
        }
    }, {
        type: 'double',
        title: 'Jade',
        gitHub: {
            link: 'https://github.com/maiordom/jade'
        },
        demo: {
            link: 'http://sati.16mb.com/jade/',
            src: 'assets/img/git.jade.jpg'
        }
    }];

    for (var i = 0, ilen = DB.length; i < ilen; i++) {
        DBItem = DB[i];
        Type = DBItem.type === 'single' ? Single : Double;
        DBItem.className = DBItem.className ? ' ' + Type.className : Type.className;
        DBItem.demo.width = DBItem.demo.width ? DBItem.demo.width : Type.width;
        DBItem.demo.height = DBItem.demo.height ? DBItem.demo.height : Type.height;
        DBItem.gitHub.src = GitHub.src;
        DBItem.gitHub.width = GitHub.width;
        DBItem.gitHub.height = GitHub.height;
    }

    DB.tmpl = '' + '<div class="port__item ${className}">\
            <div class="port__top">\
                <h2 class="port__title">${title}</h2>\
                <a class="port__github" target="_blank" href="${gitHub.link}">\
                    <img src="${gitHub.src}" width="${gitHub.width}" height="${gitHub.height}" alt="">\
                </a>\
            </div>\
            <a class="port__link" href="${demo.link}" target="_blank">\
                <img class="port__img" src="${demo.src}" width="${demo.width}" height="${demo.height}" alt="">\
                <p class="port__to">Visit demo</p>\
            </a>\
        </div>\
    ';

    DB.read = function (obj, parent, propName, callback) {
        parent = parent ? parent + '.' : '';
        for (var i in obj) {
            if (_typeof(obj[i]) === 'object') {
                DB.read(obj[i], parent + i, propName, callback);
            } else if (propName === parent + i) {
                callback(obj[i]);
            }
        }
    };

    DB.clear = function (propName) {
        return propName.replace(/\$|\{|\}/gi, '');
    };

    DB.renderItem = function (vars, data) {
        var item = DB.tmpl;

        vars.forEach(function (varsItem) {
            DB.read(data, '', DB.clear(varsItem), function (value) {
                item = item.replace(varsItem, value);
            });
        });

        return item;
    };

    DB.render = function (el) {
        var tmpl = [];
        var vars = DB.tmpl.match(/\$\{[a-zA-Z\.]*\}/gi);

        DB.forEach(function (dbItem) {
            tmpl.push(DB.renderItem(vars, dbItem));
        });

        el.append(tmpl.join(''));
    };

    window.DB = DB;
})(jQuery, window, undefined);
'use strict';

(function ($, window, undefined) {
    'use strict';

    var transformPropName = getTransformPropNameByPrefix();
    var logotype = $('#maiordom');
    var faceWrapper = $('.cube-wrapper');
    var face = $('.cube');
    var rootWidth = $(window).width();
    var rootHeight = $(window).height();

    function isIE10() {
        if ($.browser.msie && parseInt($.browser.version) === 10) {
            return true;
        }
    }

    function has3dSupport() {
        var el = document.createElement('div');

        var props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];

        for (var i = 0; i < props.length; i++) {
            if (typeof el.style[props[i]] !== 'undefined') {
                return true;
            }
        }

        return false;
    }

    function getTransformPropNameByPrefix() {
        var el = document.createElement('div');

        var props = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];

        for (var i = 0, ilen = props.length; i < ilen; i++) {
            if (typeof el.style[props[i]] !== 'undefined') {
                return props[i];
            }
        }
    }

    function mtRand(min, max) {
        min = parseInt(min, 10);
        max = parseInt(max, 10);

        return Math.floor(Math.random() * (max - min + 1)) + min;
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

        faceWrapper.find('.cube-item').each(function (i, el) {
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
                face[0].style[transformPropName] = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)';
            }
        });

        timelineMax.add(itemsTimeline);
        timelineMax.play();
    }

    function setLogotype($chars) {
        $chars.find('.pixel').each(function (i, el) {
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
                    x: Math.random() * rootWidth - rootWidth / 2,
                    y: Math.random() * rootHeight - rootHeight / 2
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

    setTimeout(function () {
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
})(jQuery, window, undefined);
'use strict';

(function ($, window, undefined) {
    'use strict';

    var columnWidth = 362;
    var gutterWidth = 15;
    var portfolio;
    var body;

    $(document).ready(init);

    function init() {
        body = $('body');
        console.time('render list');
        DB.render($('.port__list'));
        console.timeEnd('render list');

        setTimeout(function () {
            initGrid();
        }, 100);
    }

    function setPortfolioSize() {
        var containerWidth = body.width();
        var cols = Math.floor((containerWidth + gutterWidth) / (columnWidth + gutterWidth));
        cols = Math.max(cols, 1);
        var clearedColsWidth = cols * (columnWidth + gutterWidth);
        var colsWidth = clearedColsWidth + gutterWidth * (cols - 2);

        portfolio.css({
            width: colsWidth + 'px',
            left: '50%',
            'marginLeft': -(clearedColsWidth / 2) + 'px'
        });
    }

    function initGrid() {
        $(window).on('resize', setPortfolioSize);

        portfolio = $('.port__list');

        setPortfolioSize();

        portfolio.masonry({
            itemSelector: '.port__item',
            isAnimated: true,
            columnWidth: columnWidth,
            gutterWidth: gutterWidth
        });
    }
})(jQuery, window, undefined);