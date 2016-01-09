(function($, window, undefined) { //eslint-disable-line
    'use strict';

    const columnWidth = 362;
    const gutterWidth = 15;

    class Portfolio {
        constructor() {
            this.body = $('body');
            this.portfolio = $('.port__list').addClass('port__list_visible');

            this.bindEvents();
            this.setPortfolioSize();
            this.setMasonry();
        }

        bindEvents() {
            $(window).on('resize', this.setPortfolioSize.bind(this));            
        }

        setMasonry() {
            this.portfolio.masonry({
                itemSelector: '.port__item',
                isAnimated: true,
                columnWidth: columnWidth,
                gutterWidth: gutterWidth
            });
        }

        setPortfolioSize() {
            let containerWidth = this.body.width();
            let cols = Math.floor((containerWidth + gutterWidth) / (columnWidth + gutterWidth));
            cols = Math.max(cols, 1);
            let clearedColsWidth = cols * (columnWidth + gutterWidth);
            let colsWidth = clearedColsWidth + gutterWidth * (cols - 2);

            this.portfolio.css({
                width: colsWidth + 'px',
                left: '50%',
                'marginLeft': -(clearedColsWidth / 2) + 'px'
            });
        }
    }

    new Portfolio();

})(jQuery, window, undefined); // eslint-disable-line
