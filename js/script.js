// html 이 준비가 되면 실행한다.
$(document).ready(function() {
      // 모달창 기능 
    let modal = $('.modal');    
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    modal.fadeIn();
    modal_close.click(function(){
        modal.fadeOut();
    });
    modal.click(function(){
        modal.fadeOut();
    });
    modal_cont.click(function(event) {
        event.stopPropagation();
    });
    // 탭메뉴
    let all_product =$('.all-product');
    let more_gnb = $('.more-gnb');

    $.each(all_product, function(index, item) {
        $(this).mouseenter(function(){
            $(this).find('.more-gnb').show();
        });
    });
    // visual slide
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".sw-visual-next",
            prevEl: ".sw-visual-prev",
        },
        effect: "fade",
    });
});