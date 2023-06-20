/*========================================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : Alexio
Author          : Anil
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2019 - Anil
========================================================================*/


(function($){
    "use strict"
    var ANIL = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    ANIL.WebLoad = function(){
      document.getElementById("loading").style.display = "none";
    }


    /*--------------------
    * owl Slider
    ----------------------*/

    ANIL.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 1
              },
              1140: {
                items: 2
              }
            }
        });
    }
    /*--------------------
    * owl Slider
    ----------------------*/
    ANIL.BlogSlider = function(){
      var testimonials_slider = $('#portfolio-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 2
              },
              1140: {
                items: 3
              }
            }
        });
    }


    /*--------------------
    * Isotope
    ----------------------*/
    ANIL.MasoNry = function () {
      var portfolioWork = $('.portfolio-content');
        $(portfolioWork).isotope({
            resizable: false,
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
          });
          //Filtering items on portfolio.html
          var portfolioFilter = $('.filter li');
          // filter items on button click
          $(portfolioFilter).on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            portfolioWork.isotope({ filter: filterValue });
          });
          //Add/remove class on filter list
          $(portfolioFilter).on( 'click', function() {
            $(this).addClass('active').siblings().removeClass('active');
          });
    }


    ANIL.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    ANIL.LightboxGallery = function(){
      $('.portfolio-col').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    }

     ANIL.mTypeIt = function() {
         new TypeIt('#type-it', {
             speed: 250,
             loop:true,
             strings: [
                 'Web Designer',
                 'Web Developer',
                 'Photographer',
                 'Bike Rider'
             ],
             breakLines: false
         });
    }

    ANIL.ContactForm = function() {
        $('#contactform').submit(function (e) {
            e.preventDefault();
            var formData = $(this).serializeArray();
            $.post('php/contact.php', formData)
                .done(function(response) {
                    if(response==='success') {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Thanks for contacting, I\'ll get back to you soon.'
                        });
                        $('#contactform')[0].reset();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!'
                        })
                    }
                })
                .fail(function() {
                    console.error('failed: check email form');
                });
        });
    }

    ANIL.Experience = function() {
        var experience = "9";
        var start = "08/2014"
        var end =
        $('.exp').html(experience);
    }

    // Window on Load
    $(window).on("load", function(){
      ANIL.MasoNry(),
      ANIL.WebLoad();
    });

    $( document ).ready(function() {
        ANIL.ClientSlider(),
        ANIL.BlogSlider(),
        ANIL.MasoNry(),
        ANIL.PopupVideo(),
        ANIL.LightboxGallery(),
        ANIL.mTypeIt(),
        ANIL.Experience(),
        ANIL.ContactForm();
    });

})(jQuery);


