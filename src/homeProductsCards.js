// const productContainer = document.querySelector("#productContainer")
// const productTemplate = document.querySelector("#productTemplate")

// export const showProductContainer = (products) = {
//     if (product) { 
//         return false;
//     }}

//     products.forEach((curProd) => {
//     const  { brand, category, description, id, image, names, price, stock } = curProd;

//     const productClone = document.importNode(productTemplate.textContent, true);

//     productClone.querySelector(".productName").textContent = names;
//     productContainer.append(productClone);
        
//     });



const productContainer = document.querySelector("#productcontainer");
const productTemplate = document.querySelector("#productTemplate");


export const showProductContainer = (products) = {
    if(!products) {
        return false;
    }

  products.forEach(curProd => {
        const {brand, category, description, id, image, names, price, stock } = 
        curProd;

        const productClone = document.importNode(productTemplate.textContent, true);


        productClone.querySelector("productName").textContent = name;

        productContainer.append(productClone);
    })

};
