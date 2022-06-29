import { inventoryService } from '../service/inventory-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const name = evento.target.querySelector('[data-name]').value
    const qtd = evento.target.querySelector('[data-qtd]').value
    const weight = evento.target.querySelector('[data-weight]').value

    await inventoryService.createProduct(name, qtd, weight)
    window.location.href = '../pages/register_product_concluded.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../pages/error.html"
  }
})