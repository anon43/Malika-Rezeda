window.addEventListener('load', function() {
    var readMoreLinks = document.querySelectorAll('.read-more');
  
    readMoreLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var parentSection = this.parentNode;
        var fullText = parentSection.querySelector('p');
  
        fullText.classList.toggle('collapsed');
        if (fullText.classList.contains('collapsed')) {
          this.textContent = 'Читать далее';
        } else {
          this.textContent = 'Свернуть';
        }
      });
    });
  });