    $(document).ready(function(){

        var currentFloor=2;
        var counterUp=$('.counter-up');
        var counterDown=$('.counter-down');
        var floorPath=$('.home-image path');
        var flatPath=$('.flats path');
        var flatLink=$('.flat-link');
        var currentFlat=1;
        var modal=$('.modal');
        var modalCloseButton=$('.modal-close-button');
        var veiwFlatsButton=$('.view-flats');

        floorPath.on('mouseover', function(){
            floorPath.removeClass('current-floor');
            currentFloor=($(this).attr('data-floor'));
            $('.counter').text(currentFloor);
        });

        flatPath.on('mouseover', function(){
            currentFlat=($(this).attr('data-flat'));
            flatLink.removeClass('active-flat-link');
            $(`.flat-link[data-flat='${currentFlat}']`).addClass('active-flat-link');
        });

        flatPath.on('mouseleave', function(){
            flatLink.removeClass('active-flat-link');
        });
        
        flatLink.on('mouseover', function(){
            currentFlat=($(this).attr('data-flat'));
            flatPath.removeClass('active-flat');
            $(`.flats path[data-flat='${currentFlat}']`).addClass('active-flat');
        });

        flatLink.on('mouseleave', function(){
            flatPath.removeClass('active-flat');
        });

        floorPath.on('click',()=>{
            toggleModal();
            renderFlatsNumber();
        });

        modalCloseButton.on('click', toggleModal);

        veiwFlatsButton.on('click',()=>{
            toggleModal(); 
            renderFlatsNumber();
        });

        counterUp.on('click', function(){
            if (currentFloor<18){
                currentFloor++;
                var usCurrentFloor=currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping:false});
                $('.counter').text(usCurrentFloor);
                floorPath.removeClass('current-floor');
                $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
            }
        });

        counterDown.on('click', function(){
            if (currentFloor>2){
                currentFloor--;
                var usCurrentFloor=currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping:false});
                $('.counter').text(usCurrentFloor);
                floorPath.removeClass('current-floor');
                $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
            }
        });

        function toggleModal(){
            modal.toggleClass('is-open');
        };
        function renderFlatsNumber(){
            $('.flat-number').each(
                (index,item)=>{
                    var currentFloorFlat=(+currentFloor).toString();
                    $(item).text(currentFloorFlat.concat(+index));
                }
            );
        }
    });
