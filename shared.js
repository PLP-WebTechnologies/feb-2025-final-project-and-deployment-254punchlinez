// Social media links functionality
function initializeSocialLinks() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    const socialUrls = {
        facebook: 'https://www.facebook.com/mindfullblog',
        twitter: 'https://twitter.com/mindfullblog',
        instagram: 'https://www.instagram.com/mindfullblog',
        linkedin: 'https://www.linkedin.com/company/mindfullblog'
    };
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            let url = '';
            
            // Determine which social media icon was clicked
            if (icon.querySelector('.fa-facebook')) {
                url = socialUrls.facebook;
            } else if (icon.querySelector('.fa-twitter')) {
                url = socialUrls.twitter;
            } else if (icon.querySelector('.fa-instagram')) {
                url = socialUrls.instagram;
            } else if (icon.querySelector('.fa-linkedin')) {
                url = socialUrls.linkedin;
            }
            
            // Open the social media site in a new tab
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSocialLinks();
});