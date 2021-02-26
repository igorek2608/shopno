$('.mobile-menu-inner').click(function() {
    $('.mobile-sidebar').toggleClass('mobile-sidebar__active');
    $('.sidebar__close').click(function() {
        $('.mobile-sidebar').toggleClass('mobile-sidebar__hidden');
    });
});
