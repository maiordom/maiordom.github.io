(function($, window, undefined) {
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

    DB.tmpl = '' +
        '<div class="port__item ${className}">\
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

    DB.read = function(obj, parent, propName, callback) {
        parent = parent ? parent + '.' : '';
        for (var i in obj) {
            if (typeof obj[i] === 'object') {
                DB.read(obj[i], parent + i, propName, callback);
            } else if (propName === parent + i) {
                callback(obj[i]);
            }
        }
    };

    DB.clear = function(propName) {
        return propName.replace(/\$|\{|\}/gi, '');
    };

    DB.renderItem = function(vars, data) {
        var item = DB.tmpl;

        vars.forEach(function(varsItem) {
            DB.read(data, '', DB.clear(varsItem), function(value) {
                item = item.replace(varsItem, value);
            });
        });

        return item;
    };

    DB.render = function(el) {
        var tmpl = [];
        var vars = DB.tmpl.match(/\$\{[a-zA-Z\.]*\}/gi);

        DB.forEach(function(dbItem) {
            tmpl.push(DB.renderItem(vars, dbItem));
        });

        el.append(tmpl.join(''));
    };

    window.DB = DB;

})(jQuery, window, undefined);
