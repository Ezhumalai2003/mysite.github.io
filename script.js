document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#005f99';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = '#007acc';
        });
    });
});
