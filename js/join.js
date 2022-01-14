
//  아이디
$('#id').on('blur', function()
{
    var id = $(this).val();
    var id_check = /^[a-zA-Z0-9]+$/;

    if(id === '')
    {
        $(this).css( { borderColor: 'red' } );
        $(this).siblings().css( { display: 'block', color: 'red' } );
        $(this).siblings().text('아이디를 입력 하세요.')
    }
    else
    {
        if ( !id_check.test(id) || id.length < 4 || id.length > 13) 
        {
            $(this).css( { borderColor: 'red' } );
            $(this).siblings().css( { display: 'block', color: 'red' } );
            $(this).siblings().text('영문(대소문자 구분 없음), 숫자로 4~13자리만 입력 가능합니다.')
        }
        else
        {
            $(this).css( { borderColor: '#ccc' } );
            $(this).siblings().css( { display: 'block', color: '#000' } );
            $(this).siblings().text('사용 가능한 아이디 입니다.')
        }
    }
})

// 비밀번호
$('#pw').on('blur', function()
{
    var pw = $(this).val();
    var pw_check = /^(?=[a-zA-Z])(?=.*[a-zA-Z0-9])(?=.*[0-9]).*$/

    if(  !pw_check.test(pw) || pw.length < 10 || pw.length > 20)
    {
        $(this).css( { borderColor: 'red' } );
        $(this).siblings().css( { display: 'block', color: 'red' } );
        $(this).siblings().text('영문, 숫자,특수문자 혼합하여 10~20자리 이내로 입력하세요.')
    }
    else
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).siblings().css( { display: 'block', color: '#000' } );
        $(this).siblings().text('사용가능합니다.')
    }

    var pw_ok = $('#pw_ok').val();

    if (pw_ok !== "")
    {
        if(  pw === pw_ok)
        {
            $('#pw_ok').css( { borderColor: '#ccc' } );
            $('#pw_ok').siblings().css( { display: 'block', color: '#000' } );
            $('#pw_ok').siblings().text('일치합니다.')
        }
        else
        {
            $('#pw_ok').css( { borderColor: 'red' } );
            $('#pw_ok').siblings().css( { display: 'block', color: 'red' } );
            $('#pw_ok').siblings().text('일치하지 않습니다.')
        }
    }

})

//  비밀번호 확인
$('#pw_ok').on('blur', function()
{
    var pw = $('#pw').val();
    var pw_ok = $(this).val();
   
    if(  pw === pw_ok)
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).siblings().css( { display: 'block', color: '#000' } );
        $(this).siblings().text('일치합니다.')
    }
    else
    {
        $(this).css( { borderColor: 'red' } );
        $(this).siblings().css( { display: 'block', color: 'red' } );
        $(this).siblings().text('일치하지 않습니다.')
    }
})

// 이름
$('#name').on('blur', function()
{
    var name = $('#name').val();
    var name_check = /^[가-힣]+$/
   
    if(  !name_check.test(name) )
    {
        $(this).css( { borderColor: 'red' } );
        $(this).next().css( { display: 'block', color: 'red' } );
        $(this).next().text('이름은 한글만 입력 가능합니다.')
    }
    else
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).next().css( { display: 'block', color: '#000' } );
        $(this).next().text('사용가능합니다.')
    }
})

// 생일
var now = new Date();
year = now.getFullYear();
var year_list = '';
for (let i = year; i >= 1900; i--) 
{
    year_list += `<option value="${i}">${i}</option>`;
}
$('#year').html(year_list);

var month = '';
for (let i = 1; i <= 12; i++) 
{
    month += `<option value="${i}">${i}</option>`;
}
$('#month').html(month);

var day = '';
for (let i = 1; i <= 31; i++) 
{
    day += `<option value="${i}">${i}</option>`;
}
$('#day').html(day);

// 전화번호
$('#hp1').on('blur', function()
{
    var hp1 = $('#hp1').val();
    var hp1_check = /^\d{3,4}$/

    if ( !hp1_check.test(hp1)) 
    {
        $(this).css( { borderColor: 'red' } );
        $(this).siblings('div').children().css( { display: 'block', color: 'red' } );
        $(this).siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')
    }
    else
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).siblings('div').children().css( { display: 'block', color: '#000' } );
        $(this).siblings('div').children().text('사용가능합니다.')
    }

    var hp2 = $('#hp2').val();
    var hp2_check = /^\d{4}$/

    if (hp2 !== "")
    {
        if ( !hp2_check.test(hp2)) 
        {
            $('#hp2').css( { borderColor: 'red' } );
            $('#hp2').siblings('div').children().css( { display: 'block', color: 'red' } );
            $(this).siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')
        }
    }
    else
    {
        if($('#hp2').css( { borderColor: 'red' }))
        {
            $('#hp1').siblings('div').children().css( { display: 'block', color: 'red' } );
            $(this).siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')
        }
    }
})

