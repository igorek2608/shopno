$('.mobile-menu-inner').click(function(e) {
    e.preventDefault();
    $('.mobile-sidebar').toggleClass('mobile-sidebar__active');
    
});
$('.sidebar__close').click(function(e) {
    e.preventDefault();
    $('.mobile-sidebar').toggleClass('mobile-sidebar__hidden');
    
});
