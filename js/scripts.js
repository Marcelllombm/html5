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

    $(function(){
    // SELETOR, EVENTO, CALBACK, AÇÃO
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

    
