/*jshint multistr:true */
/*!
* Pintest Tumblr Images 1.0
*
* Copyright 2013, William Rainbird
* Released under the MIT license
*
* Date: Sat 16th March 2013
*/

(function( $ ){

  "use strict";
  
     $('.pinImageWrapper').live("hover",
        function()
        {
             $(this).toggleClass("hover");
        }
    );

  $.fn.pinterestImageButton = function( options ) {
      
      
         var div = document.createElement('div'),
         ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];
    
         div.className = 'pin-image-style';
         div.innerHTML = '&shy;<style>          \
           .pinImageWrapper {                   \
              position: relative;               \
           }                                    \
                                                \
           .pinImageWrapper a.pinButton {       \
              position: absolute;               \
              top: 12px;                         \
              right: 12px;                       \
                 -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\
                 filter: alpha(opacity=0);      \
                 -moz-opacity: 0;                   \
                 -khtml-opacity: 0;             \
                 opacity: 0;                        \
                 -webkit-transition: all 0.2s ease-in-out\
           }                                    \
           .pinImageWrapper.hover a.pinButton {  \
                 -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";\
                 filter: alpha(opacity=100);        \
                 -moz-opacity: 1;                   \
                 -khtml-opacity: 1;             \
                 opacity: 1;                        \
           }                                    \
         </style>';
         
      ref.parentNode.insertBefore(div,ref);
      
      var pageHref = window.location.href;
      
      var settings = {
        customSource: null  
      };
      
      if ( options ) {
          $.extend( settings, options );
      }
      
      return this.each(function(){ 
 
        var selectors = [
            "img[src*='media.tumblr.com']"
        ];

        if (settings.customSource) {
            selectors.push(settings.customSource);
        }
        
        var $allPhotos = $(this).find(selectors.join(','));
        
            $allPhotos.each(function(){
                
                var $photo = $(this);
                
                var pageURL;
                
                var imgURL = $(this).attr('src');

                //get URL
                
                $(this).parents('.post').find('a').each(function() {
                    
                    var currHref = $(this).attr('href');
                    
                    if(currHref.indexOf(pageHref) > -1 && currHref.indexOf("post") > -1) {

                        pageURL = currHref;
                        return false;
                        
                    }
                    
                });
                
                var pinCode = '<a data-pin-config="none" href="//pinterest.com/pin/create/button/?url=' + pageURL + '&media=' + imgURL + '" data-pin-do="buttonPin" class="pinButton" ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>';

                var parentHref = $(this).parent().attr('href');
                
                if(parentHref !== undefined) {
                    
                    if(parentHref.indexOf("media.tumblr.com") > 0) {
                        
                        $photo.closest('a').wrap('<div class="pinImageWrapper"></div>').parent('.pinImageWrapper').append(pinCode);
        
                    } 
                    
                } else {
                
                    $photo.wrap('<div class="pinImageWrapper"></div>').parent('.pinImageWrapper').append(pinCode);
                
                }


            });

      });
  
  };
})( jQuery );