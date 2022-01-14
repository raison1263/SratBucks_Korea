$('.search_box .search_img').on('click', function(e)
{
    e.preventDefault();
    $('.search_box').toggleClass('on');
    // var my_class = $(this).hasClass('on')
    
    // if(my_class)
    // {
    //     var search = $("#search").val();

    //     if(search === "")
    //     {
    //         e.preventDefault();
    //         alert('검색어를 입력해주세요.');
    //     }
    //     else
    //     {

    //     }
    // }
    // else
    // {
    //     e.preventDefault();
    //     $('.search_box').addClass('on');
    //     $(this).addClass('on');
    // }
})

// 상단 로그인증 호버
$('#header .membership li a').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')
})

// // 메뉴 버튼 호버
$('#header .menu .depth1 > li').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')

    var deco_height =  $(this).children('.depth2').height();
    var deco_img_height =  $(this).children('.depth2').children('.depth2_footer').children('ul').height();

    deco_img_height +=45;
    $('#header').find('.decobox').css({ display:'block', height: deco_height })

    $('#header').find('.deco_footer').css({ display:'block', height: deco_img_height })

})

$('#header .menu .depth1 > li').on('mouseout', function()
{
    $('#header').find('.decobox').css({ display:'none', height: 0 })
})

$('#header .menu .depth1 .depth2 > li > ul > li > a').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')
})

$('#header .menu .depth1 .depth2 .depth2_footer > ul > li a').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')
})

$('#footer .footer1 .footer_menu > ul > li ul li > a').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')
})

$('#footer .footer3 .adress .adress_1 li').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')
})

$('#footer .footer3 .adress .adress_2 li').on('mouseover mouseout', function()
{
    $(this).toggleClass('on')
})

// 카피라이터 년도 표시
var now = new Date();
year = now.getFullYear();

$('#footer .footer3 .adress .adress_4 .year').text(year)
