/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    // Define the offset (e.g., the height of your fixed navbar)
    var offset = 50; // Change this value to whatever offset you need

    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        var targetOffset = $($anchor.attr('href')).offset().top - offset;
        
        $('html, body').stop().animate({
            scrollTop: targetOffset
        }, 1500, 'easeInOutExpo');

        event.preventDefault(); // Prevent default anchor click behavior
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$(function() {
    // Initialize Scrollspy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60 // Adjust based on the height of your navbar
    });

    // Custom scroll handling
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // Check if we've reached the bottom of the page
        if ($(window).scrollTop() + windowHeight >= documentHeight - 10) { // Adjust -10 if necessary
            // Temporarily deactivate scrollspy to prevent conflicts
            $('body').data('bs.scrollspy', null);

            $('.navbar-nav li').removeClass('active'); // Remove active class from all navbar items
            $('.navbar-nav li a[href="#footer"]').parent().addClass('active'); // Add active class to #footer link
        } else {
            // Reactivate scrollspy
            $('body').scrollspy('refresh');
        }
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
