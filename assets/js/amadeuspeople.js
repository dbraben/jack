$(document).ready(function () {
    // Popular Links show more functionality
    size_li = $("#popularLinks li").length;
    x=4;
    $('#popularLinks li:lt('+x+')').removeClass('popularlinkhide').addClass('popularlinkvisible');
    $('#loadMore').click(function () {
        x=size_li;
        $('#popularLinks li:lt('+x+')').removeClass('popularlinkhide').addClass('popularlinkvisible');
        $('#showLess').show();
        if(x == size_li){
            $('#loadMore').hide();
        }
    });
    $('#showLess').click(function () {
        x=4;
        $('#popularLinks li').not(':lt('+x+')').removeClass('popularlinkvisible').addClass('popularlinkhide');
        $('#loadMore').show();
        $('#showLess').hide();
        if(x == 4){
            $('#showLess').hide();
        }
    });


    // Media show more functionality
    size_article = $("#mediaArticles article").length;
    y=4;
    $('#mediaArticles article:lt('+y+')').removeClass('mediahide').addClass('mediavisible');
    $('#loadMoreMedia').click(function () {
        y=size_article;
        $('#mediaArticles article:lt('+y+')').removeClass('mediahide').addClass('mediavisible');
        $('#showLessMedia').show();
        if(y == size_article){
            $('#loadMoreMedia').hide();
        }
    });
    $('#showLessMedia').click(function () {
        y=4;
        $('#mediaArticles article').not(':lt('+y+')').removeClass('mediavisible').addClass('mediahide');
        $('#loadMoreMedia').show();
        $('#showLessMedia').hide();
        if(y == 3){
            $('#showLessMedia').hide();
        }
    });

    // Carousel dynamically load BootStrap indicators
    var bootCarousel = $(".carousel");
    bootCarousel.prepend("<ol class='carousel-indicators'></ol>");
    var indicators = $(".carousel-indicators");
    bootCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
        (index === 0) ?
        indicators.append("<li data-target='#carouselExampleIndicators' data-slide-to='" + index + "' class='active'></li>") :
        indicators.append("<li data-target='#carouselExampleIndicators' data-slide-to='" + index + "'></li>");
    });
});

   
