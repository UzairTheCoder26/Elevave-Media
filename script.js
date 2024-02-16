/*--------------------------------------------------------------
    # on Scroll
    --------------------------------------------------------------*/
    window.addEventListener('scroll', function() {
        var navElement = document.querySelector('nav');
        var logo = document.querySelector('.logo');
        var hdrCta = document.querySelector('.hdr-ctaa');
    
        var distanceY = window.scrollY;
        
        // Change this value to specify when the header color should change
        if (distanceY > 150) {
          logo.style.display = 'none';
          hdrCta.style.display = 'none';
          navElement.style.justifyContent = 'center';

        } else {
          logo.style.display = 'block';
          hdrCta.style.display = 'block';
          navElement.style.justifyContent = 'space-between';

        }
      });
/*--------------------------------------------------------------
    # Smooth Scrolling
    --------------------------------------------------------------*/
    window.onload = function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
      
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
      
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        });
      };
/*--------------------------------------------------------------
    # FAQs
    --------------------------------------------------------------*/


    var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    this.parentElement.classList.toggle("active");

                    var pannel = this.nextElementSibling;

                    if (pannel.style.display === "block") {
                        pannel.style.display = "none";
                    } else {
                        pannel.style.display = "block";
                    }
                });
            }
