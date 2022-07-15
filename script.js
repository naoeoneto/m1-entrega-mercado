function renderizarFrutas(arr){
    let mainFrutas = document.querySelector(".fruits")
    let productList = document.createElement("ul")

    for(let i = 0; i < arr.length; i++){
        if(arr[i].category == "Frutas"){
            let productCard = document.createElement("li")
            let productImg = document.createElement("img")

            productCard.classList.add("product")
            productImg.classList.add("product-img")
            productImg.alt = arr[i].imageDescription
            
            if(arr[i].image == undefined){
                productImg.src = "./img/products/no-img.svg"
            }else{
                productImg.src = arr[i].image
            }

            let productMain = document.createElement("main")
            let productTitle = document.createElement("h1")
            let productCategory = document.createElement("h5")
            let productPrice = document.createElement("strong")

            productMain.classList.add("product-main")
            productTitle.classList.add("product-title")
            productTitle.innerText = arr[i].title
            productCategory.classList.add("product-category")
            productCategory.innerText = arr[i].category
            productPrice.classList.add("product-price")
            productPrice.innerText = `R$ ${arr[i].price}`
            
            mainFrutas.appendChild(productList)
            productList.appendChild(productCard)
            productCard.append(productImg, productMain, productTitle, productCategory, productPrice)
        } 
    }
}
(renderizarFrutas(products))

function renderizarBebidas(arr){
    let mainBebidas = document.querySelector(".drinks")
    let productList = document.createElement("ul")

    for(let i = 0; i < arr.length; i++){
        if(arr[i].category == "Bebidas"){
            let productCard = document.createElement("li")
            let productImg = document.createElement("img")

            productCard.classList.add("product")
            productImg.classList.add("product-img")
            productImg.alt = arr[i].imageDescription
            
            if(arr[i].image == undefined){
                productImg.src = "./img/products/no-img.svg"
            }else{
                productImg.src = arr[i].image
            }

            let productMain = document.createElement("main")
            let productTitle = document.createElement("h1")
            let productCategory = document.createElement("h5")
            let productPrice = document.createElement("strong")

            productMain.classList.add("product-main")
            productTitle.classList.add("product-title")
            productTitle.innerText = arr[i].title
            productCategory.classList.add("product-category")
            productCategory.innerText = arr[i].category
            productPrice.classList.add("product-price")
            productPrice.innerText = `R$ ${arr[i].price}`
            
            mainBebidas.appendChild(productList)
            productList.appendChild(productCard)
            productCard.append(productImg, productMain, productTitle, productCategory, productPrice)
        } 
    }
}
(renderizarBebidas(products))

function renderizarHigiene(arr){
    let mainHigiene = document.querySelector(".hygiene")
    let productList = document.createElement("ul")

    for(let i = 0; i < arr.length; i++){
        if(arr[i].category == "Higiene"){
            let productCard = document.createElement("li")
            let productImg = document.createElement("img")

            productCard.classList.add("product")
            productImg.classList.add("product-img")
            productImg.alt = arr[i].imageDescription
            
            if(arr[i].image == undefined){
                productImg.src = "./img/products/no-img.svg"
            }else{
                productImg.src = arr[i].image
            }

            let productMain = document.createElement("main")
            let productTitle = document.createElement("h1")
            let productCategory = document.createElement("h5")
            let productPrice = document.createElement("strong")

            productMain.classList.add("product-main")
            productTitle.classList.add("product-title")
            productTitle.innerText = arr[i].title
            productCategory.classList.add("product-category")
            productCategory.innerText = arr[i].category
            productPrice.classList.add("product-price")
            productPrice.innerText = `R$ ${arr[i].price}`
            
            mainHigiene.appendChild(productList)
            productList.appendChild(productCard)
            productCard.append(productImg, productMain, productTitle, productCategory, productPrice)
        } 
    }
}
(renderizarHigiene(products))