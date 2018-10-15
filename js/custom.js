// contact-form focus
$(function () {
    $('.contact-form__inner, .contact-form__message').focusin(function () {
        $(this).prev('label').toggleClass('active');
    });
    $('.contact-form__inner, .contact-form__message').blur(function () {
        $(this).prev('label').toggleClass('active');
    });
});

//menu
function accordionMenu() {
    var menu = document.getElementById('toggled');
    var menuStyle = window.getComputedStyle(menu);
    var display = menuStyle.getPropertyValue('display');

    if (display === 'none') {
        menu.style.display = "block";
        $('#menu-toggle').addClass('menu-opened');
    } else {
        menu.style.display = "none";
        $('#menu-toggle').removeClass('menu-opened');
    };
};

// add event listener to menu button
var toggle = document.getElementById('menu-toggle');
toggle.addEventListener('click', accordionMenu, false);
