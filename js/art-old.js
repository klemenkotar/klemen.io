// This code runs the typed.js functionality on the home page
// Each consecutive command is nested within the callback function of the precious command
         
document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.what-is-art-typed', {
    strings: ["what^600 is^600 art?"],
    typeSpeed: 10,
    showCursor:false,
    callback: function () {
    

    Typed.new('.anwser-typed', {
    strings: ["^800art is the <span class='orange'>deepest</span> experession of self.^800<br>a <span class='violet'>direct</span>  line of communication to the primal limbic brain.^800<br>the <span class='red'>perfect</span>  complement to reason, ^200 explaining things that boolenean logic simply can not comprehend.^1000<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span class='anwser2-typed'></span>"],
    typeSpeed: 10,
    showCursor:true,
    callback: function () {
    
    $(document).ready(function(){
        
    

        $('html, body').animate({
            scrollTop: ($('.anwser2-typed').offset().top)
        },500);
        
        
    Typed.new('.anwser2-typed', {
    strings: ["^800art follows <span class='anwser3-typed'></span>"],
    typeSpeed: 10,
    showCursor:false,

        callback: function () {
            
            
            
    Typed.new('.anwser3-typed', {
    strings: ["rules^600", "<span class='font-6rem'><b>NO RULES</b></span>^300<br><span class='anwser4-typed'></span>"],
    typeSpeed: 50,
    backSpeed: 100,
    showCursor:false,

        callback: function () {
            
            
            
            
            
    Typed.new('.anwser4-typed', {
    strings: ["it makes its own path^200 and blazes a trail^100 whrever the winds of inspiration take it!^600<br>^300<br>art is whatever you want it to be^1000<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><span class='font-2rem'>^1000so go out and be a free^200 creative soul^600<br>unchained,^400 unbothered by the customs and expectations of society^1000<br>^200go out and be an artist^1000.^400.^400.^800<br><br><br><br><br><br>^300.^400.^400.^400because deep down^600-^200we all are^2000"],
    typeSpeed: 30,
    showCursor:false,

        callback: function () {
            
            $('.anwser').append("<span class='explore-gallery'><nav class='cl-effect-18'><br><br><br><br><br><br><a href='../exhibition/index.html'>explore gallery</a></nav></span>")
            
            $('html, body').animate({
            scrollTop: ($('.explore-gallery').offset().top)
        },500);
            
            
            
        }
        
        
    });
            
        }
        
        
    });
            
        }
        
        
    });
    

        });
        
        
        

    }
              
    });
        

    }
              
    });
});


/*

art is the deepest experession of self.
an direct line of communication to the primal libmic brain.
the prefect complement to reason, explainin things that boolenean logic simply cant comprehend

art (follows rules)/(NO rules). it makes its own path and blazes a trail whrever the winds of inspiration take import

art is whatever you want it to be - so go out and be a free creative sould unchained by the customs and expectations of society. 
go out and be an artist - because deep down we all are.

*/