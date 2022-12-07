function showFormacoes() {
api = 'http://127.0.0.1:3071'


$(document).ready(() => {
    users.list();
});
}


var users = {
    
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += '<div class="title">' + element.Curso + " | " + element.Ano + '</div>';
                        tx += element.Descricao + '<p>';
                        tx += '<div class="actions">';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};