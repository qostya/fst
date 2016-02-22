(function ($) {
    'use strict';

    $('.js-show-win').click(
        function () {
            $('.b-modal_gift_success')
                .addClass('_active');

            // Здесь мог бы быть ajax-запрос для отправки подарка:

            //$.post('/api/send-gift/', {id: 42}).then(
            //    function (response) {
            //        if (response.is_coincidence) {
            //            $('.b-modal_gift_success')
            //                .addClass('_active');
            //        }
            //
            //        alert('Поздравляю, успешный запрос!');
            //    }
            //);

            return false;
        }
    );

    $('.js-hide-win').click(
        function () {
            // чтобы не было скачков
            setTimeout(
                function () {
                    $('.b-modal_gift_success')
                        .removeClass('_active');
                }, 120
            );

            return false;
        }
    );

}(jQuery));