$('#hp2').on('blur', function()
{
    var hp2 = $('#hp2').val();
    var hp2_check = /^\d{4}$/

    if ( !hp2_check.test(hp2)) 
    {
        $(this).css( { borderColor: 'red' } );
        $(this).siblings('div').children().css( { display: 'block', color: 'red' } );
        $(this).siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')
    }
    else
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).siblings('div').children().css( { display: 'block', color: '#000' } );
        $(this).siblings('div').children().text('사용가능합니다.')
    }
    
    var hp1 = $('#hp1').val();
    var hp1_check = /^\d{3,4}$/

    if (hp1 !== "")
    {
        if ( !hp1_check.test(hp1)) 
        {
            $('#hp1').css( { borderColor: 'red' } );
            $('#hp1').siblings('div').children().css( { display: 'block', color: 'red' } );
            $(this).siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')
        }
    }
    else
    {
        if($('#hp1').css( { borderColor: 'red' }))
        {
            $('#hp1').siblings('div').children().css( { display: 'block', color: 'red' } );
            $(this).siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')
        }
    }
})

// 이메일
$('#domain_list').on('change', function () 
{
    var domain_list = $(this).find('option:selected').val();

    if (domain_list !== 'no_select' && domain_list !== 'self') 
    {
        $('#email_domain').val(domain_list).attr({disabled: true});

        $('#email_domain').css( { borderColor: '#ccc' } );
        $('#email_domain').siblings('p').css( { display: 'block', color: '#000' } );
        $('#email_domain').siblings('p').text('사용가능합니다.')
    } 
    else if (domain_list === 'self') 
    {
        $('#email_domain').attr( {disabled: false }).val('');

        if ( $('#email_domain').val() === "")
        {
            $('#email_domain').css( { borderColor: 'red' } );
            $('#email_domain').siblings('p').css( { display: 'block', color: 'red' } );
            $('#email_domain').siblings('p').text('이메일을 입력해주세요.')
        }
    } 
    else 
    {
        $('#email_domain').attr({disabled: true}).val('');

        $('#email_domain').css( { borderColor: '#ccc' } );
        $('#email_domain').siblings('p').css( { display: 'block', color: '#000' } );
        $('#email_domain').siblings('p').text('이메일을 선택해주세요.')
    }
});

$('#email_domain').on('blur', function()
{
    var email = $('#email_domain').val();
    var email_check = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/

    if (!email_check.test(email)) 
    {
        $(this).css( { borderColor: 'red' } );
        $(this).siblings('p').css( { display: 'block', color: 'red' } );
        $(this).siblings('p').text('이메일 형식에 맞지 않습니다.')
    }
    else
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).siblings('p').css( { display: 'block', color: '#000' } );
        $(this).siblings('p').text('사용가능합니다.')
    }
})

// 닉네임 선택시
$('#terms_ok').on('change', function () 
{
    var value = $(this).prop('checked');

    if(value)
    {
        $('#nickname').attr({disabled: false}).val('');
        $('#nickname').focus();
    }
    else
    {
        $('#nickname').attr({ disabled: true}).val('');
        $('#nickname').css( { borderColor: '#ccc' } );
        $('#nickname').next().css( { display: 'none', color: '#000' } );
    }
})

$('#nickname').on('blur', function () 
{
    var nickname = $('#nickname').val();
    var nickname_check =/^[가-힣]{1,6}$/

    if (!nickname_check.test(nickname)) 
    {
        $(this).css( { borderColor: 'red' } );
        $(this).next().css( { display: 'block', color: 'red' } );
        $(this).next().text('한글 1~6글자 이내로 입력해주세요.')
    }
    else
    {
        $(this).css( { borderColor: '#ccc' } );
        $(this).next().css( { display: 'block', color: '#000' } );
        $(this).next().text('사용가능합니다.')
    }
})




