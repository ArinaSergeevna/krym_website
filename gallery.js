$(document).ready(function () {

    $('.description').hide();

    function showFullHeight() {

        $('.gallery li').each(function() {

            $(this).find('.btn').click(function(e){
                e.preventDefault();
                $('.description').slideUp('normal');
                if($(this).next().is(':hidden') == true) {
                    $(this).addClass('on');
                    $(this).next().slideDown('normal');
                }

            });
        });
    }

    showFullHeight();

});