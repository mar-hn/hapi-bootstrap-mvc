$(function()
{

});

function submitform()
{
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    $.post('/auth',{email: email, password:password},
    function(data)
    {
        if(data.success === true)
        {
            window.location = '/';
            return;
        }
                 
        alert(data.message);
    },'JSON').fail(function()
    {
        alert('An error occurred on server, please try again later.')
    });
}