import { productsServices } from "../services/products-services.js"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const imgUrl= document.querySelector('[data-url]').value
    const name= document.querySelector('[data-name]').value
     const price= document.querySelector('[data-price]').value

    productsServices.modifyProduct(imgUrl, name, price)
    .then( response => {
        window.location.href = "../../screens/edit-products.html"
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
})