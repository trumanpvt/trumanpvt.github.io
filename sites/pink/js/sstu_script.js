jQuery(function($) {
    $(".header-top__swap-menu").click(function() {
        $(".header-top__nav__opened").toggle();
        $(".header-top__swap-menu").toggle();
        document.getElementById("header-top__menu").style.backgroundColor = "#283645";
        return false;
    });
    $(".header-top__swap-menu-opened").click(function() {
        $(".header-top__nav__opened").toggle();
        $(".header-top__swap-menu").toggle();
        document.getElementById("header-top__menu").style.backgroundColor = "rgba(29, 38, 49, 0.7)";
        document.getElementById("header-top__menu").style.borderBottom = "none";
        return false;
    });
})