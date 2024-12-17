$(function(){
    // DESLIZA O MENU
    $('.main_menu a[class!="special"]').click(function(){
        let goto = $('.' + $(this).attr('href').replace("#","")).position().top;
        $('html, body').animate({scrollTop: goto -  $('.main_header').outerHeight() }, 1000)
        return false;
    })

    // SUSPENDE MENU
    $(window).scroll(function(){
        if($(this).scrollTop() > $('.main_header').outerHeight() + 150){
            $('body').css('padding-top',$('.main_header').outerHeight() )
            $('.main_header').addClass('main_header_fixed')
            $('.j_back').fadeIn(500)
        }else{
            $('body').css('padding-top', '0'),
            $('.main_header').removeClass('main_header_fixed')
            $('.j_back').fadeOut(500)
        }
    })

    // BACK TOPO
    $('.j_back').click(function(){
        $('html, body').animate({scrollTop: 0 }, 1000)
    })
    // FORM SUBMIT

        // SELETOR, EVENTO, CALLBACK, AÇÃO
        $('.j_formsubmit').submit(function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário
            
            // Obtém os dados do formulário
            const formData = $(this).serializeArray();
            let formDetails = '';
            
            formData.forEach(function(item) {
                formDetails += `${item.name}: ${item.value}\n`;
            });
            
            // Exibe um alert com os dados do formulário
            alert('Dados do Formulário:\n' + formDetails);
            
            // Realiza a requisição AJAX
            $.ajax({
                beforeSend: function() {
                    $('.form_load').fadeIn();
                },
                success: function() {
                    $('.form_load').fadeOut();
                    // Adicione um alert de sucesso após o envio do AJAX
                    alert('Formulário enviado com sucesso!');
                }
            });
    
            return false;
        });
    
    
})