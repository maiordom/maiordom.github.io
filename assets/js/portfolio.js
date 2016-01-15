(function($, window, undefined) { //eslint-disable-line
    'use strict';

    const columnWidth = 362;
    const gutterWidth = 15;

    class Portfolio {
        constructor() {
            this.body = $('body');
            this.portfolio = $('.port__list');
            this.items = $('.port__list').find('.port__item').get();
            this.sortedItems = $('.port__list').find('.port__item').get().sort(function(a, b) {
                return !$(a).hasClass('port_col2');
            }).reverse();

            this.bindEvents();
            this.setPortfolioSize();
            this.sortItems();
            this.setMasonry();
            this.portfolio.addClass('port__list_visible');
        }

        bindEvents() {
            $(window).on('resize', this.onResize.bind(this));
        }

        setMasonry() {
            this.portfolio.masonry({
                itemSelector: '.port__item',
                isAnimated: true,
                columnWidth: columnWidth,
                gutterWidth: gutterWidth
            });

            this.masonry = this.portfolio.data('masonry');
        }

        sortItems() {
            let containerWidth = this.body.width();

            if (containerWidth <= 1150 && !this.portfolio.hasClass('port_sorted')) {
                this.portfolio.html(this.sortedItems);
                this.masonry && this.masonry.reloadItems();
                this.portfolio.addClass('port_sorted');
            } else if (containerWidth > 1150 && this.portfolio.hasClass('port_sorted')) {
                this.portfolio.html(this.items);
                this.masonry && this.masonry.reloadItems();
                this.portfolio.removeClass('port_sorted');
            }
        }

        onResize() {
            this.setPortfolioSize();
            this.sortItems();
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
