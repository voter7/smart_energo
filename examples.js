// slider start
// У слайдера должен быть id="slider", атрибут - data-autochange-interval-sec. 
// Для плавности у слайдов должен быть position: absolute, opacity: 0. У active-слайда opacity: 1.

// SLIDER
if ($('#slider').length) {
    var sliderAutoSeconds = $('#slider').attr('data-autochange-interval-sec');
    var $items = $('#slider>.slide');
    var sliderTid;
    $('#slider').data('indexCurr', 0);

    function sliderSlide(indexNext) {
        var $items = $('#slider>.slide');                       
        var indexCurr = $('#slider').data('indexCurr');        
        if (typeof(indexNext) == 'undefined') {                 
            indexNext = (indexCurr < ($items.length - 1)) ? (indexCurr - 0 + 1) : 0; 
        }else if(indexNext == -1) {
            indexNext = (indexCurr > 0) ? (indexCurr - 1) : ($items.length - 1);
        }

        $items.eq(indexCurr).removeClass('active');
        $items.eq(indexNext).addClass('active');

        $('#slider').data('indexCurr', indexNext);
        
    }

    function sliderAutoSet() {
        sliderTid = setInterval(function() {
            sliderSlide();
        }, sliderAutoSeconds * 1000);
        
    }

    function sliderAutoHold() {
        clearInterval(sliderTid);
        sliderAutoSet();
        
    }
    // $('#slider').swipe({
    // 	swipeLeft: function() {
    // 		sliderAutoHold();
    // 		sliderSlide();
    // 	},
    // 	swipeRight: function() {
    // 		sliderAutoHold();
    // 		sliderSlide(-1);
    // 	},
    // 	threshold: 35
    // });

    $('#slider .prev').click(function() {
        sliderAutoHold();
        sliderSlide(-1);
    });
    $('#slider .next').click(function() {
        sliderAutoHold();
        sliderSlide();
    });

    $items.on({
        mouseenter: function() {
            clearInterval(sliderTid);
        },
        mouseleave: function() {
            sliderAutoHold();
        }
    });

    sliderAutoSet();
}
// slider end

// burger start
// burger end

// modal start
// modal end

// slick start
// slick end