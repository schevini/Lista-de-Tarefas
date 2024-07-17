$(document).ready(function() {

    // Adicionar tarefa
    $('#taskBtn').on('click', function() {
        const tarefaText = $('#taskInput').val();
        if(tarefaText.length > 0) addTarefa(tarefaText)
        $('#taskInput').val('');
        
    });

    //Função para adicionar tarefa
    function addTarefa(text) {
        $('#taskList').append('<li>' + text + '</li>');
    }

    //Marcar/desmarcar tarefa 
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    })

    //Remover tarefa
    $(document).on('click', 'span', function(e) {
        e.stopPropagation();
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        })
    })
    
})