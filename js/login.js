// 로그인 버튼 호버
$('#content .login .login_box_outer .login_box_inner .login_button button').on('mouseover mouseout', function () 
{
    $(this).toggleClass('on')
})

//  아이디 저장 체크박스 호버시
$('#content .login .login_box_outer .login_box_inner .id_save_box input').on('mouseover mouseout', function () 
{
    $(this).toggleClass('on')
})
$('#content .login .login_box_outer .login_box_inner .id_save_box label').on('mouseover mouseout', function () 
{
    $(this).toggleClass('on')
})

//  회원가입, 아이디 찾기, 비밀번호 찾기 호버시
$('#content .login .login_box_outer .login_box_inner .last ul li').on('mouseover mouseout', function () 
{
    $(this).toggleClass('on')
})

// 아이디 체크
$('form').on('submit', function () 
{
    var id = $('#id').val();
    var pw = $('#pw').val();

    if (id !== "") 
    {
        if (pw === "") 
        {
            alert("비밀번호를 입력해 주세요.")
            $('#pw').focus();
            return false;
        }
    }
    else
    {
        alert("아이디를 입력해 주세요.")
        $('#id').focus();
        return false;
    }

})