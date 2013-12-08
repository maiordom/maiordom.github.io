(function( $, root ) {

    var columnWidth = 360,
        gutterWidth = 15, portfolio, body;

    $( document ).ready( init );

    function init() {
        body = $( 'body' );
        console.time( 'render list' );
        DB.render( $( '.port-list' ) );
        console.timeEnd( 'render list' );

        setTimeout( function() {
            initGrid();
        }, 100 );
    }

    function setPortfolioSize() {
        var containerWidth, cols, colsWidth, clearedColsWidth;

        containerWidth = body.width();
        cols = Math.floor( ( containerWidth + gutterWidth ) / ( columnWidth + gutterWidth ) );
        cols = Math.max( cols, 1 );
        clearedColsWidth = cols * ( columnWidth + gutterWidth );
        colsWidth = clearedColsWidth + gutterWidth * ( cols - 2 );

        portfolio.css({
            width: colsWidth + 'px',
            left: '50%',
            'marginLeft': - ( clearedColsWidth / 2 ) + 'px'
        });
    }

    function initGrid() {
        $( root ).on( 'resize', setPortfolioSize );

        portfolio = $( '.port-list' );

        portfolio.masonry({
            itemSelector: '.port-item',
            isAnimated: true,
            columnWidth: columnWidth,
            gutterWidth: gutterWidth
        });

        setPortfolioSize();
    }

})( jQuery, window );