document.addEventListener("DOMContentLoaded", function() {
    var volunteerButton = document.getElementById("volunteerButton");
    var volunteerForm = document.getElementById("volunteerForm");

    volunteerButton.addEventListener("click", function(event) {
        event.preventDefault();
        volunteerForm.style.display = "block";
    });

    function shareOnSocialMedia(platform) {
        var currentURL = window.location.href;
        var shareText = "Check out Pheasants Forever - Charity Profile!";
        var shareURL;
        switch (platform) {
            case 'facebook':
                shareURL = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(currentURL);
                break;
            case 'twitter':
                shareURL = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentURL) + '&text=' + encodeURIComponent(shareText);
                break;
            default:
                console.error('Unsupported social media platform');
                return;
        }
        window.open(shareURL, '_blank');
    }
});
