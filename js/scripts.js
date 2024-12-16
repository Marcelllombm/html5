    document.addEventListener('DOMContentLoaded', (event) => {
        // Adiciona a data atual ao elemento <time>
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0]
        const displayDate = currentDate.toLocaleDateString('pt-BR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' });

        const timeElements = document.querySelectorAll('.currentDate');

        timeElements.forEach(timeElement =>{
            timeElement.setAttribute('datetime', formattedDate);
            timeElement.textContent = displayDate;
        })
    });

       // SELETOR, EVENTO, CALBACK, AÇÃO
    $(function(){
  
        $('.j_background_red').click(function(){
            // let text = $(this).text()
            // alert(text)
            $("#title").css({
                'background':"red",
                'color': 'white',
                'width': '50%',
                'padding': '10px'
            })
        })

        $('.j_background_blue').click(function(){
            $('#title').css({
                'background':'blue',
                'color': 'white',
                'width': '50%',
                'padding': '10px'
            })
        })

        $('a[title="UpInside Treinamento"]').click(function(){
            $(this).text($(this).attr('title'));

            return false;
        })

        $('.j_mouseover').mouseenter(function(){
            alert('Passou o mouse no H1. Seu texto é ' + $(this).text())
            $(this).css({
                'color': 'blue',
                'width': '30%',

            })
        })

        $('.j_keyup').keyup(function(){
            let texto = $(this).val();
            $('.j_empresa').text(texto)
        })
      
        
    });

    // SELETOR, EFEITO, CALBACK, AÇÃO
    $(function(){  
         $('.j_effects_a').fadeOut(3000,function(){
            alert('Fade')
         })


         $('.j_deletar').click(function(){
           // deletaPost($(this).attr("rel"));
          // location.reload();
            location.href = "https://www.google.com";
            return false;
         })

        $(window).on('load', function(){

            let tempo =  setInterval(function(){
                $('.j_deletar').fadeToggle();
                }, 200);

                
            $('.j_deletar').click(function(){
                clearInterval(tempo)
            })
           
        })
    

         function deletaPost(postId){
            let alerta = confirm("tem certeza que quer deletar");
            if(alerta === true){
                $('#' + postId).fadeOut();
                alert("Post removido com sucesso!!!")
            }else {
                alert("NO")
            }
         }
    })