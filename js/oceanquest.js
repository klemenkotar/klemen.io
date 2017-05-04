         
document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.title-typed', {
    strings: ["oceanQuest XPrize^300"],
    typeSpeed: 50,
    callback: function () {
        
    $(document).ready(function(){
        
    

        $('html, body').animate({
            scrollTop: ($('.description').offset().top)
        },1000);
            
        })

    }
              
    });
});
