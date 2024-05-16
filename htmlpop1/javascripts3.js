htmlData=""
const res=fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
    console.log(res);
    setData(res)
}).catch((err)=>{
    console.log(err);
})


const setData = (products)=>{

    products.forEach(item=>{
        htmlData+=
        `
        <div class="card col-3"">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.id}</p>
                <p class="card-text">${item.price}</p>
                <p class="card-text">${item.category}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
        `
    })

    console.log(htmlData)
    
    cnt.innerHTML=htmlData

}