const listProduct = () =>  {
    return fetch(`http://localhost:3000/product`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const createProduct = (name, qtd, weight) => { 
    return fetch(`http://localhost:3000/product`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            name: name,
            qtd: qtd,
            weight: weight
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeProduct = (id) => { 
    return fetch(`http://localhost:3000/product/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detailProduct = (id) => { 
    return fetch(`http://localhost:3000/product/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const editProduct = (id, name, qtd, weight) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            qtd: qtd,
            weight: weight
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

export const inventoryService = { 
    listProduct,
    createProduct, 
    removeProduct,
    detailProduct,
    editProduct
}
