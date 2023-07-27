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

const createProduct = (name, imgUrl, price) => {
    return fetch(`https://64bdf1392320b36433c7ea24.mockapi.io/product`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, imgUrl, price
        })
    }).then((response)=>{
        if(response.ok){
            return response.body
        }throw new Error("No es posible crear un nuevo producto")
    })
}
    

//PUT
const modifyProduct = async(id,name,imgUrl, price, description)=>{
    return fetch(`https://64bdf1392320b36433c7ea24.mockapi.io/product/${id}`,{
        method: "PUT",
        headers: {"Contenet-Type": "application/json"},
        body: JSON.stringify({
            name,price,description,imgUrl
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



 const allInputs = document.querySelectorAll('.input__field');
 const textarea = document.querySelector('.form__contact__textarea');
 const label = document.querySelectorAll('.input__label');

 console.log(allInputs.length);

 for( let index = 0; index < allInputs.length ; index++){  
 allInputs[index].addEventListener("focus", function(){
         console.log(label.length)
         allInputs[index].nextElementSibling.style.color = 'grey';
         allInputs[index].nextElementSibling.style.transition = 'all 0.3s ease';
         allInputs[index].nextElementSibling.style.top = '-20px';
         allInputs[index].nextElementSibling.style.color = 'var(--cor-de-blue)';
     });

textarea.addEventListener('focus', function(){
    textarea.nextElementSibling.style.color = 'grey';
    textarea.nextElementSibling.style.transition = 'all 0.3s ease';
    textarea.nextElementSibling.style.top = '-20px';
    textarea.nextElementSibling.style.color = 'var(--cor-de-blue)';
})

 allInputs[index].addEventListener("blur", function(){
        const label = allInputs[index].nextElementSibling;
        label.style.top = '-20px';
        label.style.width = '100%';
        label.style.fontSize = '12px';
        label.style.fontFamily = 'Raleway';
     });
     textarea.addEventListener('blur', function(){
        textarea.style.top = '-20px';
        textarea.style.width = '100%';
        textarea.style.fontSize = '12px';
        textarea.style.fontFamily = 'Raleway';
     })
 }
