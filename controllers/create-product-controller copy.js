import { productsServices } from "../services/products-services.js"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const imgUrl= document.querySelector('[data-url]').value
    const name= document.querySelector('[data-name]').value
    // const cat= document.querySelector('[data-cat]').value
     const price= document.querySelector('[data-price]').value
    // const id= document.querySelector('[data-description]').value

    productsServices.createProduct(imgUrl, name, price)
    .then( response => {
        window.location.href = "../../index.html"
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
})