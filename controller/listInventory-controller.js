import { inventoryService } from '../service/inventory-service.js'

const newLine = (name, qtd, id, weight) =>  { 
  const linhaNovoCliente = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td>${name}</td>
                  <td>${qtd}</td>
                  <td>${weight}</td>
                  <td>
                      <ul class="table__buttons-control">
                          <li><a href="../pages/edit_product.html?id=${id}" class="button-simple button-simple--edit">Editar</a></li>
                          <li><button class="button-simple button-simple--delete" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoCliente.innerHTML = conteudo
  linhaNovoCliente.dataset.id = id
  return linhaNovoCliente
}


const tabela = document.querySelector('[data-table]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'button-simple button-simple--delete'
    if(ehBotaoDeDeleta){
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await inventoryService.removeProduct(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href="../pages/error.html"
        }
    }
})


const render = async () =>  {
    try {
        const listaClientes = await inventoryService.listProduct()
        listaClientes.forEach(item => {tabela.appendChild(newLine(item.name, item.qtd, item.id, item.weight))})
    }
    catch(error){
        console.log(error)
        window.location.href="../pages/error.html"
    }
    
}

render()