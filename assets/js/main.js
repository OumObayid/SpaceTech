    
$(function()  {

    

  /*=======================================Initiation AOS======================================*/
  function aos_init() {
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false
    });
}
$(window).on('load', function() {
    aos_init();
});

    //------------------------------------------------------//
    //                    Smooth scroll                     //
    //------------------------------------------------------//
     // Un défilement animé 
     $('a[href^="#"]').click(function() {
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop: $(the_id).offset().top - 90
        }, 'slow');
        return false;
    });
    //------------------------------------------------------//
    //                        CURSOR                        //
    //------------------------------------------------------//

    $(document).ready(function(){
        $("body").append('<span class="cursor"></span>');
        $("body").append('<span class="cursor_point"></span>');
        let top=0;
        let left=0;
     
        $("body").on("mousemove",function(event){
            top= $(window).scrollTop() - $(this).offset().top + event.clientY
            left= $(window).scrollLeft() - $(this).offset().left + event.clientX
     
            $(".cursor").css({"left":left - 20,"top":top - 20})
            $(".cursor_point").css({"left":left - 2,"top":top - 2})
        })
     
        $("body").click(function(event){
            if(!$(".cursor").hasClass('active')){
                $(".cursor").addClass('active');
            }
            setTimeout(function(){
                $(".cursor").removeClass('active');
            },2000)
        });
     })


    //------------------------------------------------------//
    //                     BACK-TO-UP                       //
    //------------------------------------------------------//
        
    var offset = 200;
    var duration = 400;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
        $('.back-to-top').fadeOut(duration);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });


    //------------------------------------------------------//
    //                       HEADER                         //
    //------------------------------------------------------//

     $(document).on("scroll", function() {
        var $nav = $(".navbar");
        $nav.toggleClass('invisible', $(this).scrollTop() > 40 && $(this).scrollTop() < 499);
        $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
    });
   
        //-------close navbar on clicking on navbar link ------------
        $('.nav-link').on('click', function() {
            $('.navbar-toggler').click();
        });
    
        if ($(window).width() < 992) {
            //----add or remove style spécifique to mobile to navbar on clicking on button when scrollbar is on top
            $('.navbar-toggler').on('click', function() {
                if ($('.navbar-toggler').hasClass("collapsed")) {
                    $('.navbar').fadeIn('slow', function() {
                        $('.navbar').addClass('styleNav');
                    });
    
                } else {
                    $('.navbar').fadeOut('0', function() {
                        $(this).show();
                        $('.navbar').removeClass('styleNav');
                    });
                }
            });
        }

    //------------------------------------------------------//
    //                         BLOG                         //
    //------------------------------------------------------//
    
  
        //cards
        var cardsblogjuly = $('.cards-blog-july');
        var cardsblogjune = $('.cards-blog-june');
        var cardsblogmay = $('.cards-blog-may');
        //button date
        var btnjuly = $('.date-july');
        var btnjune = $('.date-june');
        var btnmay = $('.date-may');
        //par defaut
        
            btnjuly.addClass('date-color');
            $(cardsblogjune).hide();
            $(cardsblogmay).hide();
        
         
    
        //statements
        if (btnjune) {
            $(btnjune).click(function() {
    
                btnjune.addClass('date-color');
                btnjuly.removeClass('date-color');
                btnmay.removeClass('date-color');
    
                $(cardsblogjuly).hide();
                $(cardsblogjune).show();
                $(cardsblogmay).hide();
    
            });
        }
        if (btnmay) {
            $(btnmay).click(function() {
    
                btnmay.addClass('date-color');
                btnjuly.removeClass('date-color');
                btnjune.removeClass('date-color');
    
                $(cardsblogjuly).hide();
                $(cardsblogjune).hide();
                $(cardsblogmay).show();
    
            });
        }
        if (btnjuly) {
            $(btnjuly).click(function() {
    
                btnjuly.addClass('date-color');
                btnjune.removeClass('date-color');
                btnmay.removeClass('date-color');
    
                $(cardsblogjuly).show();
                $(cardsblogjune).hide();
                $(cardsblogmay).hide();
    
            });
        }
   
   
   
    //------------------------------------------------------//
    //                       SHOWCASE                       //
    //------------------------------------------------------//

    $('.filter-item').click(function(){
        $(':not(this)').removeClass('filter-active');
       $(this).addClass('filter-active');
    });
 
 
 
 $(".filter-item").click(function(){
     $(".filter-item:not(this)").removeClass('filter-active');
     $(this).addClass('filter-active');
   
     var value = $(this).attr('data-filter');
   
     if(value == "all")
     {
         $('.filter').show('1000');
     }
     else
     {
         $(".filter").not('.'+value).hide('3000');
         $('.filter').filter('.'+value).show('3000');
   
     }
    

    });
    
    //------------------------------------------------------//
    //     Navigation active state on scroll or on click    //
    //------------------------------------------------------//
    
    // //Using jquery waypoints to change active on scroll
    
    // //Default active on home
   
       
    if ($(window).width() > 992) {

        $('#home').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link1").addClass("active");
        }, { offset: 20 });
        $('#home').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link1").addClass("active");
        }, { offset: -20 });

        $('#about').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link2").addClass("active");
        }, { offset: -20 });
        $('#about').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link2").addClass("active");
        }, { offset: 100 });

        $('#services').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link3").addClass("active");
        }, { offset: 110 });
        $('#services').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link3").addClass("active");
        }, { offset: -110 });

        $('#showcase').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link4").addClass("active");
        }, { offset: 100 });
        $('#showcase').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link4").addClass("active");
        }, { offset: 120 });

        $('#pricing').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link5").addClass("active");
        }, { offset: 90 });
        $('#pricing').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link5").addClass("active");
        }, { offset: -20 });

        $('#blog').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link6").addClass("active");
        }, { offset: 90 });
        $('#blog').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link6").addClass("active");
        }, { offset: -20 });

        $('#contact').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link7").addClass("active");
        }, { offset: 90 });
    }
       
