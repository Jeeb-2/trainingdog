
	var tpj=jQuery;                  
    var revapi486_one; // Variable pour le premier slider
    var revapi486_two; // Variable pour le deuxième slider
    tpj(document).ready(function() {
        if(tpj("#rev_slider_one").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_one");
        }else{
            revapi486_one = tpj("#rev_slider_one").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:100000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[800,600,500,400],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 
		 if(tpj("#rev_slider_two").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_two");
        }else{
            revapi486_two = tpj("#rev_slider_two").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[650,650,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		
          // Fonction pour changer automatiquement les diapositives du premier slider
    function autoChangeSlideOne() {
        revapi486_one.revnext(); // Appel de la méthode revnext() pour passer à la diapositive suivante
    }

    // Appel de la fonction autoChangeSlideOne() toutes les 5 secondes pour le premier slider
    setInterval(autoChangeSlideOne, 8000);

    // Fonction pour changer automatiquement les diapositives du deuxième slider
    function autoChangeSlideTwo() {
        revapi486_two.revnext(); // Appel de la méthode revnext() pour passer à la diapositive suivante
    }

    // Appel de la fonction autoChangeSlideTwo() toutes les 5 secondes pour le deuxième slider
    setInterval(autoChangeSlideTwo, 8000);
});