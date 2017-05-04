document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.title-typed', {
    strings: ["Quest Rocketry"],
    typeSpeed: 10,
    callback: function () {

    $(document).ready(function(){
        
    

        $('html, body').animate({
            scrollTop: ($('.description').offset().top)
        },1000);
            
        })

        

    }
              
    });
});
