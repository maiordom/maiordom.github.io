const fs = require('fs');
const hbs = require('handlebars');

function generateIndexView() {
    const DB = require('./db').DB;

    const indexTmpl = hbs.compile(fs.readFileSync(__dirname + '/../view/index.hbs', 'utf8'));
    const listTmpl = hbs.compile(fs.readFileSync(__dirname + '/../view/list.hbs', 'utf8'));

    hbs.registerPartial('cube', fs.readFileSync(__dirname + '/../view/cube.hbs', 'utf8'));
    hbs.registerPartial('metrika', fs.readFileSync(__dirname + '/../view/metrika.hbs', 'utf8'))
    hbs.registerPartial('maiordom', fs.readFileSync(__dirname + '/../view/maiordom.hbs', 'utf8'));
    hbs.registerPartial('list', listTmpl({items: DB}));

    fs.writeFileSync(__dirname + '/../index.html', indexTmpl(), 'utf8');
}

exports.generateIndexView = generateIndexView;
