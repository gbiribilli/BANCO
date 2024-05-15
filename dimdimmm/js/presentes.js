var transacoes = [
    {data: '30/03/2020', valor: 69, emprestimo:'0', status:'Devendo o Cerasa'},
    {data: '24/06/2021', valor: 600, emprestimo:'1000', status:'Precisando de empréstimo'},
    {data: '14/09/2022', valor: 132, emprestimo:'1500', status:'Devendo a mãe'},
    {data: '23/12/2022', valor: 5, emprestimo:'10', status:'Na linha'},
    {data: '12/10/2023', valor: 123, emprestimo:'35', status:'Na linha'},
    {data: '19/05/2023', valor: 11111, emprestimo:'200', status:'Devendo'},
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