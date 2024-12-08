    document.addEventListener('DOMContentLoaded', (event) => {
        // Adiciona a data atual ao elemento <time>
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0]
        const displayDate = currentDate.toLocaleDateString('pt-BR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' });

         const timeElement = document.getElementById('currentDate');
         timeElement.setAttribute('datetime', formattedDate); 
         timeElement.textContent = displayDate;        
    });
