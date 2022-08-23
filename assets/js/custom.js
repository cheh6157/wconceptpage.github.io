$(function(){

    /*
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * 
     *
     * 
     * 
     * 
     * 헤더 스크롤 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */ 
    $( window ).scroll( function() {
      현재스크롤 = $(document).scrollTop();

      if(현재스크롤 > 0){
        $(".gnb-area").addClass('fixed')
      }else{
        $('.gnb-area').removeClass('fixed')
      }

    });



     /*
     * 메인 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */
        var mainSlide = new Swiper(".sc-mainslide .swiper", {
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            }
            //화살표추가
      });

    /*
     *
    * sc-new 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     *
     * 
     */
    function sliblingChildBig(){
      $('.sc-new .swiper-slide-active').next().addClass('big')
      $('.sc-new .swiper-slide-active').next().next().next().next().addClass('big')
    }

    var scNew = new Swiper(".sc-new .swiper", {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: ".sc-new .swiper-button-next",
        prevEl: ".sc-new .swiper-button-prev"
      }
    });
    sliblingChildBig();

    scNew.on('slideChangeTransitionEnd',function(){
      $('.sc-new .swiper-slide').removeClass('big')
      sliblingChildBig();
      scNew.update();
    })


     /*
     *
     *
     *  sc-make 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     *  
     */
     var scMake = new Swiper(".sc-make .swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: ".sc-make .swiper-button-next",
        prevEl: ".sc-make .swiper-button-prev"
      }, breakpoints:{
        1599:{
          slidesPerView:7,
        }
      }
      });




     /* 
     * 
     * 
     *  sc-exc 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */

     var scexc = new Swiper(".sc-exc .swiper", {
      slidesPerView: 1.5,
      loop:true,
      centeredSlides:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
      });
    /* 
     * 
     *sc-beauty slide 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     *
     * 
     * 
     * 
     */
     var swiper = new Swiper(".sc-beauty .swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        }
      });

     /* 
     *
     *
     * 
     **sc-wtv slide 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */

     var swiper = new Swiper(".sc-wtv .swiper", {
      slidesPerView: 1.7,
      loop:true,
      centeredSlides:true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });



    /* 
     *  
     * 
     *
     *  **sc-beauty slide 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     */
    var swiper = new Swiper(".sc-autoslide .swiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });

     /* 
     *
     *
     *
     *sc-designer slide 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     * 
     */

     const designerArr =[ 'Louise N.','Archivepke','ATT.','LENINA','LE'];
   
     var swiper = new Swiper(".sc-designer .swiper", {
       slidesPerView: 'auto',
       spaceBetween: 40,
       centeredSlides: true,
       loop: true,
       navigation: {
        prevEl: ".btn-nav.prev",
        nextEl: ".btn-nav.next",
      },
      pagination: {
        el: ".group-navi",
        clicktable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + designerArr[index] + "</span>";
        },
      },
     });


     /* 
     *  
     * 
     *
     *
     * sc-wdna slide 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (uno)
     *     
     */
    
     const wdnaArr =[ 'ALL','WOMEN','MEN','LIFE','BEAUTY'];
   
     var swiper = new Swiper(".sc-wdna .swiper", {
       slidesPerView: 1,
       spaceBetween: 40,
       centeredSlides: true,
       loop: true,
       speed: 0,
      pagination: {
        el: ".grp-navi",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + wdnaArr[index] + "</span>";
        },
      },
     });






     /*   
     *
     */
    })//이거는 하나만 쓰세요 $(function())입니다.