import { inventoryService } from '../service/inventory-service.js'

(async () => { 
  const getURL = new URL(window.location)

  const productId = getURL.searchParams.get('id')
  
  const inputName = document.querySelector('[data-name]')
  const inputQtd = document.querySelector('[data-qtd]')
  const inputWeight = document.querySelector('[data-weight]')
  try { 
    const dados = await inventoryService.detailProduct(productId)
    inputName.value = dados.name
    inputQtd.value = dados.qtd
    inputWeight.value = dados.weight
  }
  catch(error){
    console.log(error)
    window.location.href="../pages/error.html"
  }

  
  const form = document.querySelector('[data-form]')
  
  
  form.addEventListener('submit', async (event)=> { 
    event.preventDefault()
    try {
      await inventoryService.editProduct(productId, inputName.value, inputQtd.value, inputWeight.value)
      window.location.href = "../pages/edit_product_concluded.html"
    }
    catch(error){
      console.log(error)
      window.location.href="../pages/error.html"
    }
  })
})()
