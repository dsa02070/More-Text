$(function () {
    // 변수담기
    let showText = 100;
    let elem = $('.more_text');
    let moreBtnText = "show more";
    let lessBtnText = 'show less';

    // 반복문
    elem.each(function () {
        let content = $(this).html();
        let contentLeng = content.length;
        let lessText = content.substr(0, showText);
        let moreText = content.substr(showText, contentLeng);
        let changeHtml = '';

        if (showText < contentLeng) {
            changeHtml = lessText + "<span>...</span><span class='more_content'><span>" + moreText + "</span><a href='#' class='more_btn less'><span>Show More</span></a></span>";
            $(this).html(changeHtml);
        }
    });
    $(".more_btn").click(function () {
        if ($(this).hasClass('less')) {
            $(this).removeClass('less')
            $(this).html('<span>' + lessBtnText + '</span>');
        } else {
            $(this).addClass('less');
            $(this).html("<span>" + moreBtnText + "</span>")
        };
        $(this).prev().toggle();
        $(this).parent().prev().toggle();
    });
});