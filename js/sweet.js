// When clicking the element ID "modal"
$("#contact").click(function () {

    // Run sweet modal
    $.sweetModal({
        title: 'E-mail',
        content: '<b>rada.j@upcmail.cz </b>',
        theme: $.sweetModal.THEME_DARK
    });

});  