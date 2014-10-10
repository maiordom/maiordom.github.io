(function( $, window, undefined ) {
    'use strict';

    var DBItem;

    var Type;

    var GitHub = {
        src: 'images/github_icon.png',
        width: 30,
        height: 30
    };

    var Single = {
        className: 'port-pet',
        width: 320,
        height: 320
    };
    var Double = {
        className: 'port-pet port-col2',
        width: 695,
        height: 320
    };

    var DB = [
        {
            type: 'single',
            title: 'Sindel',
            gitHub: {
                link: 'https://github.com/maiordom/sindel'
            },
            demo: {
                link: 'http://sati.16mb.com/sindel/',
                src: 'images/git.sindel.jpg'
            }
        }, {
            type: 'double',
            title: 'Yahiko - Content Slider',
            gitHub: {
                link: 'https://github.com/maiordom/yahiko'
            },
            demo: {
                link: 'http://sati.16mb.com/yahiko/',
                src: 'images/git.yahiko.png'
            }
        }, {
            type: 'single',
            title: 'iSlider',
            gitHub: {
                link: 'https://github.com/maiordom/islider'
            },
            demo: {
                link: 'http://sati.16mb.com/islider/',
                src: 'images/git.islider.png'
            }
        }, {
            type: 'double',
            title: 'Chess Engine',
            gitHub: {
                link: 'https://github.com/maiordom/chess'
            },
            demo: {
                link: 'http://sati.16mb.com/chess/',
                src: 'images/git.chess.jpg'
            }
        }, {
            type: 'single',
            title: 'Dark Menu',
            gitHub: {
                link: 'https://github.com/maiordom/css-live/tree/master/task17'
            },
            demo: {
                link: 'http://codepen.io/maiordom/pen/LwIkD',
                src: 'images/dark-menu.jpg'
            }
        }, {
            type: 'double',
            title: 'Am',
            gitHub: {
                link: 'https://github.com/maiordom/css-live/tree/master/am'
            },
            demo: {
                link: 'http://sati.16mb.com/am/',
                src: 'images/git.am.png'
            }
        }, {
            type: 'single',
            title: 'Counter',
            gitHub: {
                link: 'https://github.com/maiordom/css-live/tree/master/counter'
            },
            demo: {
                link: 'http://sati.16mb.com/counter/',
                src: 'images/counter.jpg'
            }
        }, {
            type: 'double',
            title: 'Buttons Menu',
            gitHub: {
                link: 'https://github.com/maiordom/css-live/tree/master/dark-hor-menu'
            },
            demo: {
                link: 'http://codepen.io/maiordom/pen/jEghi',
                src: 'images/dark-hor-menu.jpg'
            }
        }, {
            type: 'single',
            title: 'Table Sorter',
            gitHub: {
                link: 'https://github.com/maiordom/tablse-sorter'
            },
            demo: {
                link: 'http://sati.16mb.com/table-sorter/',
                src: 'images/git.table-sorter.png'
            }
        }, {
            type: 'double',
            title: 'Clock',
            gitHub: {
                link: 'https://github.com/maiordom/css-live/tree/master/clock'
            },
            demo: {
                link: 'http://codepen.io/maiordom/full/Cqipw',
                src: 'images/clock.jpg'
            }
        }, {
            type: 'single',
            title: 'Cube3d',
            gitHub: {
                link: 'https://github.com/maiordom/cube3d'
            },
            demo: {
                link: 'http://sati.16mb.com/cube3d/cube.html',
                src: 'images/cube3d.png'
            }
        }, {
            type: 'double',
            title: 'Milena',
            gitHub: {
                link: 'https://github.com/maiordom/milena'
            },
            demo: {
                link: 'http://sati.16mb.com/milena/',
                src: 'images/git.milena.png',
                height: 320
            }
        }, {
            type: 'single',
            title: 'Sheeva',
            gitHub: {
                link: 'https://github.com/maiordom/sheeva'
            },
            demo: {
                link: 'http://sati.16mb.com/sheeva/',
                src: 'images/git.sheeva.png'
            }
        }, {
            type: 'double',
            title: 'Zero',
            gitHub: {
                link: 'https://github.com/maiordom/zero'
            },
            demo: {
                link: 'http://sati.16mb.com/zero/',
                src: 'images/git.zero.jpg'
            }
        }, {
            type: 'single',
            title: 'Polygon',
            gitHub: {
                link: 'https://github.com/maiordom/gmaps-polygon'
            },
            demo: {
                link: 'http://sati.16mb.com/polygon/',
                src: 'images/git.gmaps-polygon.png'
            }
        }, {
            type: 'double',
            title: 'd3Try',
            gitHub: {
                link: 'https://github.com/maiordom/d3try'
            },
            demo: {
                link: 'http://sati.16mb.com/d3try/step4/',
                src: 'images/git.d3try.jpg'
            }
        }, {
            type: 'single',
            title: 'Kitana',
            gitHub: {
                link: 'https://github.com/maiordom/kitana'
            },
            demo: {
                link: 'https://github.com/maiordom/kitana',
                src: 'images/git.kitana.png'
            }
        }, {
            type: 'double',
            title: 'Jade',
            gitHub: {
                link: 'https://github.com/maiordom/jade'
            },
            demo: {
                link: 'http://sati.16mb.com/jade/',
                src: 'images/git.jade.jpg'
            }
        }
    ];

    for ( var i = 0, ilen = DB.length; i < ilen; i++ ) {
        DBItem = DB[ i ];
        Type = DBItem.type   === 'single' ? Single : Double;
        DBItem.className     = DBItem.className ? ' ' + Type.className : Type.className;
        DBItem.demo.width    = DBItem.demo.width ? DBItem.demo.width : Type.width;
        DBItem.demo.height   = DBItem.demo.height ? DBItem.demo.height : Type.height;
        DBItem.gitHub.src    = GitHub.src;
        DBItem.gitHub.width  = GitHub.width;
        DBItem.gitHub.height = GitHub.height;
    }

    DB.tmpl = '' +
        '<div class="port-item ${className}">\
            <div class="port-top">\
                <h2 class="port-title">${title}</h2>\
                <a class="port-github" target="_blank" href="${gitHub.link}">\
                    <img src="${gitHub.src}" width="${gitHub.width}" height="${gitHub.height}" alt="">\
                </a>\
            </div>\
            <a class="port-link" href="${demo.link}" target="_blank">\
                <img class="port-img" src="${demo.src}" width="${demo.width}" height="${demo.height}" alt="">\
                <p class="port-to">Visit demo</p>\
            </a>\
        </div>\
    ';

    DB.read = function( obj, parent, propName, callback ) {
        parent = parent ? parent + '.' : '';
        for ( var i in obj ) {
            if ( typeof obj[ i ] === 'object' ) {
                DB.read( obj[ i ], parent + i, propName, callback );
            } else if ( propName === parent + i ) {
                callback( obj[ i ] );
            }
        }
    };

    DB.clear = function( propName ) {
        return propName.replace( /\$|\{|\}/gi, '' );
    };

    DB.renderItem = function( vars, data ) {
        var item = DB.tmpl;
        for ( var i = 0, ilen = vars.length; i < ilen; i++ ) {
            DB.read( data, '', DB.clear( vars[ i ] ), function( value ) {
                item = item.replace( vars[ i ], value );
            });
        }
        return item;
    };

    DB.render = function( el ) {
        var tmpl = [],
            vars = DB.tmpl.match( /\$\{[a-zA-Z\.]*\}/gi), item;

        for ( var i = 0, ilen = DB.length; i < ilen; i++ ) {
            item = DB.renderItem( vars, DB[ i ] );
            tmpl.push( item );
        }

        el.append( tmpl.join( '' ) );
    };

    window.DB = DB;

})( jQuery, window, undefined );