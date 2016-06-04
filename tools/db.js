'use strict';

let Type;

let GitHub = {
    src: 'assets/img/github_icon.png',
    width: 30,
    height: 30
};

let Single = {
    className: 'port_pet',
    width: 320,
    height: 320
};

let Double = {
    className: 'port_pet port_col2',
    width: 695,
    height: 320
};

let DB = [
    {
        name: 'sindel',
        type: 'single',
        title: 'Sindel',
        gitHub: {
            link: 'https://github.com/maiordom/sindel'
        },
        demo: {
            link: 'http://sati.16mb.com/sindel/',
            src: 'assets/img/git.sindel.png'
        }
    },
    {
        name: 'yahiko',
        type: 'double',
        title: 'Yahiko - Content Slider',
        gitHub: {
            link: 'https://github.com/maiordom/yahiko'
        },
        demo: {
            link: 'http://sati.16mb.com/yahiko/',
            src: 'assets/img/git.yahiko.png'
        }
    },
    {
        name: 'islider',
        type: 'single',
        title: 'iSlider',
        gitHub: {
            link: 'https://github.com/maiordom/islider'
        },
        demo: {
            link: 'http://sati.16mb.com/islider/',
            src: 'assets/img/git.islider.png'
        }
    },
    {
        name: 'chess',
        type: 'double',
        title: 'Chess Engine',
        gitHub: {
            link: 'https://github.com/maiordom/chess'
        },
        demo: {
            link: 'http://sati.16mb.com/chess/',
            src: 'assets/img/git.chess.jpg'
        }
    },
    {
        type: 'single',
        title: 'Dark Menu',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/task17'
        },
        demo: {
            link: 'http://codepen.io/maiordom/pen/LwIkD',
            src: 'assets/img/git.dark-menu.png'
        }
    },
    {
        type: 'double',
        title: 'Am',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/am'
        },
        demo: {
            link: 'http://sati.16mb.com/am/',
            src: 'assets/img/git.am.png'
        }
    },
    {
        type: 'single',
        title: 'Counter',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/counter'
        },
        demo: {
            link: 'http://sati.16mb.com/counter/',
            src: 'assets/img/counter.jpg'
        }
    },
    {
        type: 'double',
        title: 'Buttons Menu',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/dark-hor-menu'
        },
        demo: {
            link: 'http://codepen.io/maiordom/pen/jEghi',
            src: 'assets/img/dark-hor-menu.jpg'
        }
    },
    {
        name: 'table-sorter',
        type: 'single',
        title: 'Table Sorter',
        gitHub: {
            link: 'https://github.com/maiordom/table-sorter'
        },
        demo: {
            link: 'http://sati.16mb.com/table-sorter/',
            src: 'assets/img/git.table-sorter.png'
        }
    },
    {
        type: 'double',
        title: 'Clock',
        gitHub: {
            link: 'https://github.com/maiordom/css-live/tree/master/clock'
        },
        demo: {
            link: 'http://codepen.io/maiordom/full/Cqipw',
            src: 'assets/img/clock.jpg'
        }
    },
    {
        name: 'cube3d',
        type: 'single',
        title: 'Cube3d',
        gitHub: {
            link: 'https://github.com/maiordom/cube3d'
        },
        demo: {
            link: 'http://sati.16mb.com/cube3d/cube.html',
            src: 'assets/img/cube3d.png'
        }
    },
    {
        name: 'milena',
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
    },
    {
        name: 'konan',
        type: 'single',
        title: 'Konan',
        gitHub: {
            link: 'https://github.com/maiordom/konan'
        },
        demo: {
            link: 'http://sati.16mb.com/konan/',
            src: 'assets/img/konan.png'
        }
    },
    {
        name: 'zero',
        type: 'double',
        title: 'Zero',
        gitHub: {
            link: 'https://github.com/maiordom/zero'
        },
        demo: {
            link: 'http://sati.16mb.com/zero/',
            src: 'assets/img/git.zero.jpg'
        }
    },
    {
        name: 'gmaps-polygon',
        type: 'single',
        title: 'Polygon',
        gitHub: {
            link: 'https://github.com/maiordom/gmaps-polygon'
        },
        demo: {
            link: 'http://sati.16mb.com/polygon/',
            src: 'assets/img/git.gmaps-polygon.png'
        }
    },
    {
        name: 'd3try',
        type: 'double',
        title: 'd3Try',
        gitHub: {
            link: 'https://github.com/maiordom/d3try'
        },
        demo: {
            link: 'http://sati.16mb.com/d3try/step4/',
            src: 'assets/img/git.d3try.jpg'
        }
    },
    {
        name: 'kitana',
        type: 'single',
        title: 'Kitana',
        gitHub: {
            link: 'https://github.com/maiordom/kitana'
        },
        demo: {
            link: 'https://github.com/maiordom/kitana',
            src: 'assets/img/git.kitana.png'
        }
    },
    {
        name: 'jade',
        type: 'double',
        title: 'Jade',
        gitHub: {
            link: 'https://github.com/maiordom/jade'
        },
        demo: {
            link: 'http://sati.16mb.com/jade/',
            src: 'assets/img/git.jade.jpg'
        }
    }
];

DB.forEach(function(item) {
    Type = item.type === 'single' ? Single : Double;
    item.className = item.className ? ' ' + Type.className : Type.className;

    item.demo.width = item.demo.width ? item.demo.width : Type.width;
    item.demo.height = item.demo.height ? item.demo.height : Type.height;

    item.gitHub.src = GitHub.src;
    item.gitHub.width = GitHub.width;
    item.gitHub.height = GitHub.height;
});

exports.DB = DB;