var transacoes = [
    {data: 'Jubiscleuda', valor: 'Sim', emprestimo:'100', status:'Aniversario proximo'},
    {data: 'Ferdinanda', valor: 'Não', emprestimo:'0', status:'Nada'},
    {data: 'Borbus', valor: 'não', emprestimo:'0', status:'Nada'},
    {data: 'Jubiscleuda', valor: 'Sim', emprestimo:'100', status:'Aniversario proximo'},
    {data: 'Jubiscleuda', valor: 'Sim', emprestimo:'100', status:'Aniversario proximo'},

];

function preencherDadosArray()
{
    var idGrid = document.getElementById('gridPrincipal');
    transacoes.forEach(
    function(transacao)
    {
        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = transacao.data;
        idGrid.appendChild(DivDataTransacao);

        var DivValor= document.createElement('div');
        DivValor.classList.add('grid-item');
        DivValor.textContent = transacao.valor;
        idGrid.appendChild(DivValor);

        var DivTipoTransacao = document.createElement('div');
        DivTipoTransacao.classList.add('grid-item');
        DivTipoTransacao.textContent = transacao.emprestimo;
        idGrid.appendChild(DivTipoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.status
        idGrid.appendChild(DivDescricaoTransacao);
    }
    );
}

preencherDadosArray();