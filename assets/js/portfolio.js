(function($, window, undefined) {
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

        setTimeout(function() {
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
