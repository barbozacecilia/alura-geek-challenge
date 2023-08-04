//const customerList = () => fetch("http://localhost:3000/productsList").then((response) => response.json());

const addNewCard=(imgUrl,name, price, id)=>{
    const card= document.createElement("div")
    const content= 
        `<div class="products__card_container">
                <img src=${imgUrl} alt="imagen del producto" id="card_img">
                <p class="card_price"> ${name} </p>
                <p class="card_price"> ${price} </p>
                <a class="card_link" href="../product.html?id=${id}">Link</a>

                </div>`
    card.innerHTML=content
    //card.dataset.id= id
    return card
}

const products = document.querySelector('[data-product]')

// clientServices.customerList().then((data) => {
//     data.forEach(({imgUrl,name,price, id }) => {
//         const newProduct = createNewLine(imgUrl,name,price, id);
//         div.appendChild(newProduct);
//      });
    
// }).catch((error) => alert('hubo un error'))
const http = new XMLHttpRequest();
http.open("GET", "https://64bdf1392320b36433c7ea24.mockapi.io/product");
http.send();

http.onload = () => { 
            const data = JSON.parse(http.response);
            console.log(data)
            data.forEach( (product) =>{
              const newProduct = addNewCard(product.imgUrl, product.name, product.price, product.id)
              products.appendChild(newProduct)
            })
            console.log(data)
        };


//GET

const listProducts = () =>{
    fetch("https://64bdf1392320b36433c7ea24.mockapi.io/product")
    .then(response=>response.json())
    .catch(error=>console.log(error)) 
}

const listProduct =(id) => {
    return fetch(`https://64bdf1392320b36433c7ea24.mockapi.io/product${id}`).then((response)=>{
        return response.json()
    })
};



//POST

const createProduct = (imgUrl,name, price) => {
    return fetch(`https://64bdf1392320b36433c7ea24.mockapi.io/product`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
         imgUrl, name , price
        })
    }).then((response)=>{
        if(response.ok){
            return response.body
        }throw new Error("No es posible crear un nuevo producto")
    })
}
    

//PUT
const modifyProduct = async(imgUrl,name, price, description,id)=>{
    return fetch(`https://64bdf1392320b36433c7ea24.mockapi.io/product/${id}`,{
        method: "PUT",
        headers: {"Contenet-Type": "application/json"},
        body: JSON.stringify({
            imgUrl, name,price,description,id
        }),
    })
    .then((response)=>{
        return response.json()
    }).catch((error)=>console.log(error))
}

//DELETE

const deleteProduct = async(id)=>{
    return await fetch (`https://64bdf1392320b36433c7ea24.mockapi.io/product/${id}`, {
        method: "DELETE",
        headers: {"Contenet-Type": "application/json"}
    })
}

export const productsServices= {
    listProducts,
    listProduct,
    createProduct,
    modifyProduct,
    deleteProduct,
}

