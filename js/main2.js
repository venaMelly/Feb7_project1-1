
 $( document ).ready(function() {
     "use strict";
     //changing the height of the navbar when scroll down
     $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position > 100 ){
            $('.mynav').addClass('custom-nav');
        }else{
            $('.mynav').removeClass('custom-nav');
        }
     });

     //motion of gallery
   /*  $(window).scroll(function(){
         let position =  $(this).scrollTop();
         if(position >= 950){
             $('.content2').addClass('change');
         }else{
             $('.content2').removeClass('change');
         }
     });*/

     $(window).scroll(function(){
         let position =  $(this).scrollTop();
         if(position >= 550){
             $('.goal').addClass('change_goal');
         }else{
             $('.goal').removeClass('change_goal');
         }
     });

    //adding more properties to lightbox
   /*  lightbox.option({
         'wrapAround': true,
     })
*/

});


