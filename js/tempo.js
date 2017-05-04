// This code runs the typed.js functionality on the home page
// Each consecutive command is nested within the callback function of the precious command
         
document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.intro-typed', {
    strings: ["<span class='title-typed'>TEMPO</span><br><span class='motto-typed'><span>futurum  </span><span>  nobis  </span><span>  est  </span> </span>"],
    typeSpeed: 10,
    showCursor:false,
    callback: function () {
        
    Typed.new('.explore-typed', {
    strings: ["explore"],
    typeSpeed: 10,
    showCursor:false,
    callback: function () {
        

    }
              
    });
        
    }
              
    });
});


$(document).ready(function(){
    
    $('.explore').click(function(){
        
    

        $('html, body').animate({
            scrollTop: ($('.about').offset().top)
        },500);
        
        
 
        Typed.new('.about-typed', {
        strings: ["TEMPO is a new social media platform that bla bla bla."],
        typeSpeed: 10,
        showCursor:true
            
        });
        
        
    });
    
});