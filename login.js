$(document).ready(function()
{

    $('._login').click(function()
     {
        var sEmail = $('._email').val();
        var sPassword = $('._password').val();
        if ($.trim(sEmail).length == 0)
         {
            $('._login').parents().find('._emailError').removeClass('hide');
            return false;
         }

        if (sEmail) 
        {
            var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (filter.test(sEmail)) 
            {
                $('._login').parents().find('._emailError').addClass('hide');
             }

         else
         {
           $('._login').parents().find('._emailError').removeClass('hide');
                return false;
          }

        }

        if ($.trim(sPassword).length == 0)
         {
            $('._login').parents().find('._passError').removeClass('hide');
            return false;
         }
        if (sPassword)
          {
              var filterpass = /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
            if (filterpass.test(sPassword))
             {
                $('._login').parents().find('._passError').addClass('hide');
             }
            else {
                   $('._login').parents().find('._passError').removeClass('hide');
                    return false;
                  }
           }      
    });
});


