const url = '/sobre';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let infosPessoais = data;
    let saida = '';
    infosPessoais.map(function(sobre) {
      saida += '<center><p style="margin-top: 100px;"><b style="font-size: 15px;">SOBRE MIM</b><br><hr color="#FFFFFF">'+ `<img src="imagens/map-icon.png" width="20px" style="margin-right: 20px;">${sobre.Endereco}<p>` + `<img src="imagens/phone-icon.png" width="20px" style="margin-right: 20px;">${sobre.Telefone}<p>` + `<img src="imagens/mail-icon.png" width="20px" style="margin-right: 20px;">${sobre.Email}<p>` + `${sobre.Apresentacao}<br>` + '</center></p>';
    });
    document.getElementById('sobre').innerHTML = saida;
  })
  .catch(function(error) {
    console.log(error);
  });