/*
        $('#about').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link1").addClass("active");
            //$(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset:0 });
        $('#about').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link1").addClass("active");
           // $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 60 });

        $('#services').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link2").addClass("active");
          //  $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 68 });
        $('#services').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link2").addClass("active");
         //   $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 70 });

        $('#showcase').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link3").addClass("active");
            $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: -20 });
        $('#showcase').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link3").addClass("active");
           // $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 90 });

        $('#pricing').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link4").addClass("active");
           // $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 90 });
        $('#pricing').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link4").addClass("active");
          //  $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: -20 });

        $('#blog').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link5").addClass("active");
           // $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 90 });
        $('#blog').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link5").addClass("active");
           //  $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: -20 });

        $('#contact').waypoint(function() {
            $(".navbar-collapse ul li").children().removeClass("active");
            $(".link6").addClass("active"); 
          //  $(".navbar-nav .nav-link").removeClass(':focus');
        }, { offset: 90 });
    

      */


    //------------------------------------------------------//
    //              Contact form  mail                      //
    //------------------------------------------------------//
 
    // Wait for the DOM to be ready

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
   


    // $(document).ready(function() {
    //     $("input#submit").click(function(e) {
    //         e.preventDefault();
    //         $.post('mail.php', {
    //             //JS Var   //These are is going to be pushed into $_POST
    //             "name": $("#name").val(),
    //             "email": $("#email").val(),
    //             "subject": $("#subject").val(),
    //             "message": $("#message").val()
    //         }, function(data) {
    //             $("#message-submit").html(data);
    //         }, 'text');
    //     });
    // });

    $("#myForm").submit(function(e) {
        e.preventDefault(); //empêcher une action par défaut
        $("#message-submit").html("Please wait");

        var form_url = $(this).attr("action"); //récupérer l'URL du formulaire
        var form_method = $(this).attr("method"); //récupérer la méthode GET/POST du formulaire
        var form_data = $(this).serialize(); //Encoder les éléments du formulaire pour la soumission

        $.ajax({
            url: form_url,
            type: form_method,
            data: form_data
        }).done(function(response) {
            $("#message-submit").html(response);
            $("#myForm").trigger("reset");
        });
    });



    //FIN JQUERY
     
    });


