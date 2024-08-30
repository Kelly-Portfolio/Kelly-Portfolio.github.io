/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
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
        offset: 50 // Adjust based on your navbar height
    });

    // Add custom scroll event listener
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // Check if we've reached the bottom of the page
        if (scrollDistance + windowHeight >= documentHeight - 10) { // Adjust -10 if necessary
            $('.navbar-nav li').removeClass('active'); // Remove active class from all navbar items
            $('.navbar-nav li a[href="#footer"]').parent().addClass('active'); // Add active class to #footer link
        } else {
            // Ensure the correct link is active based on scroll position
            $('.navbar-nav li').removeClass('active');
            $('section').each(function() {
                var sectionOffset = $(this).offset().top;
                if (scrollDistance >= sectionOffset - 50) { // Adjust based on navbar height
                    var sectionId = $(this).attr('id');
                    $('.navbar-nav li a[href="#' + sectionId + '"]').parent().addClass('active');
                }
            });
        }
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
