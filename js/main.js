$( function(){

    //Page loading
    $(document).ready(function(){
        $('#loading-overlay').hide();
    });

    $(document).on("click", '.remove-dropped-item', function(){
        $(this).each(function(){
            $(this).parent().remove()
            console.log('sss')
        })
    })

    //Tablet rotation 
    if((600<window.innerWidth)&&(1200>window.innerWidth)){


        if(window.matchMedia("(orientation: portrait)").matches) {

            $('.total-page-dark').addClass('tablet-portret-mode');

            $('.drop-area').css('overflow','hidden');

            $('#tablet-mode-confirm').css('display','block');

        }


        $(window).on("orientationchange",function(){

            if(window.orientation == 0) // Portrait
            {
                $('.total-page-dark').addClass('tablet-portret-mode');

                $('.drop-area').css('overflow','hidden');

                $('#tablet-mode-confirm').css('display','block');


            }
            else // Landscape
            {

                $('.drop-area').css('overflow','auto');
                $('.total-page-dark').removeClass('tablet-portret-mode');
                $('#tablet-mode-confirm').css('display','none');
                $('.rotate-tablet-icon').fadeIn();

                setTimeout(function() {
                    $('.rotate-tablet-icon').fadeOut('600');
                    return false
                }, 1000);


            }


            return false
          });

    }else{
        $('#tablet-mode-confirm').css('display','none');
    }

    // **Editor header**


    //Pages to be edited

    $('.page-section').click(function(){

        $('.page-dropdown').toggle(); 
    });

    $(window).click(function(event) {
        let pageDropdown = $(".page-dropdown");
        let pageSection = $('.page-section');
        if (!pageDropdown.is(event.target) && !pageDropdown.has(event.target).length && !pageSection.is(event.target) ){
            pageDropdown.hide();
        }

        if( $('.page-dropdown').css('display') == 'none'){
            $('.dropdown-down-icon').css('display','block');
            $('.dropdown-up-icon').css('display','none');
        }

        if( $('.page-dropdown').css('display') == 'block'){
            $('.dropdown-down-icon').css('display','none');
            $('.dropdown-up-icon').css('display','block');
        }
    });

    $('.other-page-link').click(function(){

        $(this).each(function() {
            $('.current-page').text($(this).text());
            setTimeout(function(){
                $('.page-dropdown').css('display','none')
            },100)
        });
    });


    //Responsive icons

    $('.desktop-black-icon').click(function(){
        $('.desktop-size-icon').css('background-color','rgba(0, 87, 225, 0.1)');
        $('.tablet-size-icon').css('background-color','inherit');
        $('.mobile-size-icon').css('background-color','inherit');
        $(this).css('display','none');
        $('.desktop-blue-icon').css('display','block');
        $('.tablet-blue-icon').css('display','none');
        $('.tablet-black-icon').css('display','block');
        $('.mobile-blue-icon').css('display','none');
        $('.mobile-black-icon').css('display','block');
        $('.drop-area').css('width','100%');
    });

    $('.tablet-black-icon').click(function(){
        $('.desktop-size-icon').css('background-color','inherit');
        $('.tablet-size-icon').css('background-color','rgba(0, 87, 225, 0.1)');
        $('.mobile-size-icon').css('background-color','inherit');
        $(this).css('display','none');
        $('.tablet-blue-icon').css('display','block');
        $('.desktop-blue-icon').css('display','none');
        $('.desktop-black-icon').css('display','block');
        $('.mobile-blue-icon').css('display','none');
        $('.mobile-black-icon').css('display','block');
        $('.drop-area').css('width','768px');
        $('.drop-area').css('height','1024px');
    });

    $('.mobile-black-icon').click(function(){
        $('.desktop-size-icon').css('background-color','inherit');
        $('.tablet-size-icon').css('background-color','inherit');
        $('.mobile-size-icon').css('background-color','rgba(0, 87, 225, 0.1)');
        $(this).css('display','none');
        $('.mobile-blue-icon').css('display','block');
        $('.desktop-blue-icon').css('display','none');
        $('.desktop-black-icon').css('display','block');
        $('.tablet-blue-icon').css('display','none');
        $('.tablet-black-icon').css('display','block');
        $('.drop-area').css('width','425px');
    });


    //Light and dark mode

    $('.dark-light-box').click(function(){
        if($(".theme-cycle").css('background-color') == 'rgb(99, 96, 96)'){

            $(".theme-cycle").animate({
                left: '20px',
                backgroundColor: 'rgb(255, 255, 255)'
            });

            $(".dark-light-box").addClass("dark-mode-box");
            $("body").attr('id','dark-mode');
            $('.header-logo-for-light').css('display','none')
            $('.header-logo-for-dark').css('display','block')

            $("#dark-mode .sidenav").css('background-color','RGBA(144,144,144,1)');

        } else if($(".theme-cycle").css('background-color') == 'rgb(255, 255, 255)'){

            $(".theme-cycle").animate({
                left: '0px',
                backgroundColor: 'rgb(99, 96, 96)'
            });

            $(".dark-light-box").removeClass("dark-mode-box");
            $("body").attr('id','');
            $('.header-logo-for-light').css('display','block')
            $('.header-logo-for-dark').css('display','none')

            $(".sidenav").css('background-color','#F4F3F3');
        }

        return false
    });


    //User dropdown
    $('.user-info').click(function(){

        $('.user-info-dropdown').toggle();

    });

    $(window).click(function(event) {
        let userDropdown = $(".user-info-dropdown");
        let userSection = $('.user-info');
        if (!userDropdown.is(event.target) && !userDropdown.has(event.target).length && !userSection.is(event.target) ){
            userDropdown.hide();
        }

        if( $('.user-info-dropdown').css('display') == 'none'){
            $('.username-dropdown-icon').css('display','block');
            $('.username-dropup-icon').css('display','none');
        }

        if( $('.user-info-dropdown').css('display') == 'block'){
            $('.username-dropdown-icon').css('display','none');
            $('.username-dropup-icon').css('display','block');
        }
    });


    //Sidebar icons 

    $('.section-icon svg').mouseover(function(){
        $('.section-tooltip').css('display','block');
    });

    $('.section-icon svg').mouseleave(function(){
        $('.section-tooltip').css('display','none');
    });

    $('.add-section-icon svg').mouseover(function(){
        $('.drag-drop-tooltip').css('display','block');
    });

    $('.add-section-icon svg').mouseleave(function(){
        $('.drag-drop-tooltip').css('display','none');
    });

    $('.media-icon svg').mouseover(function(){
        $('.media-tooltip').css('display','block');
    });

    $('.media-icon svg').mouseleave(function(){
        $('.media-tooltip').css('display','none');
    });


    //Editor's opening with sidebar icons

    $('.section-black-icon').click(function(){
        $('.section-icon').css('background','rgba(0, 87, 225, 0.1)');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','inherit');
        $('.section-black-icon').css('display','none');
        $('.section-blue-icon').css('display','block');
        $('.add-section-purple-icon').css('display','none');
        $('.add-section-black-icon').css('display','block');
        $('.media-red-icon').css('display','none');
        $('.media-black-icon').css('display','block');
        $('.sections-part').css('display','block');
        $('.add-sections-part').css('display','none');
        $('.media-part').css('display','none');
        $(".closebtn-rotated-img").css('display','none');
        $(".closebtn-img").css('display','block');

        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');

        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }
    });

    $('.section-blue-icon').click(function(){
       
        $('.sections-part').css('display','block');
        $('.add-sections-part').css('display','none');
        $('.media-part').css('display','none');
        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');

        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }
    });

    $('.add-section-black-icon').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','rgba(222, 39, 225, 0.1)');
        $('.media-icon').css('background','inherit');
        $('.add-section-black-icon').css('display','none');
        $('.add-section-purple-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('.media-red-icon').css('display','none');
        $('.media-black-icon').css('display','block');
        $('.sections-part').css('display','none');
        $('.add-sections-part').css('display','block');
        $('.media-part').css('display','none');
        $(".closebtn-rotated-img").css('display','none');
        $(".closebtn-img").css('display','block');

        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');

        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }
    });

    $('.add-section-purple-icon').click(function(){
     
        $('.sections-part').css('display','none');
        $('.add-sections-part').css('display','block');
        $('.media-part').css('display','none');
        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');

        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }
    });

    $('.media-icon').click(function () {
        $('.media-part').removeClass('carousel-media-part');
    })

    $('.media-black-icon').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','rgba(246, 22, 81, 0.1)');
        $('.media-black-icon').css('display','none');
        $('.media-red-icon').css('display','block');
        $('.add-section-purple-icon').css('display','none');
        $('.add-section-black-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('.sections-part').css('display','none');
        $('.add-sections-part').css('display','none');
        $('.media-part').css('display','block');
        $(".closebtn-rotated-img").css('display','none');
        $(".closebtn-img").css('display','block');
        $('.media-img-delete-btn').removeClass('choose-media-btn logo-media-btn favicon-media-btn carousel-media-btn category-media-btn card-media-btn');
        $('.upload-media-img-item').removeClass('choose-media-item logo-media-item favicon-media-item carousel-media-item category-media-item card-media-item');
        $('.media-img-delete-btn').addClass('remove-media-img');
        $('.media-img-delete-btn').html('&#x2715');

        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');
        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }

    });

    $('.carousel-from-lib').bind("click",function(e){
        $(this).each(function () {
            $('.media-part').addClass('carousel-media-part');
            $('.carousel-media-part').css('display','block');
            $('.carousel-media-part .media-img-delete-btn').addClass('choose-media-btn carousel-media-btn');
            $('.carousel-media-part .upload-media-img-item').addClass('choose-media-item carousel-media-item');
        })
        e.preventDefault();
    });

    $('.choose-from-lib').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','rgba(246, 22, 81, 0.1)');
        $('.sections-part').css('display','none');
        $('.media-black-icon').css('display','none');
        $('.media-red-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('body').append('<style>.choose-media-item:after{content: none;}</style>')
        $('.choose-media-btn').html('&#x2713');
        $('.media-img-delete-btn').removeClass('remove-media-img');
        return false
    });
    
    

    $('.media-red-icon').click(function(){
       
        $('.sections-part').css('display','none');
        $('.add-sections-part').css('display','none');
        $('.media-part').css('display','block');
        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');

        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }
    });

    
    //Next and previous buttons

    $('.next-icon svg').mouseover(function(){
        $('.next-tooltip').css('display','block');
    });

    $('.next-icon svg').mouseleave(function(){
        $('.next-tooltip').css('display','none');
    });

    $('.previous-icon svg').mouseover(function(){
        $('.previous-tooltip').css('display','block');
    });

    $('.previous-icon svg').mouseleave(function(){
        $('.previous-tooltip').css('display','none');
    });

    $('.prev-black-icon').mousedown(function(){
        $(this).css('display','none');
        $('.prev-blue-icon').css('display','block');
    });

    $('.prev-blue-icon').mouseup(function(){
        $(this).css('display','none');
        $('.prev-black-icon').css('display','block');
    });

    $('.next-black-icon').mousedown(function(){
        $(this).css('display','none');
        $('.next-blue-icon').css('display','block');
    });

    $('.next-blue-icon').mouseup(function(){
        $(this).css('display','none');
        $('.next-black-icon').css('display','block');
    });


    //Editor's opening with editor button

    $('.closebtn-img').click(function(){
        $(".closebtn-rotated-img").css('display','block');
        $(".closebtn-img").css('display','none');
        $(".sidenav").css('background-color','#F4F3F3');
        $("#dark-mode .sidenav").css('background-color','RGBA(144,144,144,1)');
        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".template-view").css('margin-left','70px');
            $(".sidenav").css('margin-left','-205px');
        } else {
            $(".template-view").css('margin-left','80px');
            $(".sidenav").css('margin-left','-245px');
        }
    });


    //Editor's closing with editor button

    $('.closebtn-rotated-img').click(function(){
        $(".closebtn-rotated-img").css('display','none');
        $(".closebtn-img").css('display','block');

        if ((window.matchMedia('(max-width: 1200px)').matches) && (window.matchMedia('(min-width: 600px)').matches)) {
            $(".sidenav").css('margin-left','0px');
            $(".template-view").css('margin-left','276px');

        } else {
            $(".template-view").css('margin-left','326px');
            $(".sidenav").css('margin-left','0px');
        }

    });


    //Sortabling for section items

    $("#sortable").sortable({
        handle: '.sortable-icon'
    });

    $("#sortable").disableSelection();


    //Opening section dropdown and removing section item

    $('.section-item-icon').click(function(){
        $(this).each(function(){
            $(this).children().closest('.section-item-dropdown').toggle();
        })
        let sectionItemIcon = $(this);
        let sectionItemDropdown = $(this).children().closest('.section-item-dropdown');
        $(window).click(function(event) {
            if (!sectionItemDropdown.is(event.target) && !sectionItemDropdown.has(event.target).length && !sectionItemIcon.is(event.target) ){
                sectionItemDropdown.hide();
            }
        });
    });

    $('.remove-section-item').click(function(){

        $(this).each(function() {
            $(this).parent().closest('.section-item').hide();
        });

    });


    //Return section items

    $('.back-sections-btn').click(function(){
        $('.advanced-section').css('display','none');
        $('.sections').css('display','block');
    })


    //Get advanced section item

    $('.header-section').click(function(){
        $('.sections').css('display','none');
        $('.advanced-section').css('display','block');
        $('.adv-section-item').css('display','none');
        $('.header-adv-section').css('display','block');
    });

    $('.carousel-section').click(function(){
        $('.sections').css('display','none');
        $('.advanced-section').css('display','block');
        $('.adv-section-item').css('display','none');
        $('.carousel-adv-section').css('display','block');
    });

    $('.categories-section').click(function(){
        $('.sections').css('display','none');
        $('.advanced-section').css('display','block');
        $('.adv-section-item').css('display','none');
        $('.categories-adv-section').css('display','block');
    });

    $('.image-with-text-section').click(function(){
        $('.sections').css('display','none');
        $('.advanced-section').css('display','block');
        $('.adv-section-item').css('display','none');
        $('.image-with-text-adv-section').css('display','block');
    });

    $('.feautured-products-section').click(function(){
        $('.sections').css('display','none');
        $('.advanced-section').css('display','block');
        $('.adv-section-item').css('display','none');
        $('.feautured-products-adv-section').css('display','block');
    });

    $('.footer-section').click(function(){
        $('.sections').css('display','none');
        $('.advanced-section').css('display','block');
        $('.adv-section-item').css('display','none');
        $('.footer-adv-section').css('display','block');
    });


    //Section order numbering

    $('.header-number').click(function(){

        $(this).each(function() {
            $('.header-number').removeClass('active-header-number');
            $(this).addClass('active-header-number');
        });
    });

    $('.category-number').click(function(){

        $(this).each(function() {
            $('.category-number').removeClass('active-category-number');
            $(this).addClass('active-category-number');
        });
    });

    
    $('.footer-number').click(function(){

        $(this).each(function() {
            $('.category-number').removeClass('active-footer-number');
            $(this).addClass('active-footer-number');
        });
    });


    //Image downloading

    $(".logo-upfile, .favicon-upfile, .carousel-upfile, .category-upfile, .card-upfile").change(function(){
        $(this).each(function(){
            $(this).parent().parent().next().css('display','block');
            $(this).parent().parent().css('display','none');
            var carousel_file_size = $(this)[0].files[0].size;
            if(carousel_file_size>100097152) {
                alert("File size is greater than 100MB");
                return false
            }
    
            var $carouselImageInput = $(this);
    
            var input = this;
            var url = $(this).val();
            var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
            if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg"))
            {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    $carouselImageInput.parent().parent().next().children().first().children().first().children().attr('src', e.target.result);
                return false
                }
            reader.readAsDataURL(input.files[0]);
            $carouselImageInput.parent().parent().next().children().first().children().last().children().first().text($(this).val().replace(/C:\\fakepath\\/i, ''));
            $carouselImageInput.parent().parent().next().children().first().children().last().children().last().text('Image')
    
            } else{
                $carouselImageInput.parent().parent().next().children().first().children().first().children().attr('src', './img/no-image-file.png');
                $carouselImageInput.parent().parent().next().children().first().children().last().children().first().text('Image file not found');
                $carouselImageInput.parent().parent().next().children().first().children().last().children().first().css('white-space','pre-wrap');
                $carouselImageInput.parent().parent().next().children().first().children().last().children().last().text('')
            }
    
        })
       
        return false
    });


    //Remove the uploaded image

    $('.uploaded-logo-remove, .uploaded-faviocn-remove, .uploaded-carousel-remove, .uploaded-category-remove, .uploaded-card-remove').on( 'click',function(){
        $(this).each(function(){
            $(this).parent().parent().css('display','none');
            $(this).parent().parent().parent().children().first().css('display','block');
        })
    });

    
    //Click to media library

    $('.logo-from-lib').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','rgba(246, 22, 81, 0.1)');
        $('.sections-part').css('display','none');
        $('.media-part').css('display','block');
        $('.media-black-icon').css('display','none');
        $('.media-red-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('body').append('<style>.choose-media-item:after{content: none;}</style>')
        $('.choose-media-btn').html('&#x2713');
        $('.media-img-delete-btn').addClass('choose-media-btn logo-media-btn');
        $('.upload-media-img-item').addClass('choose-media-item logo-media-item');

        return false

    });

   
    $('.favicon-from-lib').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','rgba(246, 22, 81, 0.1)');
        $('.sections-part').css('display','none');
        $('.media-part').css('display','block');
        $('.media-black-icon').css('display','none');
        $('.media-red-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('body').append('<style>.choose-media-item:after{content: none;}</style>')
        $('.choose-media-btn').html('&#x2713');
        $('.media-img-delete-btn').addClass('choose-media-btn favicon-media-btn');
        $('.upload-media-img-item').addClass('choose-media-item favicon-media-item');

        return false

    });

    $('.category-from-lib').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','rgba(246, 22, 81, 0.1)');
        $('.sections-part').css('display','none');
        $('.media-part').css('display','block');
        $('.media-black-icon').css('display','none');
        $('.media-red-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('body').append('<style>.choose-media-item:after{content: none;}</style>')
        $('.choose-media-btn').html('&#x2713');
        $('.media-img-delete-btn').addClass('choose-media-btn category-media-btn');
        $('.upload-media-img-item').addClass('choose-media-item category-media-item');


        return false

    });

    $('.card-from-lib').click(function(){
        $('.section-icon').css('background','inherit');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','rgba(246, 22, 81, 0.1)');
        $('.sections-part').css('display','none');
        $('.media-part').css('display','block');
        $('.media-black-icon').css('display','none');
        $('.media-red-icon').css('display','block');
        $('.section-blue-icon').css('display','none');
        $('.section-black-icon').css('display','block');
        $('body').append('<style>.choose-media-item:after{content: none;}</style>')
        $('.choose-media-btn').html('&#x2713');
        $('.media-img-delete-btn').addClass('choose-media-btn card-media-btn');
        $('.upload-media-img-item').addClass('choose-media-item card-media-item');

        return false

    });


    // Upload media image from user pc

    $(".media-upfile").bind('change',function (e){

        $('.upload-media-upfile-part').css('display','block');
        $('.media-upfile-part').css('display','none');

        var input = this;
        var url = $(this).val();
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")){
            var reader = new FileReader();
            reader.onload = function (e) {

                if($(".media-upload-imgs > div").length > 100){
                    alert("You can't upload more than 100 photos. Please reduce the number of images in the media.");
                    return false
                }else{
                    var $uploadMediaImgItem = $(document.createElement('div'));
                    $uploadMediaImgItem.addClass('upload-media-img-item');

                    var $newMediaImg = $(document.createElement('img'));
                    $newMediaImg.attr('id', 'upload-media-image');
                    $newMediaImg.attr('src', e.target.result);

                    var mediaImgDeleteBtn = $(document.createElement('div'));
                    mediaImgDeleteBtn.addClass('media-img-delete-btn');
                    $('.media-upload-imgs').prepend($uploadMediaImgItem);
                    $uploadMediaImgItem.append($newMediaImg);
                    $uploadMediaImgItem.append(mediaImgDeleteBtn);

                    var $uploadMediaImgItemLength = $(".media-upload-imgs > div").length;
                    $('.current-media-count').text($uploadMediaImgItemLength-1);
                }
            }
            reader.readAsDataURL(input.files[0]);
        }
        else{
            alert('Please enter an image file.');
            $('.upload-media-upfile-part').css('display','none');
            $('.media-upfile-part').css('display','block');
        }


    })


  
    //Controlling logo width

    $('.logo-width-select>div').click(function(){

        $('.logo-width-dropdown-part').toggle();

    });

    $(window).click(function(event) {
        let logoWithDropdown = $(".logo-width-dropdown-part");
        let logoWidhtSection = $('.logo-width-select div');
        if (!logoWithDropdown.is(event.target) && !logoWithDropdown.has(event.target).length && !logoWidhtSection.is(event.target) ){
            logoWithDropdown.hide();
        }

        if( $('.logo-width-dropdown-part').css('display') == 'none'){
            $('.logo-width-dropdown-icon').css('display','block');
            $('.logo-width-dropup-icon').css('display','none');
        }

        if( $('.logo-width-dropdown-part').css('display') == 'block'){
            $('.logo-width-dropdown-icon').css('display','none');
            $('.logo-width-dropup-icon').css('display','block');
        }
    });

    $('.other-logo-width').click(function(){

        $(this).each(function() {
            $('#currentRangeValue').text($(this).html());

            $("#currentRangeValue").html(function(){
                var $CurrenRangeValue = $(this).html().substring(0, $('#currentRangeValue').html().length - 2);
                $('#logo-width-range').val(parseInt($CurrenRangeValue));
                var $min = $('#logo-width-range').attr('min');
                var $max = $('#logo-width-range').attr('max');
                var $value = $('#logo-width-range').val();
                $('#logo-width-range').css("background-size",($value - $min) * 100 / ($max - $min) + '% 100%');
                $('#logo-width-range').val(parseInt($CurrenRangeValue));

            });
            setTimeout(function(){
                $('.logo-width-dropdown-part').css('display','none')
            },100)

        });
    });

    $('#logo-width-range').on('input', function(){
        var $min = $('#logo-width-range').attr('min');
        var $max = $('#logo-width-range').attr('max');
        var $value = $('#logo-width-range').val();
        $('#logo-width-range').css("background-size",($value - $min) * 100 / ($max - $min) + '% 100%');


    });


    //Color changing

    $('#add-backcolor').change(function(){
        $('.back-color-input').removeClass('active-color');
        $('#current-added-backcolor').addClass('active-color');
    });

    $('#add-textcolor').change(function(){
        $('.text-color-input').removeClass('active-color');
        $('#current-added-textcolor').addClass('active-color');
    });

    $('.add-back-color-input').click(function(){
        $('#color_picker_1').css('display','block');
        $('#color_picker_2').css('display','none');
    });

    $('.add-text-color-input').click(function(){
        $('#color_picker_2').css('display','block');
        $('#color_picker_1').css('display','none');
    });

    $(document).click(function() {
        let colorPicker1 = $("#color_picker_1");
        let addBackColorInput = $('.add-back-color-input');
        if (!colorPicker1.is(event.target) && !colorPicker1.has(event.target).length && !addBackColorInput.is(event.target) ){
            colorPicker1.hide();
        }
    });

    $(document).click(function() {
        let colorPicker2 = $("#color_picker_2");
        let addTextColorInput = $('.add-text-color-input');
        if (!colorPicker2.is(event.target) && !colorPicker2.has(event.target).length && !addTextColorInput.is(event.target) ){
            colorPicker2.hide();
        }
    });

    $('#color-cancel1').click(function(){
        $('#color_picker_1').css('display','none');
    });

    $('#color-cancel2').click(function(){
        $('#color_picker_2').css('display','none');
    });

    $('#color-apply1').click(function(){
        $('.current-added-backcolor .back-color-input').val($('#hex_input1').val());
        $('.back-color-input').removeClass('active-color');
        $('.current-added-backcolor .back-color-input').addClass('active-color');
        setTimeout(function(){
            $('#color_picker_1').hide();
        },300)
        
    });

    $('#color-apply2').click(function(){
        $('.current-added-textcolor .text-color-input').val($('#hex_input2').val());
        $('.text-color-input').removeClass('active-color');
        $('.current-added-textcolor .text-color-input').addClass('active-color');
        setTimeout(function(){
            $('#color_picker_2').hide();
        },300)
    });
  

    // Text limiting in textarea

    $('.textarea-item').keypress(function(e) {

        $(this).each(function(){
            var max = parseInt($(this).next().children().text());
            if (e.which < 0x20) {
                return;
            }
            if (this.value.length == max) {
                e.preventDefault();
            } else if (this.value.length > max) {
                // Maximum exceeded
                this.value = this.value.substring(0, max);
            }
        });
       
    });


    //Setting the social links

    $('.web-adress-checkbox').change(function(){
        $(this).each(function(){
            $(this).parent().parent().next().css('display','flex');
            $(this).parent().parent().next().next().css('display','none');
        })
    });


    //Setting the page for section 

    $('.section-checkbox').change(function(){
        $(this).each(function(){
            $(this).parent().parent().next().css('display','none');
            $(this).parent().parent().next().next().css('display','block');
        })
    });

    $('.current-page-part').click(function(){
        $(this).each(function(){
            $(this).parent().children().last().toggle();
        })

        let dropdown = $(this).parent().children().last();
        if( dropdown.css('display') == 'none'){
            $(this).parent().children().first().children().last().children().first().css('display','block');
            $(this).parent().children().first().children().last().children().last().css('display','none');                
        }

        if( dropdown.css('display') == 'block'){
                $(this).parent().children().first().children().last().children().first().css('display','none');
                $(this).parent().children().first().children().last().children().last().css('display','block');               
        }
        
    });
  
    $(window).click(function(event) {
        var selectDropdown = $(".select-dropdown");
        var currentPage = $('.current-page-part');

        if (!selectDropdown.is(event.target) && !selectDropdown.has(event.target).length && !currentPage.is(event.target) ){
            selectDropdown.hide();
        }

        $(".select-dropdown").each(function(){
            if( $(this).css('display') == 'none'){
            $(this).parent().children().first().children().last().children().first().css('display','block');
            $(this).parent().children().first().children().last().children().last().css('display','none');                
            }
        })
    
        $(".select-dropdown").each(function(){
            if( $(this).css('display') == 'block'){
            $(this).parent().children().first().children().last().children().first().css('display','none');
            $(this).parent().children().first().children().last().children().last().css('display','block');                
            }
        })
    });

    $('.other-select').click(function(){
        $(this).each(function() {
            var currentPageSection = $(this).parent().parent().parent().parent().parent().children().first();
            currentPageSection.children().first().text($(this).text());
            var otherSection = $(this);
            setTimeout(function(){
                var dropdownOtherSection = otherSection.parent().parent().parent().parent();
                dropdownOtherSection.css('display','none');
                currentPageSection.children().last().children().first().css('display','block');
                currentPageSection.children().last().children().last().css('display','none');
            },100)
        });
    });


    // **Carousel

    //Adding other carousel image

    $('.carousel-add-other-image').click(function(){
        $('.carousel-image-items').css('display','flex');
        $(this).css('margin-top','0px');
        
        if($('.carousel-image-items').children().length === 1){
            $('.carousel-adv-item').css('display','none')
            $('.carousel-adv-section-2').css('display','block');
        }else {
            $('.carousel-adv-section-2').css('display','none');
        }
        
        if($('.carousel-image-items').children().length === 2){
            $('.carousel-adv-item').css('display','none')
            $('.carousel-adv-section-3').css('display','block');
        }else {
            $('.carousel-adv-section-3').css('display','none');
        }
        
        if($('.carousel-image-items').children().length === 3){
            $('.carousel-adv-item').css('display','none')
            $('.carousel-adv-section-4').css('display','block');
        }else {
            $('.carousel-adv-section-4').css('display','none');
        }
        
        if($('.carousel-image-items').children().length === 4){
            $('.carousel-adv-item').css('display','none')
            $('.carousel-adv-section-5').css('display','block');
        }else {
            $('.carousel-adv-section-5').css('display','none');
        }

        if($('.carousel-image-item').length<4){
            $('.carousel-add-other-image').css({
                'opacity':'1',
                'pointer-events': 'unset'
            });
        }else{
            $('.carousel-add-other-image').css({
                'opacity':'0.4',
                'pointer-events': 'none'
            });
        }

        if($('.carousel-image-item').length<5){

            var $carouselImgItem = $(document.createElement('div'));
            $carouselImgItem.addClass( `carousel-image-item carousel-image-item-${$('.carousel-image-item').length+1}`);
            var $carouselImgItemChild = $(document.createElement('div'));
            $carouselImgItemChild.addClass('carousel-image-item-child');
            $carouselImgItemChild.html($('.carousel-image-item').length+1);


            $carouselImgItem.css('position','relative');
            var $carouselItemDeleteBtn = $(document.createElement('div'));
            $carouselItemDeleteBtn.addClass(`carousel-item-delete-btn carousel-item-delete-btn-${$('.carousel-image-item').length+1}`);
            $carouselItemDeleteBtn.html('&#x2715');

            $('.carousel-image-items').append($carouselImgItem);
            $carouselImgItem.append($carouselImgItemChild);
            $carouselImgItem.append($carouselItemDeleteBtn);
            $('.carousel-image-item').removeClass('active-carousel-img-item');
            $('.carousel-image-item').last().addClass('active-carousel-img-item');
            $(document).on('mouseover', '.active-carousel-img-item' , function(){
                $(this).each(function() {
                    $(this).css('position','relative');
                    $(this).find('.carousel-item-delete-btn').css('display','flex');

                });
            });

            $(document).on('mouseleave', '.active-carousel-img-item' , function(){
                $(this).each(function() {
                    $(this).find('.carousel-item-delete-btn').css('display','none');
                });
            });
        }

        if($('.carousel-image-item').length>3){
            $('.carousel-add-other-image').css({
                'width':'100%',
                'margin-top': '10px'
            });
        }else{
            $('.carousel-add-other-image').css('width','auto');
        }
    });


    //Visibility of carousel image items

    $(document).on('click', '.carousel-image-item' , function(){
        $('.carousel-image-item').removeClass('active-carousel-img-item');
        $(this).addClass('active-carousel-img-item');
    });

    $(document).on('click', '.carousel-image-item-1' , function(){
        $('.carousel-adv-item').css('display','none');
        $('.carousel-adv-section-1').css('display','block');
    });

    $(document).on('click', '.carousel-image-item-2' , function(){
        $('.carousel-adv-item').css('display','none');
        $('.carousel-adv-section-2').css('display','block')
    });

    $(document).on('click', '.carousel-image-item-3' , function(){
        $('.carousel-adv-item').css('display','none');
        $('.carousel-adv-section-3').css('display','block')
    });

    $(document).on('click', '.carousel-image-item-4' , function(){
        $('.carousel-adv-item').css('display','none');
        $('.carousel-adv-section-4').css('display','block')
    });

    $(document).on('click', '.carousel-image-item-5' , function(){
        $('.carousel-adv-item').css('display','none');
        $('.carousel-adv-section-5').css('display','block')
    });
   

    //Removing carousel image

    $(document).on('click', '.carousel-item-delete-btn' , function(e){
        e.preventDefault();

        $(this).each(function(){
            var row = $(this).parent();
            setTimeout(function() { // Simulating ajax
                var siblings = row.siblings();
                row.remove();
                siblings.each(function(index) {
                    $(this).children('.carousel-image-item-child').text(index + 1);
                    $('.carousel-image-items').children().last().addClass('active-carousel-img-item');
                    
                    if($('.carousel-image-items').children().length === 1){
                        $('.carousel-adv-item').css('display','none')
                        $('.carousel-adv-section-1').css('display','block');
                    }else {
                        $('.carousel-adv-section-1').css('display','none');
                    }

                    if($('.carousel-image-items').children().length === 2){
                        $('.carousel-adv-item').css('display','none')
                        $('.carousel-adv-section-2').css('display','block');
                    }else {
                        $('.carousel-adv-section-2').css('display','none');
                    }
                    
                    if($('.carousel-image-items').children().length === 3){
                        $('.carousel-adv-item').css('display','none')
                        $('.carousel-adv-section-3').css('display','block');
                    }else {
                        $('.carousel-adv-section-3').css('display','none');
                    }
                    
                    if($('.carousel-image-items').children().length === 4){
                        $('.carousel-adv-item').css('display','none')
                        $('.carousel-adv-section-4').css('display','block');
                    }else {
                        $('.carousel-adv-section-4').css('display','none');
                    }
                    
                    if($('.carousel-image-items').children().length === 5){
                        $('.carousel-adv-item').css('display','none')
                        $('.carousel-adv-section-5').css('display','block');
                    }else {
                        $('.carousel-adv-section-5').css('display','none');
                    }
                });
            }, 100);
        })
        
        $('.carousel-add-other-image').css({
            'opacity':'1',
            'pointer-events': 'unset'
        });

        if($('.carousel-image-item').length<3){
            $('.carousel-image-items').css('display','none');
            $('.carousel-add-other-image').css({'width':'100%','margin-top':'0'});
        }
    });


    // **Category

    //Adding other category image

    $('.category-add-other-image').click(function(){
        $('.category-image-items').css('display','flex');
        $(this).css('margin-top','0px');
        
        if($('.category-image-items').children().length === 1){
            $('.category-adv-item').css('display','none')
            $('.category-adv-section-2').css('display','block');
        }else {
            $('.category-adv-section-2').css('display','none');
        }
        
        if($('.category-image-items').children().length === 2){
            $('.category-adv-item').css('display','none')
            $('.category-adv-section-3').css('display','block');
        }else {
            $('.category-adv-section-3').css('display','none');
        }
        
        if($('.category-image-items').children().length === 3){
            $('.category-adv-item').css('display','none')
            $('.category-adv-section-4').css('display','block');
        }else {
            $('.category-adv-section-4').css('display','none');
        }
        
        if($('.category-image-items').children().length === 4){
            $('.category-adv-item').css('display','none')
            $('.category-adv-section-5').css('display','block');
        }else {
            $('.category-adv-section-5').css('display','none');
        }

        if($('.category-image-item').length<4){
            $('.category-add-other-image').css({
                'opacity':'1',
                'pointer-events': 'unset'
            });
        }else{
            $('.category-add-other-image').css({
                'opacity':'0.4',
                'pointer-events': 'none'
            });
        }

        if($('.category-image-item').length<5){

            var $categoryImgItem = $(document.createElement('div'));
            $categoryImgItem.addClass( `category-image-item category-image-item-${$('.category-image-item').length+1}`);
            var $categoryImgItemChild = $(document.createElement('div'));
            $categoryImgItemChild.addClass('category-image-item-child');
            $categoryImgItemChild.html($('.category-image-item').length+1);


            $categoryImgItem.css('position','relative');
            var $categoryItemDeleteBtn = $(document.createElement('div'));
            $categoryItemDeleteBtn.addClass(`category-item-delete-btn category-item-delete-btn-${$('.category-image-item').length+1}`);
            $categoryItemDeleteBtn.html('&#x2715');

            $('.category-image-items').append($categoryImgItem);
            $categoryImgItem.append($categoryImgItemChild);
            $categoryImgItem.append($categoryItemDeleteBtn);
            $('.category-image-item').removeClass('active-category-img-item');
            $('.category-image-item').last().addClass('active-category-img-item');
            $(document).on('mouseover', '.active-category-img-item' , function(){
                $(this).each(function() {
                    $(this).css('position','relative');
                    $(this).find('.category-item-delete-btn').css('display','flex');

                });
            });

            $(document).on('mouseleave', '.active-category-img-item' , function(){
                $(this).each(function() {
                    $(this).find('.category-item-delete-btn').css('display','none');
                });
            });
        }

        if($('.category-image-item').length>3){
            $('.category-add-other-image').css({
                'width':'100%',
                'margin-top': '10px'
            });
        }else{
            $('.category-add-other-image').css('width','auto');
        }
    });


    //Visibility of category image items

    $(document).on('click', '.category-image-item' , function(){
        $('.category-image-item').removeClass('active-category-img-item');
        $(this).addClass('active-category-img-item');
    });

    $(document).on('click', '.category-image-item-1' , function(){
        $('.category-adv-item').css('display','none');
        $('.category-adv-section-1').css('display','block');
    });

    $(document).on('click', '.category-image-item-2' , function(){
        $('.category-adv-item').css('display','none');
        $('.category-adv-section-2').css('display','block')
    });

    $(document).on('click', '.category-image-item-3' , function(){
        $('.category-adv-item').css('display','none');
        $('.category-adv-section-3').css('display','block')
    });

    $(document).on('click', '.category-image-item-4' , function(){
        $('.category-adv-item').css('display','none');
        $('.category-adv-section-4').css('display','block')
    });

    $(document).on('click', '.category-image-item-5' , function(){
        $('.category-adv-item').css('display','none');
        $('.category-adv-section-5').css('display','block')
    });
   

    //Removing category image

    $(document).on('click', '.category-item-delete-btn' , function(e){
        e.preventDefault();

        $(this).each(function(){
            var row = $(this).parent();
            setTimeout(function() { // Simulating ajax
                var siblings = row.siblings();
                row.remove();
                siblings.each(function(index) {
                    $(this).children('.category-image-item-child').text(index + 1);
                    $('.category-image-items').children().last().addClass('active-category-img-item');
                    
                    if($('.category-image-items').children().length === 1){
                        $('.category-adv-item').css('display','none')
                        $('.category-adv-section-1').css('display','block');
                    }else {
                        $('.category-adv-section-1').css('display','none');
                    }

                    if($('.category-image-items').children().length === 2){
                        $('.category-adv-item').css('display','none')
                        $('.category-adv-section-2').css('display','block');
                    }else {
                        $('.category-adv-section-2').css('display','none');
                    }
                    
                    if($('.category-image-items').children().length === 3){
                        $('.category-adv-item').css('display','none')
                        $('.category-adv-section-3').css('display','block');
                    }else {
                        $('.category-adv-section-3').css('display','none');
                    }
                    
                    if($('.category-image-items').children().length === 4){
                        $('.category-adv-item').css('display','none')
                        $('.category-adv-section-4').css('display','block');
                    }else {
                        $('.category-adv-section-4').css('display','none');
                    }
                    
                    if($('.category-image-items').children().length === 5){
                        $('.category-adv-item').css('display','none')
                        $('.category-adv-section-5').css('display','block');
                    }else {
                        $('.category-adv-section-5').css('display','none');
                    }
                });
            }, 100);
        })
        
        $('.category-add-other-image').css({
            'opacity':'1',
            'pointer-events': 'unset'
        });

        if($('.category-image-item').length<3){
            $('.category-image-items').css('display','none');
            $('.category-add-other-image').css({'width':'100%','margin-top':'0'});
        }
    });

    // $(document).on('click', '.category-image-item' , function(){

    //     $(this).each(function() {
    //         $('.category-image-item').removeClass('active-category-img-item');
    //         $(this).addClass('active-category-img-item');
    //     });
    // });
    

    // $('.category-add-other-image').click(function(){
    //     $('.category-image-items').css('display','flex');
    //     $(this).css('margin-top','0px');

    //     if($('.category-image-item').length<4){
    //         $('.category-add-other-image').css({
    //             'opacity':'1',
    //             'pointer-events': 'unset'
    //         });
    //     }else{
    //         $('.category-add-other-image').css({
    //             'opacity':'0.4',
    //             'pointer-events': 'none'
    //         });
    //     }

    //     if($('.category-image-item').length<5){

    //         var $categoryImgItem = $(document.createElement('div'));
    //         $categoryImgItem.addClass('category-image-item');
    //         var $categoryImgItemChild = $(document.createElement('div'));
    //         $categoryImgItemChild.addClass('category-image-item-child');
    //         $categoryImgItemChild.html($('.category-image-item').length+1);


    //         $categoryImgItem.css('position','relative');
    //         var $categoryItemDeleteBtn = $(document.createElement('div'));
    //         $categoryItemDeleteBtn.addClass('category-item-delete-btn');
    //         $categoryItemDeleteBtn.html('&#x2715');

    //         $('.category-image-items').append($categoryImgItem);
    //         $categoryImgItem.append($categoryImgItemChild);
    //         $categoryImgItem.append($categoryItemDeleteBtn);
    //         $('.category-image-item').removeClass('active-category-img-item');
    //         $('.category-image-item').last().addClass('active-category-img-item');
    //         $(document).on('mouseover', '.active-category-img-item' , function(){
    //             $(this).each(function() {
    //                 $(this).css('position','relative');
    //                 $(this).find('.category-item-delete-btn').css('display','flex');

    //             });

    //         });

    //         $(document).on('mouseleave', '.active-category-img-item' , function(){
    //             $(this).each(function() {
    //                 $(this).find('.category-item-delete-btn').css('display','none');
    //             });

    //         });


    //     }

    //     if($('.category-image-item').length>3){
    //         $('.category-add-other-image').css({'justify-content':'center','margin-top':'10px','width':'100%'});
    //     }else{
    //         $('.category-add-other-image').css({'justify-content':'flex-end','margin-top':'0px','width':'auto'});
    //     }
    // });

    // $(document).on('click', '.category-image-item' , function(){

    //     $(this).each(function() {
    //         $('.category-image-item').removeClass('active-category-img-item');
    //         $(this).addClass('active-category-img-item');
    //     });

    // });

    // $(document).on('click', '.category-item-delete-btn' , function(e){
    //     e.preventDefault();

    //     var row = $(this).closest('.category-image-item');
    //     setTimeout(function() { // Simulating ajax
    //         var siblings = row.siblings();
    //         row.remove();
    //         siblings.each(function(index) {
    //             $(this).children('.category-image-item-child').text(index+1);
    //             $('.category-image-items').children().last().addClass('active-category-img-item');
    //         });
    //     }, 100);

    //     $('.category-add-other-image').css({
    //         'opacity':'1',
    //         'pointer-events': 'unset'
    //     });

    //     $(this).each(function() {

    //         if($('.category-image-item').length<3){
    //             $('.category-image-items').css('display','none');
    //             $('.category-add-other-image').css({'margin-top':'0','width':'100%'});
    //         }
    //     });
    // });


   
  
    //Setting product count

    let min = 2
    let max = 8;

    $("#slider").slider({
      min:min,
      max:max
    });

    createSlider();

    function createSlider() {
      $("#scale-ruler").html("");
      let sliderHtml = "";

      let perCent=0;

      for (i = min; i <= max; i++) {

        sliderHtml = sliderHtml + "<div style='left:" + perCent*(100/(max-min)) + "%' class='scale n5s s" + i + "'><span>" + i + "</span></div>";
        perCent++
      }
      $("#scale-ruler").html(sliderHtml);
    }

    $("#slider" ).slider("value", 2 ); /* this is only an example to put the slider to 74. You can remove it.*/


    //Setting for footer social links

    $('.footer-fb-links .add-social-link').click(function(){
        if($('.footer-fb-links .footer-web-adress-part').length>0){
            $('.footer-fb-links .footer-web-adress-delete').css('display','flex');
        }
        
        if($('.footer-fb-links .footer-web-adress-part').length>2){
            $('.footer-fb-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
        }
        $(this).each(function() {
            $('.footer-fb-links .footer-social-links').append('<div class="form-group footer-web-adress-part"><label for="inputFooterUrl" class="col-form-label"><svg class="footer-url-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5441 8.45645C10.7249 7.63768 9.6142 7.17773 8.45605 7.17773C7.2979 7.17773 6.18716 7.63768 5.36805 8.45645L2.27905 11.5444C1.45993 12.3636 0.999756 13.4745 0.999756 14.6329C0.999756 15.7914 1.45993 16.9023 2.27905 17.7215C3.09818 18.5406 4.20914 19.0007 5.36755 19.0007C6.52597 19.0007 7.63693 18.5406 8.45605 17.7215L10.0001 16.1774" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.45605 11.5443C9.27516 12.3631 10.3859 12.823 11.5441 12.823C12.7022 12.823 13.8129 12.3631 14.6321 11.5443L17.7211 8.4563C18.5402 7.63718 19.0004 6.52621 19.0004 5.3678C19.0004 4.20939 18.5402 3.09842 17.7211 2.2793C16.9019 1.46018 15.791 1 14.6326 1C13.4741 1 12.3632 1.46018 11.5441 2.2793L10.0001 3.8233" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></label><input type="url" class="form-control footer-fb-url" id="inputFooterUrl" placeholder="Enter the facebook link"><div class="web-adress-delete-btn"  style="display: none;"><img src="./img/web-adress-delete-btn.svg" alt=""></div></div>');
        });
     
    });

    $('.footer-insta-links .add-social-link').click(function(){
        if($('.footer-insta-links .footer-web-adress-part').length>0){
            $('.footer-insta-links .footer-web-adress-delete').css('display','flex');
        }
        
        if($('.footer-insta-links .footer-web-adress-part').length>2){
            $('.footer-insta-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
        }
        $(this).each(function() {
            $('.footer-insta-links .footer-social-links').append('<div class="form-group footer-web-adress-part"><label for="inputFooterUrl" class="col-form-label"><svg class="footer-url-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5441 8.45645C10.7249 7.63768 9.6142 7.17773 8.45605 7.17773C7.2979 7.17773 6.18716 7.63768 5.36805 8.45645L2.27905 11.5444C1.45993 12.3636 0.999756 13.4745 0.999756 14.6329C0.999756 15.7914 1.45993 16.9023 2.27905 17.7215C3.09818 18.5406 4.20914 19.0007 5.36755 19.0007C6.52597 19.0007 7.63693 18.5406 8.45605 17.7215L10.0001 16.1774" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.45605 11.5443C9.27516 12.3631 10.3859 12.823 11.5441 12.823C12.7022 12.823 13.8129 12.3631 14.6321 11.5443L17.7211 8.4563C18.5402 7.63718 19.0004 6.52621 19.0004 5.3678C19.0004 4.20939 18.5402 3.09842 17.7211 2.2793C16.9019 1.46018 15.791 1 14.6326 1C13.4741 1 12.3632 1.46018 11.5441 2.2793L10.0001 3.8233" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></label><input type="url" class="form-control footer-fb-url" id="inputFooterUrl" placeholder="Enter the instagram link"><div class="web-adress-delete-btn"  style="display: none;"><img src="./img/web-adress-delete-btn.svg" alt=""></div></div>');
        });
     
    });

    $('.footer-twitter-links .add-social-link').click(function(){
        if($('.footer-twitter-links .footer-web-adress-part').length>0){
            $('.footer-twitter-links .footer-web-adress-delete').css('display','flex');
        }
        
        if($('.footer-twitter-links .footer-web-adress-part').length>2){
            $('.footer-twitter-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
        }
        $(this).each(function() {
            $('.footer-twitter-links .footer-social-links').append('<div class="form-group footer-web-adress-part"><label for="inputFooterUrl" class="col-form-label"><svg class="footer-url-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5441 8.45645C10.7249 7.63768 9.6142 7.17773 8.45605 7.17773C7.2979 7.17773 6.18716 7.63768 5.36805 8.45645L2.27905 11.5444C1.45993 12.3636 0.999756 13.4745 0.999756 14.6329C0.999756 15.7914 1.45993 16.9023 2.27905 17.7215C3.09818 18.5406 4.20914 19.0007 5.36755 19.0007C6.52597 19.0007 7.63693 18.5406 8.45605 17.7215L10.0001 16.1774" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.45605 11.5443C9.27516 12.3631 10.3859 12.823 11.5441 12.823C12.7022 12.823 13.8129 12.3631 14.6321 11.5443L17.7211 8.4563C18.5402 7.63718 19.0004 6.52621 19.0004 5.3678C19.0004 4.20939 18.5402 3.09842 17.7211 2.2793C16.9019 1.46018 15.791 1 14.6326 1C13.4741 1 12.3632 1.46018 11.5441 2.2793L10.0001 3.8233" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></label><input type="url" class="form-control footer-fb-url" id="inputFooterUrl" placeholder="Enter the twitter link"><div class="web-adress-delete-btn"  style="display: none;"><img src="./img/web-adress-delete-btn.svg" alt=""></div></div>');
        });
     
    });

    $('.footer-youtube-links .add-social-link').click(function(){
        if($('.footer-youtube-links .footer-web-adress-part').length>0){
            $('.footer-youtube-links .footer-web-adress-delete').css('display','flex');
        }
        
        if($('.footer-youtube-links .footer-web-adress-part').length>2){
            $('.footer-youtube-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
        }
        $(this).each(function() {
            $('.footer-youtube-links .footer-social-links').append('<div class="form-group footer-web-adress-part"><label for="inputFooterUrl" class="col-form-label"><svg class="footer-url-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5441 8.45645C10.7249 7.63768 9.6142 7.17773 8.45605 7.17773C7.2979 7.17773 6.18716 7.63768 5.36805 8.45645L2.27905 11.5444C1.45993 12.3636 0.999756 13.4745 0.999756 14.6329C0.999756 15.7914 1.45993 16.9023 2.27905 17.7215C3.09818 18.5406 4.20914 19.0007 5.36755 19.0007C6.52597 19.0007 7.63693 18.5406 8.45605 17.7215L10.0001 16.1774" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.45605 11.5443C9.27516 12.3631 10.3859 12.823 11.5441 12.823C12.7022 12.823 13.8129 12.3631 14.6321 11.5443L17.7211 8.4563C18.5402 7.63718 19.0004 6.52621 19.0004 5.3678C19.0004 4.20939 18.5402 3.09842 17.7211 2.2793C16.9019 1.46018 15.791 1 14.6326 1C13.4741 1 12.3632 1.46018 11.5441 2.2793L10.0001 3.8233" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></label><input type="url" class="form-control footer-fb-url" id="inputFooterUrl" placeholder="Enter the youtube link"><div class="web-adress-delete-btn"  style="display: none;"><img src="./img/web-adress-delete-btn.svg" alt=""></div></div>');
        });
     
    });

    $('.footer-whatsapp-links .add-social-link').click(function(){
        if($('.footer-whatsapp-links .footer-web-adress-part').length>0){
            $('.footer-whatsapp-links .footer-web-adress-delete').css('display','flex');
        }
        
        if($('.footer-whatsapp-links .footer-web-adress-part').length>2){
            $('.footer-whatsapp-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
        }
        $(this).each(function() {
            $('.footer-whatsapp-links .footer-social-links').append('<div class="form-group footer-web-adress-part"><label for="inputFooterUrl" class="col-form-label"><svg class="footer-url-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5441 8.45645C10.7249 7.63768 9.6142 7.17773 8.45605 7.17773C7.2979 7.17773 6.18716 7.63768 5.36805 8.45645L2.27905 11.5444C1.45993 12.3636 0.999756 13.4745 0.999756 14.6329C0.999756 15.7914 1.45993 16.9023 2.27905 17.7215C3.09818 18.5406 4.20914 19.0007 5.36755 19.0007C6.52597 19.0007 7.63693 18.5406 8.45605 17.7215L10.0001 16.1774" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.45605 11.5443C9.27516 12.3631 10.3859 12.823 11.5441 12.823C12.7022 12.823 13.8129 12.3631 14.6321 11.5443L17.7211 8.4563C18.5402 7.63718 19.0004 6.52621 19.0004 5.3678C19.0004 4.20939 18.5402 3.09842 17.7211 2.2793C16.9019 1.46018 15.791 1 14.6326 1C13.4741 1 12.3632 1.46018 11.5441 2.2793L10.0001 3.8233" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></label><input type="url" class="form-control footer-fb-url" id="inputFooterUrl" placeholder="Enter the whatsapp link"><div class="web-adress-delete-btn"  style="display: none;"><img src="./img/web-adress-delete-btn.svg" alt=""></div></div>');
        });
     
    });

    $('.footer-telegram-links .add-social-link').click(function(){
        if($('.footer-telegram-links .footer-web-adress-part').length>0){
            $('.footer-telegram-links .footer-web-adress-delete').css('display','flex');
        }
        
        if($('.footer-telegram-links .footer-web-adress-part').length>2){
            $('.footer-telegram-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
        }
        $(this).each(function() {
            $('.footer-telegram-links .footer-social-links').append('<div class="form-group footer-web-adress-part"><label for="inputFooterUrl" class="col-form-label"><svg class="footer-url-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5441 8.45645C10.7249 7.63768 9.6142 7.17773 8.45605 7.17773C7.2979 7.17773 6.18716 7.63768 5.36805 8.45645L2.27905 11.5444C1.45993 12.3636 0.999756 13.4745 0.999756 14.6329C0.999756 15.7914 1.45993 16.9023 2.27905 17.7215C3.09818 18.5406 4.20914 19.0007 5.36755 19.0007C6.52597 19.0007 7.63693 18.5406 8.45605 17.7215L10.0001 16.1774" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.45605 11.5443C9.27516 12.3631 10.3859 12.823 11.5441 12.823C12.7022 12.823 13.8129 12.3631 14.6321 11.5443L17.7211 8.4563C18.5402 7.63718 19.0004 6.52621 19.0004 5.3678C19.0004 4.20939 18.5402 3.09842 17.7211 2.2793C16.9019 1.46018 15.791 1 14.6326 1C13.4741 1 12.3632 1.46018 11.5441 2.2793L10.0001 3.8233" stroke="#6B6060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></label><input type="url" class="form-control footer-fb-url" id="inputFooterUrl" placeholder="Enter the telegram link"><div class="web-adress-delete-btn"  style="display: none;"><img src="./img/web-adress-delete-btn.svg" alt=""></div></div>');
        });
     
    });

    $('.footer-social-icon').click(function(){
        $(this).each(function() {
            $('.footer-social-icon i').removeClass('active-footer-sm');
            $(this).children().addClass('active-footer-sm');
        });
    })

    $('#footer-fb-icon').click(function(){
        $('. footer-link').css('display','none');
        $('.footer-fb-links').css('display','block');
    });

    $('#footer-insta-icon').click(function(){
        $('. footer-link').css('display','none');
        $('.footer-insta-links').css('display','block');
    });

    $('#footer-twitter-icon').click(function(){
        $('. footer-link').css('display','none');
        $('.footer-twitter-links').css('display','block');
    });

    $('#footer-youtube-icon').click(function(){
        $('. footer-link').css('display','none');
        $('.footer-youtube-links').css('display','block');
    });

    $('#footer-whatsapp-icon').click(function(){
        $('. footer-link').css('display','none');
        $('.footer-whatsapp-links').css('display','block');
    });

    $('#footer-telegram-icon').click(function(){
        $('. footer-link').css('display','none');
        $('.footer-telegram-links').css('display','block');
    });

    
    $('.footer-fb-links .footer-web-adress-delete>div').click(function(){
        $('.footer-fb-links .footer-web-adress-delete').css('display','none');
        $( ".footer-fb-links .web-adress-delete-btn").css('display','block');
        if($('.footer-fb-links .footer-web-adress-part').length<1){
            $('.footer-fb-links .footer-web-adress-delete').css('display','none');
        }
        $('.footer-fb-links .footer-deleting-cancel').css('display','flex');
        $('.footer-fb-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
    });

    $('.footer-insta-links .footer-web-adress-delete>div').click(function(){
        $('.footer-insta-links .footer-web-adress-delete').css('display','none');
        $( ".footer-insta-links .web-adress-delete-btn").css('display','block');
        if($('.footer-insta-links .footer-web-adress-part').length<1){
            $('.footer-insta-links .footer-web-adress-delete').css('display','none');
        }
        $('.footer-insta-links .footer-deleting-cancel').css('display','flex');
        $('.footer-insta-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
    });

    $('.footer-twitter-links .footer-web-adress-delete>div').click(function(){
        $('.footer-twitter-links .footer-web-adress-delete').css('display','none');
        $( ".footer-twitter-links .web-adress-delete-btn").css('display','block');
        if($('.footer-twitter-links .footer-web-adress-part').length<1){
            $('.footer-twitter-links .footer-web-adress-delete').css('display','none');
        }
        $('.footer-twitter-links .footer-deleting-cancel').css('display','flex');
        $('.footer-twitter-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
    });

    $('.footer-youtube-links .footer-web-adress-delete>div').click(function(){
        $('.footer-youtube-links .footer-web-adress-delete').css('display','none');
        $( ".footer-youtube-links .web-adress-delete-btn").css('display','block');
        if($('.footer-youtube-links .footer-web-adress-part').length<1){
            $('.footer-youtube-links .footer-web-adress-delete').css('display','none');
        }
        $('.footer-youtube-links .footer-deleting-cancel').css('display','flex');
        $('.footer-youtube-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
    });

    $('.footer-whatsapp-links .footer-web-adress-delete>div').click(function(){
        $('.footer-whatsapp-links .footer-web-adress-delete').css('display','none');
        $( ".footer-whatsapp-links .web-adress-delete-btn").css('display','block');
        if($('.footer-whatsapp-links .footer-web-adress-part').length<1){
            $('.footer-whatsapp-links .footer-web-adress-delete').css('display','none');
        }
        $('.footer-whatsapp-links .footer-deleting-cancel').css('display','flex');
        $('.footer-whatsapp-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
    });

    $('.footer-telegram-links .footer-web-adress-delete>div').click(function(){
        $('.footer-telegram-links .footer-web-adress-delete').css('display','none');
        $( ".footer-telegram-links .web-adress-delete-btn").css('display','block');
        if($('.footer-telegram-links .footer-web-adress-part').length<1){
            $('.footer-telegram-links .footer-web-adress-delete').css('display','none');
        }
        $('.footer-telegram-links .footer-deleting-cancel').css('display','flex');
        $('.footer-telegram-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});
    });

    $('.footer-fb-links .footer-deleting-cancel>div').click(function(){
        $('.footer-fb-links .footer-deleting-cancel').css('display','none');
        $( ".footer-fb-links .web-adress-delete-btn").css('display','none');
        $('.footer-fb-links .footer-web-adress-delete').css('display','flex');
        $('.footer-fb-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
    });

    $('.footer-insta-links .footer-deleting-cancel>div').click(function(){
        $('.footer-insta-links .footer-deleting-cancel').css('display','none');
        $( ".footer-insta-links .web-adress-delete-btn").css('display','none');
        $('.footer-insta-links .footer-web-adress-delete').css('display','flex');
        $('.footer-insta-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
    });

    $('.footer-twitter-links .footer-deleting-cancel>div').click(function(){
        $('.footer-twitter-links .footer-deleting-cancel').css('display','none');
        $( ".footer-twitter-links .web-adress-delete-btn").css('display','none');
        $('.footer-twitter-links .footer-web-adress-delete').css('display','flex');
        $('.footer-twitter-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
    });

    $('.footer-youtube-links .footer-deleting-cancel>div').click(function(){
        $('.footer-youtube-links .footer-deleting-cancel').css('display','none');
        $( ".footer-youtube-links .web-adress-delete-btn").css('display','none');
        $('.footer-youtube-links .footer-web-adress-delete').css('display','flex');
        $('.footer-youtube-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
    });

    $('.footer-whatsapp-links .footer-deleting-cancel>div').click(function(){
        $('.footer-whatsapp-links .footer-deleting-cancel').css('display','none');
        $( ".footer-whatsapp-links .web-adress-delete-btn").css('display','none');
        $('.footer-whatsapp-links .footer-web-adress-delete').css('display','flex');
        $('.footer-whatsapp-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
    });

    $('.footer-telegram-links .footer-deleting-cancel>div').click(function(){
        $('.footer-telegram-links .footer-deleting-cancel').css('display','none');
        $( ".footer-telegram-links .web-adress-delete-btn").css('display','none');
        $('.footer-telegram-links .footer-web-adress-delete').css('display','flex');
        $('.footer-telegram-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
    });

    $(document).on('click', '.footer-fb-links .web-adress-delete-btn' , function() {
        $(this).each(function() {

            $(this).parent().remove();
        });

        $('.footer-fb-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});

        if($('.footer-fb-links .footer-web-adress-part').length<2){
            $('.footer-fb-links .footer-web-adress-delete').css('display','none');
            $('.footer-fb-links .footer-deleting-cancel').css('display','none');
            $('.footer-fb-links .web-adress-delete-btn').css('display','none');
            $('.footer-fb-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
        }
    });

    $(document).on('click', '.footer-insta-links .web-adress-delete-btn' , function() {
        $(this).each(function() {

            $(this).parent().remove();
        });

        $('.footer-insta-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});

        if($('.footer-insta-links .footer-web-adress-part').length<2){
            $('.footer-insta-links .footer-web-adress-delete').css('display','none');
            $('.footer-insta-links .footer-deleting-cancel').css('display','none');
            $('.footer-insta-links .web-adress-delete-btn').css('display','none');
            $('.footer-insta-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
        }
    });

    $(document).on('click', '.footer-twitter-links .web-adress-delete-btn' , function() {
        $(this).each(function() {

            $(this).parent().remove();
        });

        $('.footer-twitter-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});

        if($('.footer-twitter-links .footer-web-adress-part').length<2){
            $('.footer-twitter-links .footer-web-adress-delete').css('display','none');
            $('.footer-twitter-links .footer-deleting-cancel').css('display','none');
            $('.footer-twitter-links .web-adress-delete-btn').css('display','none');
            $('.footer-twitter-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
        }
    });

    $(document).on('click', '.footer-youtube-links .web-adress-delete-btn' , function() {
        $(this).each(function() {

            $(this).parent().remove();
        });

        $('.footer-youtube-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});

        if($('.footer-youtube-links .footer-web-adress-part').length<2){
            $('.footer-youtube-links .footer-web-adress-delete').css('display','none');
            $('.footer-youtube-links .footer-deleting-cancel').css('display','none');
            $('.footer-youtube-links .web-adress-delete-btn').css('display','none');
            $('.footer-youtube-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
        }
    });

    $(document).on('click', '.footer-whatsapp-links .web-adress-delete-btn' , function() {
        $(this).each(function() {

            $(this).parent().remove();
        });

        $('.footer-whatsapp-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});

        if($('.footer-whatsapp-links .footer-web-adress-part').length<2){
            $('.footer-whatsapp-links .footer-web-adress-delete').css('display','none');
            $('.footer-whatsapp-links .footer-deleting-cancel').css('display','none');
            $('.footer-whatsapp-links .web-adress-delete-btn').css('display','none');
            $('.footer-whatsapp-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
        }
    });

    $(document).on('click', '.footer-telegram-links .web-adress-delete-btn' , function() {
        $(this).each(function() {

            $(this).parent().remove();
        });

        $('.footer-telegram-links .footer-add-social-link').css({'pointer-events':'none','opacity':'0.2'});

        if($('.footer-telegram-links .footer-web-adress-part').length<2){
            $('.footer-telegram-links .footer-web-adress-delete').css('display','none');
            $('.footer-telegram-links .footer-deleting-cancel').css('display','none');
            $('.footer-telegram-links .web-adress-delete-btn').css('display','none');
            $('.footer-telegram-links .footer-add-social-link').css({'pointer-events':'unset','opacity':'1'});
        }
    });


   
    //Removing image in media

    $(document).on('click', '.remove-media-img' , function() {

        $(this).each(function() {

            $(this).parent().remove();
            var $uploadMediaImgItemLength = $(".media-upload-imgs > div").length;
            $('.current-media-count').text($uploadMediaImgItemLength-1);

            if($(".media-upload-imgs > div").length < 2){
                $('.upload-media-upfile-part').css('display','none');
                $('.media-upfile-part').css('display','block');
            }
        });
    });

     

    //Setting image from media

    $(document).on('click', '.choose-media-item' , function() {
        $('.section-icon').css('background','rgba(0, 87, 225, 0.1)');
        $('.add-section-icon').css('background','inherit');
        $('.media-icon').css('background','inherit');
        $('.section-black-icon').css('display','none');
        $('.section-blue-icon').css('display','block');
        $('.add-section-purple-icon').css('display','none');
        $('.add-section-black-icon').css('display','block');
        $('.media-red-icon').css('display','none');
        $('.media-black-icon').css('display','block');
        $('.sections-part').css('display','block');
        $('.add-sections-part').css('display','none');
        $('.media-part').css('display','none');
          
        return false
    });

    $(document).on('click', '.logo-media-item' , function() {
        $('.upload-logo-upfile-part').css('display','block');
        $('.logo-upfile-part').css('display','none');


        $(this).each(function() {
            $('.upload-logo-upfile-part').css('display','block');
            $('.logo-upfile-part').css('display','none');
            var $choosingMediaImgSrc = $(this).first().attr('src').toDataURL("image/png");
            $('#upload-logo-image').attr('src', $choosingMediaImgSrc);

          



        });

        return false
    });

    $(document).on('click', '.favicon-media-item' , function() {
        $('.upload-favicon-upfile-part').css('display','block');
        $('.favicon-upfile-part').css('display','none');


        $(this).each(function() {
            $('.upload-favicon-upfile-part').css('display','block');
            $('.logo-favicon-part').css('display','none');
            var $choosingMediaImgSrc = $(this).first().attr('src').toDataURL("image/png");
            $('#upload-favicon-image').attr('src', $choosingMediaImgSrc);

        });

        return false
    });

    $(document).on('click', '.carousel-media-item' , function() {
        $('.upload-carousel-upfile-part').css('display','block');
        $('.carousel-upfile-part').css('display','none');


        $(this).each(function() {
            $('.upload-carousel-upfile-part').css('display','block');
            $('.logo-carousel-part').css('display','none');
            var $choosingMediaImgSrc = $(this).first().attr('src').toDataURL("image/png");
            $('#upload-carousel-image').attr('src', $choosingMediaImgSrc);

        });

        return false
    });

    $(document).on('click', '.category-media-item' , function() {
        $('.upload-category-upfile-part').css('display','block');
        $('.category-upfile-part').css('display','none');


        $(this).each(function() {
            $('.upload-category-upfile-part').css('display','block');
            $('.logo-category-part').css('display','none');
            var $choosingMediaImgSrc = $(this).first().attr('src').toDataURL("image/png");
            $('#upload-category-image').attr('src', $choosingMediaImgSrc);

        });

        return false
    });

    $(document).on('click', '.card-media-item' , function() {
        $('.upload-card-upfile-part').css('display','block');
        $('.card-upfile-part').css('display','none');


        $(this).each(function() {
            $('.upload-card-upfile-part').css('display','block');
            $('.logo-card-part').css('display','none');
            var $choosingMediaImgSrc = $(this).first().attr('src').toDataURL("image/png");
            $('#upload-card-image').attr('src', $choosingMediaImgSrc);

        });

        return false
    });



    /** MENU BUILDER **/

    $('.choose-menu-target').click(function(e){
        $(this).each(function(){
            e.preventDefault();
            $(this).parent().attr('name',$(this).attr('value'));
            activeMenuTarget();
            
        })
    })

    function activeMenuTarget (){
        let currentTargetValue = $('.choose-menu-target').parent().attr('name');
        let TargetItem = $('.choose-menu-target').parent().find("div[value='" + currentTargetValue + "']")
        $('.choose-menu-target').removeClass('active-menu-target');
        TargetItem.addClass('active-menu-target');
    }

    activeMenuTarget()

    // Get menu builder

    $('.edit-menu-text').click(function(){
        $(this).parent().parent().hide();
        $('.menu-builder').show();
    })

    $('.menu-upfile').change(function(e){
        e.preventDefault();
        var $menuImgInput = $(this);
    
        var input = this;
        var url = $(this).val();
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg"))
        {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#menu-image').attr('src', e.target.result);
                $('.menu-upfile').attr('value', e.target.result)
                return false
            }
        reader.readAsDataURL(input.files[0]);
        } 
        
    })

    
    

    //Get back header section

    $('.back-header-section').click(function(){
        $(this).parent().hide();
        $(this).parent().parent().children().last().show();
    })

     // Handles opening nested lists

     $.fn.iconOpen = function(setting){
        this.removeClass('sortableListsClosed').addClass('sortableListsOpen');
        this.children('ul').css('display', 'block');
        var opener = this.children('div').children('.sortableListsOpener').first();
        if (setting.opener.as === 'html'){
            opener.html(setting.opener.close);
        } else if (setting.opener.as === 'class') {
            opener.addClass(setting.opener.close).removeClass(setting.opener.open);
        }
    };


    // Handles closing nested lists
    $.fn.iconClose = function(setting) {
        this.removeClass('sortableListsOpen').addClass('sortableListsClosed');
        this.children('ul').css('display', 'none');
        var opener = this.children('div').children('.sortableListsOpener').first();
        if (setting.opener.as === 'html') {
            opener.html(setting.opener.open);
        } else if (setting.opener.as === 'class') {
            opener.addClass(setting.opener.open).removeClass(setting.opener.close);
        }
    };
    

    // Update the buttons at the nested list (the main <ul>).
    $.fn.updateButtons = function (depth){
        var level = (typeof depth === 'undefined') ? 0 : depth;
        var removefirst = ['Up', 'In'];
        var removelast = ['Down'];
        if (level===0){
            removefirst.push('Out');
            removelast.push('Out');
            $(this).children('li').hideButtons(['Out']);
        }
        $(this).children('li').each(function () {
            var $li = $(this);
            var $ul = $li.children('ul');
            if ($ul.length > 0) {
                $ul.updateButtons(level + 1);
            }
        }); 
        $(this).children('li:first').hideButtons(removefirst);
        $(this).children('li:last').hideButtons(removelast);
    };

    // Hide the buttons at the item <li>
    $.fn.hideButtons = function(buttons){
        for(var i = 0; i<buttons.length; i++){
            $(this).find('.btn-group:first').children(".btn"+buttons[i]).hide();
        }
    };

    
});


/* Options menu editor */

function MenuEditor(idSelector, options) {
    var $main = $("#" + idSelector).data("level", "0");
    var settings = {
        labelEdit: '<i class="fas fa-pencil-alt clickable"></i>',
        labelRemove: '<i class="fas fa-trash-alt clickable"></i>',
        iconPicker: { cols: 4, rows: 4, footer: false, iconset: "fontawesome5", arrowPrevIconClass: 'fas fa-angle-left',
        arrowNextIconClass: 'fas fa-angle-right', arrowClass: '', searchText: 'Search...'},
        listOptions: { 
            opener: {
                as: 'html',
                close: '<svg class="close-menu-item" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H13" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
                open: '<svg class="open-menu-item" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H13" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M7.02808 12.9999L7.00003 0.999971" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
                openerCss: {'float': 'none'},
            },
            ignoreClass: 'clickable',
            listsCss: {"padding-top": "10px"},
            complete: function (cEl) {
                MenuEditor.updateButtons($main);
                return true;
            },
        }
    };
    $.extend(true, settings, options);
    var itemEditing = null;
    var $form = null;
    var $updateButton = null;
    var iconPickerOpt = settings.iconPicker;
    var options = settings.listOptions;
    var iconPicker = $('#'+idSelector+'_icon').iconpicker(iconPickerOpt);



    /* EVENTS */
    iconPicker.on('change', function (e) {
        $form.find("[name=icon]").val(e.icon);
    });

    $main.on('click', '.btnRemove', function (e) {
        e.preventDefault();
        var list = $(this).closest('ul');
            $(this).closest('li').remove();
            var isMainContainer = false;
            if (typeof list.attr('id') !== 'undefined') {
                isMainContainer = (list.attr('id').toString() === idSelector);
            }
            if ((!list.children().length) && (!isMainContainer)) {
                list.prev('div').children('.sortableListsOpener').first().remove();
                list.remove();
            }
            MenuEditor.updateButtons($main);

            if ($('.sortableLists>li').length > 0) {
                $('.menu-design').show();
            }else{
                $('.menu-design').hide();
            }
    });

    $main.on('click', '.btnEdit', function (e) {
        e.preventDefault();
        itemEditing = $(this).closest('li');
        editItem(itemEditing);
    });

    $main.on('click', '.btnOut', function (e) {
        e.preventDefault();
        var list = $(this).closest('ul');
        var $li = $(this).closest('li');
        $li.addClass('ui-state-default');
        var $liParent = $li.closest('ul').closest('li');
        $liParent.after($li);
        if (list.children().length <= 0) {
            list.prev('div').children('.sortableListsOpener').first().remove();
            list.remove();
        }
        MenuEditor.updateButtons($main);
    });

    $main.on('click', '.btnIn', function (e) {
        e.preventDefault();
        var $li = $(this).closest('li');
        $li.removeClass('ui-state-default');
        var $prev = $li.prev('li');
      
        if ($prev.length > 0) {
            var $ul = $prev.children('ul');
            if ($ul.length > 0)
                $ul.append($li);
            else {
                var $ul = $('<ul>').addClass('pl-0').css('padding-top', '10px');
                $prev.append($ul);
                $ul.append($li);
                $prev.addClass('sortableListsOpen');
                TOpener($prev);
            }
        }
        MenuEditor.updateButtons($main);
    });

    
    // Edit menu list items

    function editItem($item) {
        var data = $item.data();
        $.each(data, function (p, v) {
            $form.find("[name=" + p + "]").val(v);
        });
        $form.find(".item-menu").first().focus();
        if (data.hasOwnProperty('icon')) {
            iconPicker.iconpicker('setIcon', data.icon);
        } else{
            iconPicker.iconpicker('setIcon', 'empty');
        }
        $updateButton.removeAttr('disabled');
        $updateButton.css('opacity', '1');
    }


    // Reset the form values

    function resetForm() {
        $form[0].reset();
        iconPicker = iconPicker.iconpicker(iconPickerOpt);
        iconPicker.iconpicker('setIcon', 'empty');
        $updateButton.attr('disabled', true);
        $updateButton.css('opacity', '0.4');
        itemEditing = null;
        $('#menu-image').attr('src','');
    }


    // Create clickable button

    function TButton(attr) {
        return $("<a>").addClass(attr.classCss).addClass('clickable').attr("href", "#").html(attr.text);
    }

    // Set the menu list item buttons

    function TButtonGroup() {
        var $divbtn = $('<div>').addClass('btn-group float-right');
        var $btnEdit = TButton({classCss: 'btn btnEdit', text: settings.labelEdit});
        var $btnRemv = TButton({classCss: 'btn btnRemove', text: settings.labelRemove});
        var $btnOut = TButton({classCss: 'btn btnOut btnMove', text: '<svg class="menu-down-placement clickable" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8335 11.8333L10.6668 16L6.50016 11.8333" stroke="#1C2A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.6667 16V9.33333C10.6667 4.73083 6.93591 1 2.33341 1H1.50008" stroke="#1C2A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'});
        var $btnIn = TButton({classCss: 'btn btnIn btnMove', text: '<svg class="menu-up-placement clickable" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3333 5.16669L10.1666 1.00002L5.99992 5.16669" stroke="#1C2A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.1665 1V7.66667C10.1665 12.2692 6.43567 16 1.83317 16H0.999837" stroke="#1C2A33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'});
        $divbtn.append($btnIn).append($btnOut).append($btnEdit).append($btnRemv);
        return $divbtn;
    }


    //Open and close menu list item which has a child

    function TOpener(li){
        var opener = $('<span>').addClass('sortableListsOpener ' + options.opener.openerClass).css(options.opener.openerCss)
                .on('mousedown touchstart', function (e){
                    var li = $(this).closest('li');
                    if (li.hasClass('sortableListsClosed')) {
                        li.iconOpen(options);
                    } else {
                        li.iconClose(options);
                    }
                    return false; // Prevent default
                });
        opener.prependTo(li.children('div').first());
        if ( !li.hasClass('sortableListsOpen') ) {
            li.iconClose(options);
        } else {
            li.iconOpen(options);
        }
    }


    /* PUBLIC METHODS */
    this.setForm = function(form){
        $form = form;
    };

    this.getForm = function(){
        return $form;
    };

    this.setUpdateButton = function($btn) {
        $updateButton = $btn;
        $updateButton.attr('disabled', true);
        $updateButton.css('opacity', '0.4');
        itemEditing = null;
    };

    this.getUpdateButton = function(){
        return $updateButton;
    };

    this.getCurrentItem = function(){
        return itemEditing;
    };

    
    // Update list items

    this.update = function(){
        var $cEl = this.getCurrentItem();
        if ($cEl===null){
            return;
        }
        var oldIcon = $cEl.data('icon');
        $form.find('.item-menu').each(function() {
            $cEl.data($(this).attr('name'), $(this).val());
        });
        $cEl.children().children('i').removeClass(oldIcon).addClass($cEl.data('icon'));
        $cEl.find('span.txt').first().text($cEl.data('text'));
        resetForm();
    };
   

    // Add list item to menu

    this.add = function(){
        var data = {};
        $form.find('.item-menu').each(function() {
            data[$(this).attr('name')] = $(this).val();
        });
        var btnGroup = TButtonGroup();
        var textItem = $('<span>').addClass('txt').text(data.text);
        var iconItem = $('<i>').addClass(data.icon);
        var menuImgInput = $('<input>').attr('type','hidden');
        

        var div = $('<div>').css({'display':'flex', 'align-items':'center'}).append(iconItem).append("&nbsp;").append(textItem).append(btnGroup).append(menuImgInput);
        var $li = $("<li>").data(data);
        $('.menu-design').show();

        $li.addClass('list-group-item').append(div);
        $main.append($li);
        MenuEditor.updateButtons($main);
        resetForm();
    };

};

// Update the buttons on the list. Only the buttons 'In', 'Out'
MenuEditor.updateButtons = function($mainList) {
    $mainList.find('.btnMove').show();
    $mainList.updateButtons();
};