// submit이벤트 발생시 유효성 검사
$('form').on('submit', function () 
{
    // 아이디
    var id = $('#id').val();
    var id_check = /[a-zA-Z0-9]+/;

    if(id === '')
    {
        $('#id').css( { borderColor: 'red' } );
        $('#id').siblings().css( { display: 'block', color: 'red' } );
        alert('아이디를 입력 하세요.')
        $('#id').focus();

        return false;
    }
    else
    {
        if ( !id_check.test(id) || id.length < 4 || id.length > 13) 
        {
            alert('아이디 입력이 잘못 되었습니다.')
            $('#id').focus();
            
            return false;
        }
    }

    // 비밀번호
    var pw = $('#pw').val();
    var pw_check = /^(?=[a-zA-Z])(?=.*[a-zA-Z0-9])(?=.*[0-9]).*$/

    if(  !pw_check.test(pw) || pw.length < 10 || pw.length > 20)
    {
        $('#pw').css( { borderColor: 'red' } );
        $('#pw').siblings().css( { display: 'block', color: 'red' } );
        $('#pw').siblings().text('영문, 숫자,특수문자 혼합하여 10~20자리 이내로 입력하세요.')

        alert('비밀번호 입력이 잘못 되었습니다.')
        $('#pw').focus();

        return false;
    }

    // 비밀번호 확인
    var pw_ok = $('#pw_ok').val();
   
    if(pw_ok === "")
    {
        alert('비밀번호 확인을 입력해 주세요.')
        $('#pw').focus();

        return false;
    }
    else  if(pw != pw_ok)
    {
        $('#pw_ok').css( { borderColor: 'red' } );
        $('#pw_ok').siblings().css( { display: 'block', color: 'red' } );
        $('#pw_ok').siblings().text('일치하지 않습니다.')

        alert('비밀번호가 일치하지 않습니다.')
        $('#pw_ok').focus();

        return false;
    }

    //  이름
    var name = $('#name').val();
    var name_check = /^[가-힣]+$/
   
    if(  !name_check.test(name) )
    {
        $('#name').css( { borderColor: 'red' } );
        $('#name').next().css( { display: 'block', color: 'red' } );
        $('#name').next().text('이름은 한글만 입력 가능합니다.')

        alert('이름 입력이 잘못 되었습니다.')
        $('#name').focus();

        return false;
    }

    //  전화번호
    var hp1 = $('#hp1').val();
    var hp1_check = /^\d{3,4}$/

    if ( !hp1_check.test(hp1)) 
    {
        $('#hp1').css( { borderColor: 'red' } );
        $('#hp1').siblings('div').children().css( { display: 'block', color: 'red' } );
        $('#hp1').siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')

        alert('전화 번호 입력이 잘못 되었습니다.')
        $('#hp1').focus();

        return false;
    }

    var hp2 = $('#hp2').val();
    var hp2_check = /^\d{4}$/

    if ( !hp2_check.test(hp2)) 
    {
        $('#hp2').css( { borderColor: 'red' } );
        $('#hp2').siblings('div').children().css( { display: 'block', color: 'red' } );
        $('#hp2').siblings('div').children().text('숫자로 만 가운데 3~4 글자, 마지막 4 글자로 가능합니다.')

        alert('전화 번호 입력이 잘못 되었습니다.')
        $('#hp2').focus();

        return false;
    }

    //  이메일
    var email = $('#email').val();
    var email_domain = $('#email_domain').val();
    var domain_list = $('#domain_list').find('option:selected').val();
    var email_domain_check = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/

    if(email == "")
    {
        alert('이메일을 입력해주세요.')
        $('#email').focus();

        return false;
    }

    if (domain_list === 'no_select') 
    {
        alert('이메일 도메인을 입력해 주세요.')
        $('#domain_list').focus();

        return false;
    }

    if(domain_list === 'self')
    {
        if ( !email_domain_check.test(email_domain)) 
        {
            alert('이메일 도메인 입력이 잘못 되었습니다.')
            $('#email_domain').focus();
    
            return false;
        } 
    }
   
    var value = $('#terms_ok').prop('checked');
    if(value)
    {
        var nickname = $('#nickname').val();
        var nickname_check =/^[가-힣]{1,6}$/

        if (!nickname_check.test(nickname))
        {
            $('#nickname').css( { borderColor: 'red' } );
            $('#nickname').next().css( { display: 'block', color: 'red' } );
            $('#nickname').next().text('한글 1~6글자 이내로 입력해주세요.')

            alert('닉네임 입력이 잘못 되었습니다.')
            $('#nickname').focus();
    
            return false;
        }
    }

    return false;
});

$('form').on('reset', function () 
{
    $('#content p').css( { display: 'none' } );
})