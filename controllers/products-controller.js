const newProduct=(imgUrl, name, price, id)=>{
    const card= document.createElement("div")
    const content= 
        `
        <div class="products__card_container">
                    <p class="card_price">${price}</p>
                    <a class="card_link" href="../product.html?id=${id}">Link</a>
        </div>
        `
    card.innerHTML=content
    card.dataset.id= id
    return card
}

const products = document.querySelector('[data-product]')


