document.addEventListener('scroll', function() {
    var heroSection = document.querySelector('.hero-content');
    var ctaButton = document.querySelector('.cta-button');
    var heroPosition = heroSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; // Trigger before the section comes fully into view

    if (heroPosition < screenPosition) {
        ctaButton.classList.add('animated'); // Add the animated class when in view
    }
});



document.addEventListener('scroll', function() {
    var tempItems = document.querySelectorAll('.temp-item');
    var screenPosition = window.innerHeight / 1.2; // Control when the animation starts (before fully in view)

    tempItems.forEach(function(item, index) {
        var tempPosition = item.getBoundingClientRect().top;

        if (tempPosition < screenPosition) {
            // Add animation class when scrolling down
            setTimeout(function() {
                item.classList.add('animated');
            }, index * 250); // Delay animation for each item
        } else {
            // Remove animation class when scrolling up
            setTimeout(function() {
                item.classList.remove('animated');
            }, index * 100); // Reverse order when scrolling up
        }
    });
});
